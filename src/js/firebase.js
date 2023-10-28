import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcz6tdbIbhPxOxuEguCNCIm0_IqwMLQ7c",
  authDomain: "notes-app-b31f7.firebaseapp.com",
  projectId: "notes-app-b31f7",
  storageBucket: "notes-app-b31f7.appspot.com",
  messagingSenderId: "524561834746",
  appId: "1:524561834746:web:c96af0403940c92cbcdf43"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}