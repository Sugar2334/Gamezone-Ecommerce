import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQB3BA9wTwFIZRJ7sSBoum614LrMW_UvU",
  authDomain: "gamezone-ecommerce.firebaseapp.com",
  projectId: "gamezone-ecommerce",
  storageBucket: "gamezone-ecommerce.appspot.com",
  messagingSenderId: "562141115088",
  appId: "1:562141115088:web:09ee0ca6d1ce73f303e4d5"
};


const app = initializeApp(firebaseConfig);

export const initFirestore = () => app