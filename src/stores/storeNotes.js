// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: []
    }
  },
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    addNote(note) {
      this.notes.unshift(note)
      console.log('adddd')
    },
  },
})