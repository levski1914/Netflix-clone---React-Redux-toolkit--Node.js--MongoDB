// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4PTYVBqIPjUGW4kGbl_eniqLFyjNWsBg",
  authDomain: "netflix-clone-d6763.firebaseapp.com",
  projectId: "netflix-clone-d6763",
  storageBucket: "netflix-clone-d6763.appspot.com",
  messagingSenderId: "996962676068",
  appId: "1:996962676068:web:4d8fa8fb8fb3dae60d5e71",
  measurementId: "G-8Z9DW40WMB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
