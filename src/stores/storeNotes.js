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
      isEditing: false
    }
  },
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    addNote() {
      if(!this.isEditing && this.inputTitle && this.inputDescription && this.pickedColor) {
        const options = { day: "numeric", month: "long", year: "numeric" };
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
        this.updateLocalStorage()
        this.closeModal();
        } else if(this.isEditing && this.inputTitle && this.inputDescription && this.pickedColor) {
          
          closeModal();
        }
      
    },
    deleteNote(id) {
      console.log(id)
      this.notes = this.notes.filter(note => note.id !== id)
      this.updateLocalStorage()
    },
    editNote() {
      console.log('edit',title,description,color)
      
    },
    addNoteModal() {
      this.modalIsVisible = true
    },
    editModal(id) {
      this.modalIsVisible = true
      this.isEditing = true

      // find index function
      const index = this.notes.findIndex((note) => note.id === id)

      this.inputTitle = this.notes[index].title
      this.inputDescription = this.notes[index].description
      this.pickedColor = this.notes[index].color
      this.updateLocalStorage()
    },
    closeModal() {
      this.modalIsVisible = false
      this.isEditing = false
      this.inputTitle = ''
      this.inputDescription = ''
      this.pickedColor = 'bg-lightYellow'
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