// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9DSz6R_vA516K0-TxQ334JTW9QRf3FPY",
  authDomain: "ionicfirebase-7fd2e.firebaseapp.com",
  projectId: "ionicfirebase-7fd2e",
  storageBucket: "ionicfirebase-7fd2e.firebasestorage.app",
  messagingSenderId: "592960152975",
  appId: "1:592960152975:web:3a35d180ce81cb649ed7fa",
  measurementId: "G-GCKNXNYJDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
