import { defineStore } from 'pinia'
import { v4 as uuidv4 } from "uuid"
export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [],
      inputTitle: '',
      inputDescription: '',
      pickedColor: 'bg-lightYellow',
      modalIsVisible: false,
      isEditing: false,
      searchTerm: '',
      currentId: null,
      errorTitle: false,
      errorDesc: false
    }
  },
  getters: {
    filterNotes: (state) => {
      const search = state.searchTerm.toLowerCase().trim();
  
      if(search === '') {
        return state.notes
      } else {
        return state.notes.filter(note => note.title.toLowerCase().includes(search))
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
            color: this.pickedColor
        }
        this.notes.unshift(note)
        this.inputTitle = '';
        this.inputDescription = '';
        this.pickedColor = 'bg-lightYellow',
        this.updateLocalStorage()
        this.closeModal()
        } else if(!this.inputTitle && !this.inputDescription) {
          this.errorTitle = true
          this.errorDesc = true
        }  else if(this.inputTitle) {
          this.errorTitle = false
          this.errorDesc = true
        } else if(this.inputDescription) {
          this.errorDesc = false
          this.errorTitle = true
        } else if(!this.inputTitle) {
          this.errorTitle = true
        } else if(!this.inputDescription) {
          this.errorDesc = true
        } else if(this.isEditing && this.inputTitle && this.inputDescription && this.pickedColor) {
          const index = this.notes.findIndex((note) => note.id === this.currentId)
          console.log(index)
          this.notes[index].title = this.inputTitle
          this.notes[index].description = this.inputDescription
          this.notes[index].color = this.pickedColor
          this.updateLocalStorage()
          this.closeModal()
        }
    },
    deleteNote(id) {
      console.log(id)
      this.notes = this.notes.filter(note => note.id !== id)
      this.updateLocalStorage()
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
    // Function to update local storage
    updateLocalStorage() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
    // Function to load notes from local storage
    loadFromLocalStorage() {
      const storeNotes = localStorage.getItem("notes");
      if (storeNotes) {
        this.notes = JSON.parse(storeNotes);
      }
    },
  }
})