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
      ],
    };
  },
  actions: {
    addNote(note) {
      this.notes.unshift(note)
      console.log(this.notes)
    }
  },
});
