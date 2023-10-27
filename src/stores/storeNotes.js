import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: 1,
          title: "Buy Milk",
          date: '21 May 1995',
          description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
          id: 2,
          title: "Eat Pizza",
          date: '21 May 1995',
          description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
          id: 3,
          title: "Go to gym",
          date: '21 May 1995',
          description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        },
      ]
    };
  },
  getters: {
   
  },
  actions: {
    addNote(note) {
      this.notes.unshift(note)
      console.log(this.notes)
    },
    updateNote(noteId, titleVal, descVal) {
      const index = this.notes.findIndex(note => note.id === noteId);

      if (index !== -1) {
        this.notes[index].title = titleVal;
        this.notes[index].description = descVal;
      }
    },
    deleteNote(noteId) {
      const index = this.notes.findIndex(note => note.id === noteId);

      if(index !== -1) {
        this.notes.splice(index, 1);
      }
    }
  }
});
