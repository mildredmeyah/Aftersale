import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCTJeyMfNNIqhtFh7qyB8E1J_3O-n5tW2k",
  authDomain: "aftersale-c2f21.firebaseapp.com",
  projectId: "aftersale-c2f21",
  storageBucket: "aftersale-c2f21.appspot.com",
  messagingSenderId: "95899227700",
  appId: "1:95899227700:web:b27fd9c6dd8ef6f5df9c61"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);