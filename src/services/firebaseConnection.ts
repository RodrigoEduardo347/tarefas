import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBsOITm7FC62iVveojn8bLxNlMGJA23_48",
    authDomain: "tarefasplus-9fe99.firebaseapp.com",
    projectId: "tarefasplus-9fe99",
    storageBucket: "tarefasplus-9fe99.appspot.com",
    messagingSenderId: "877125277999",
    appId: "1:877125277999:web:befba9f0d3be9f4ef429da"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };