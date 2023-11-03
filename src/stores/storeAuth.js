import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { auth } from '@/js/firebase'
import { useStoreNotes } from '@/stores/storeNotes'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return { 
      user: {
        id: null,
        email: null,
        fullName: null,
      }
    }
  },
  getters: {
    // Add this getter to extract the first word from fullName
    firstNameFromFullName() {
      if (this.user.fullName) {
        const fullName = this.user.fullName;
        const firstName = fullName.split(' ')[0];
        return firstName;
      }
      return null;
    },
    initialsFromFullName() {
      if (this.user.fullName) {
        const fullName = this.user.fullName;
        const words = fullName.split(' ');
        const initials = words.map(word => word.charAt(0)).join('');
        return initials;
      }
      return null;
    },
  },
  actions: {
    async init() {
      const storeNotes = useStoreNotes()

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          this.user.fullName = user.displayName
          this.router.push('/')
          storeNotes.init()
        } else {
          this.user = {}
          this.router.replace('/auth')
          storeNotes.clearNotes()
        }
      })
    },
    async registerUser(credentials) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
        const user = userCredential.user;

        // Update the user's profile
        await updateProfile(user, {
          displayName: `${credentials.firstName} ${credentials.lastName}`
        });

        // Update the user's full name in your store
        this.user.fullName = user.displayName;

        // Console log success or handle it as needed
        console.log('User registered successfully');
      } catch (error) {
        // Handle the error
        console.log('Error registering user: ', error.message);
      }
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
        const user = userCredential.user
        // console.log('user: ', user)
      }).catch((error) => {
        // console.log('error.message: ', error.message)
      })
    },
    logoutUser() {
      signOut(auth).then(() => {
        // console.log('User signed out')
      }).catch((error) => {
        // console.log(error.message)
      })
    }
  }
})
