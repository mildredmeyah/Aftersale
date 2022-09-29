import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyCr-qnudlB_CgjGgWSrE_Cv8o-1k1Paf4A",
    authDomain: "crud-2d797.firebaseapp.com",
    projectId: "crud-2d797",
    storageBucket: "crud-2d797.appspot.com",
    messagingSenderId: "846533845633",
    appId: "1:846533845633:web:98f255461e83630aaee380"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app ); 