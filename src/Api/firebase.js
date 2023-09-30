
import { initializeApp } from "firebase/app";
import {  getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBBmcuXxJ8idotfbP5NGQEahbRhCGCYMxo",
    authDomain: "instagram-madina.firebaseapp.com",
    projectId: "instagram-madina",
    storageBucket: "instagram-madina.appspot.com",
    messagingSenderId: "184707432378",
    appId: "1:184707432378:web:ddd24af84a90199aeae783",
    measurementId: "G-Z7M230LR2W"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const firestore = getFirestore(app);