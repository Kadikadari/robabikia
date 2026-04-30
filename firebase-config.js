// إعدادات Firebase الحقيقية لمشروع روبابيكيا
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, where, serverTimestamp, doc, updateDoc, arrayUnion, arrayRemove, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEv3Du_D1vnEhMMFaKyDS5TEMKqJYVML8",
  authDomain: "robabikia-8b31c.firebaseapp.com",
  projectId: "robabikia-8b31c",
  storageBucket: "robabikia-8b31c.firebasestorage.app",
  messagingSenderId: "499889755035",
  appId: "1:499889755035:web:f12679ba73ea29a5aa473e",
  measurementId: "G-QE4TP8QSNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth, db, onAuthStateChanged, signInWithEmailAndPassword,
    createUserWithEmailAndPassword, signOut, updateProfile, collection,
    addDoc, query, orderBy, onSnapshot, where,
    serverTimestamp, doc, updateDoc, arrayUnion, arrayRemove, getDoc, getDocs
};
