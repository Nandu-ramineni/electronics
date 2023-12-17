// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2LvXI89f5qt--9iHnV8kriGBpZQ6wz7k",
    authDomain: "techcraft-3c321.firebaseapp.com",
    projectId: "techcraft-3c321",
    storageBucket: "techcraft-3c321.appspot.com",
    messagingSenderId: "940298134618",
    appId: "1:940298134618:web:00197ee32eacd2a5a02463",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();
const db = getFirestore();
export { auth, googleAuthProvider,db };
export default app;