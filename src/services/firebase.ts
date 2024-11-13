// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, onValue, remove } from "firebase/database";

// Your Firebase configuration object
const firebaseConfig = {
   apiKey: "AIzaSyBmJ1oD-eU0rliaJyzqKGR-apsSFPFDUwk",
   authDomain: "daaem-task.firebaseapp.com",
   databaseURL: "https://daaem-task-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "daaem-task",
   storageBucket: "daaem-task.firebasestorage.app",
   messagingSenderId: "444454753494",
   appId: "1:444454753494:web:646fba662722b6a9b6e577",
   measurementId: "G-HWHB3PF5XY"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue, remove };