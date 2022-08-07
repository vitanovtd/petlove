import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "petlove-f1a17.firebaseapp.com",
    projectId: "petlove-f1a17",
    storageBucket: "petlove-f1a17.appspot.com",
    messagingSenderId: "316133367860",
    appId: "1:316133367860:web:e09924dd5dda5fc08b6a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();