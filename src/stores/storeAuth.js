import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../js/firebase";
import { useStoreNotes } from '../stores/storeNotes';

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      user: {
        id: null,
        email: null,
        firstName: null,
        lastName: null,
      }
    };
  },
  actions: {
    init() {
      const storeNotes = useStoreNotes();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.user.firstName = user.displayName; 
          this.router.push('/');
          storeNotes.init();
        } else {
          this.user = {};
          this.router.replace('/auth');
          storeNotes.clearNotes();
        }
      });
    },
    registerUser(credential) {
      createUserWithEmailAndPassword(auth, credential.email, credential.password)
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: credential.firstName
          }).then(() => {
            this.user.id = user.uid;
            this.user.email = user.email;
            this.user.firstName = credential.firstName;
            this.user.lastName = credential.lastName;
            this.router.push('/');
          });
        })
        .catch((error) => {
          console.log('error message', error.message);
        });
    },
    logoutUser() {
      signOut(auth).then(() => {
        console.log('user sign out');
      }).catch((error) => {
        console.log(error.message);
      });
    },
    loginUser(credential) {
      signInWithEmailAndPassword(auth, credential.email, credential.password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.user.firstName = user.displayName; 
          this.router.push('/');
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
});
