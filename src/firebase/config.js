// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxo0BN_aG8s_7wnVotOqMNfRV9WHINngM",
  authDomain: "ecommerce-ceraolo.firebaseapp.com",
  projectId: "ecommerce-ceraolo",
  storageBucket: "ecommerce-ceraolo.appspot.com",
  messagingSenderId: "818600558530",
  appId: "1:818600558530:web:bb736da966220e1ca0a05b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore =() => app