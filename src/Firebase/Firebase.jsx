// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAnQN1Bpu3lpOpfpOoJjnnyO4LiDCmdeg",
  authDomain: "technology-and-electronic-auth.firebaseapp.com",
  projectId: "technology-and-electronic-auth",
  storageBucket: "technology-and-electronic-auth.appspot.com",
  messagingSenderId: "1031086844752",
  appId: "1:1031086844752:web:d59a7e1d588b05c5e69a55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;