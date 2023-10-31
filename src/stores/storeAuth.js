import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, onAuthStateChanged  } from "firebase/auth";
import { auth } from "../js/firebase";
import { useStoreNotes } from '../stores/storeNotes';

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
     user: {}
    };
  },
  getters: {
  
  },
  actions: {
    init() {
        const storeNotes = useStoreNotes();

        onAuthStateChanged(auth, (user) => {
            if (user) {
              this.user.id = user.uid;
              this.user.email = user.email;
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
  
        // createUserWithEmailAndPassword(auth, credential.email, credential.password)
        createUserWithEmailAndPassword(auth, credential.email, credential.password, credential.firstName, credential.lastName)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log('user:', user)
            // ...
        })
        .catch((error) => {
            console.log('error message', error.message)
        });
    },
    logoutUser() {
        signOut(auth).then(() => {
            console.log('user sign out')
          }).catch((error) => {
           console.log(error.message)
          });
    },
    loginUser(credential) {
        signInWithEmailAndPassword(auth, credential.email, credential.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('user',user)
                // ...
            })
            .catch((error) => {
                console.log(error.message)

            });
                }
  }
});
