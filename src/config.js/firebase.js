import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_b11KAGnbKlYBy_t7Dr_JRfTtlHfqpZM",
  authDomain: "achou-app-8f18e.firebaseapp.com",
  projectId: "achou-app-8f18e",
  storageBucket: "achou-app-8f18e.appspot.com",
  messagingSenderId: "1015259438742",
  appId: "1:1015259438742:web:78acd0f496d46dbaceecb7"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;