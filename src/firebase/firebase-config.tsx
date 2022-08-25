// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYWwzZqJ_R6mABzKSSImF6oaaZGuGQi6M",
  authDomain: "our-open-quiz.firebaseapp.com",
  projectId: "our-open-quiz",
  storageBucket: "our-open-quiz.appspot.com",
  messagingSenderId: "821302537025",
  appId: "1:821302537025:web:387d013d74276439414fc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)