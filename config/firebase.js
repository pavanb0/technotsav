// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8oKJQQTo8AQtfSplN04A6NoXvJGlzAPM",
  authDomain: "technotsav-be692.firebaseapp.com",
  projectId: "technotsav-be692",
  storageBucket: "technotsav-be692.appspot.com",
  messagingSenderId: "1027321405185",
  appId: "1:1027321405185:web:382871607a6193f729c500",
  measurementId: "G-8JK3GZH9R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)