// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
authDomain: "aiwebsitebuilder-b4319.firebaseapp.com",
  projectId: "aiwebsitebuilder-b4319",
  storageBucket: "aiwebsitebuilder-b4319.firebasestorage.app",
  messagingSenderId: "331393273393",
  appId: "1:331393273393:web:4616e87f457c510a9ecf10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
