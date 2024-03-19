import { defineStore } from 'pinia'
import { v4 as uuidv4 } from "uuid"

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [],
      favNotes: [],
      inputTitle: '',
      inputDescription: '',
      pickedColor: 'bg-lightYellow',
      modalIsVisible: false,
      isEditing: false,
      searchTerm: '',
      currentId: null,
      errorTitle: false,
      errorDesc: false,
      mobileSearchIsVisible: false
    }
  },
  getters: {
    filterNotes: (state) => {
      const search = state.searchTerm.toLowerCase().trim()
  
      if(search === '') {
        return state.notes
      } else {
        return state.notes.filter(note => note.title.toLowerCase().includes(search))
      }
     },
     filterFavNotes: (state) => {
      const search = state.searchTerm.toLowerCase().trim()

      if (search === '') {
        return state.favNotes
      } else {
        return state.favNotes.filter(note => note.title.toLowerCase().includes(search))
      }
    }
  },
  actions: {
    addNote() {
      if(!this.isEditing && this.inputTitle && this.inputDescription && this.pickedColor) {
        const options = { day: "numeric", month: "long", year: "numeric" }
        const note = {
            id: uuidv4(),
            title: this.inputTitle,
            description: this.inputDescription,
            date: new Date().toLocaleDateString(undefined, options),
            color: this.pickedColor,
            isFav: false
        }
        this.notes.unshift(note)
        this.inputTitle = '';
        this.inputDescription = '';
        this.pickedColor = 'bg-lightYellow',
        this.updateLocalStorage()
        this.closeModal()
        } else if(this.isEditing && this.inputTitle && this.inputDescription && this.pickedColor) {
          const index = this.notes.findIndex((note) => note.id === this.currentId)
          console.log(index)
          this.notes[index].title = this.inputTitle
          this.notes[index].description = this.inputDescription
          this.notes[index].color = this.pickedColor
          this.updateLocalStorage()
          this.closeModal()
        } else if(!this.inputTitle && !this.inputDescription) {
          this.errorTitle = true
          this.errorDesc = true
        }  else if(this.inputTitle && !this.inputDescription) {
          this.errorTitle = false
          this.errorDesc = true
        } else if(this.inputDescription && !this.inputTitle) {
          this.errorDesc = false
          this.errorTitle = true
        } 
    },
    deleteNote(id) {
      console.log(id)
      this.notes = this.notes.filter(note => note.id !== id)
      this.favNotes = this.favNotes.filter(favNote => favNote.id !== id)
      this.updateLocalStorage()
    },
    addToFav(id) {
      const note = this.notes.find(note => note.id === id)
      if (note) {
        // Check if the note is already in favorites
        
        if (!note.isFav) {
          this.favNotes.push(note)
          note.isFav = true
        } else {
          this.favNotes = this.favNotes.filter(favNote => favNote.id !== id)
          note.isFav = false
        }
        this.updateLocalStorage()
      }
      console.log(this.favNotes)
    },
    addNoteModal() {
      this.modalIsVisible = true
    },
    editModal(id) {
      this.modalIsVisible = true
      this.isEditing = true

      // fetching id of last opened note in edit
      this.currentId = id

      // find index function
      const index = this.notes.findIndex((note) => note.id === id)

      this.inputTitle = this.notes[index].title
      this.inputDescription = this.notes[index].description
      this.pickedColor = this.notes[index].color
      this.updateLocalStorage(); // Update localStorage
    },
    closeModal() {
      this.modalIsVisible = false
      this.isEditing = false
      this.inputTitle = ''
      this.inputDescription = ''
      this.pickedColor = 'bg-lightYellow'
      this.errorTitle = false
      this.errorDesc = false
    },
    openMobileSearch() {
      this.mobileSearchIsVisible = true
    },
    closeMobileSearch() {
      this.mobileSearchIsVisible = false
    },
    // Function to update local storage
    updateLocalStorage() {
      localStorage.setItem("notes", JSON.stringify(this.notes))
      localStorage.setItem("favNotes", JSON.stringify(this.favNotes))
    },
    // Function to load notes from local storage
    loadFromLocalStorage() {
      const storeNotes = localStorage.getItem("notes")
      const favNotes = localStorage.getItem("favNotes");
      if (storeNotes) {
        this.notes = JSON.parse(storeNotes);
      }
      if (favNotes) {
        this.favNotes = JSON.parse(favNotes)
      }
    },
  }
})