import { defineStore } from "pinia";
import { collection, onSnapshot, doc, setDoc, deleteDoc, updateDoc, query, orderBy } from "firebase/firestore";
import { db } from '../js/firebase';
import { useStoreAuth } from '../stores/storeAuth';



let notesCollectionRef 
let notesCollectionQuery

let getNotesSnapshot = null 


export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        // {
        //   id: 1,
        //   title: "Buy Milk",
        //   date: '21 May 1995',
        //   description:
        //     "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        // },
        // {
        //   id: 2,
        //   title: "Eat Pizza",
        //   date: '21 May 1995',
        //   description:
        //     "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        // }
      ],
      isLoading: false,
      searchTerm: ''
    };
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
    init() {
      const storeAuth = useStoreAuth();
      
      notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes');
      notesCollectionQuery = query(notesCollectionRef, orderBy("id", "desc"));
      this.getNotes()
    },
    async getNotes() {
      // const querySnapshot = await getDocs(collection(db, "notes"));
      // querySnapshot.forEach((doc) => {
       

      //   let note = {
      //     id: doc.id,
      //     title: doc.data().title,
      //     description: doc.data().description,
      //     date: doc.data().date
      //   }
      //   this.notes.push(note);
      // });
      this.isLoading = false;

      if(getNotesSnapshot) getNotesSnapshot();

      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
              id: doc.id,
              title: doc.data().title,
              description: doc.data().description,
              date: doc.data().date
              }
        notes.push(note);
        });
        
        this.notes = notes;
          this.isLoading = true
      });
      
   
    },
    clearNotes() {
      this.notes = []
    },
   async addNote(note) {
      // this.notes.unshift(note)
      // console.log(this.notes)

      let currentDate = new Date().getTime()
      let id = currentDate.toString()
      
      await setDoc(doc(notesCollectionRef, id), {
        title: note.title,
        description: note.description,
        id: id,
        date: note.date
      });
      
    },
  async  updateNote(noteId, titleVal, descVal) {
      // const index = this.notes.findIndex(note => note.id === noteId);

      // if (index !== -1) {
      //   this.notes[index].title = titleVal;
      //   this.notes[index].description = descVal;
      // }

   
      await updateDoc(doc(notesCollectionRef, noteId), {
        title: titleVal,
        description: descVal
      });
    },
   async deleteNote(noteId) {
      // const index = this.notes.findIndex(note => note.id === noteId);

      // if(index !== -1) {
      //   this.notes.splice(index, 1);
      // }
      await deleteDoc(doc(notesCollectionRef, noteId));
    }
  }
});
