// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//"AIzaSyAUTjLgJ0Wca0SwXuOSHtF5-sINanF6GBs"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-34755-2022-27c36.firebaseapp.com",
  projectId: "react-34755-2022-27c36",
  storageBucket: "react-34755-2022-27c36.appspot.com",
  messagingSenderId: "156050046547",
  appId: "1:156050046547:web:f4a653599f45df51ed90a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);