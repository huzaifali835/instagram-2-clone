// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD8k7s4T41MPT5inTYK3ONFMKaeuV5J8mA",
    authDomain: "instagram-2-clone-2ff57.firebaseapp.com",
    projectId: "instagram-2-clone-2ff57",
    storageBucket: "instagram-2-clone-2ff57.appspot.com",
    messagingSenderId: "544655698812",
    appId: "1:544655698812:web:e7c338ae66d0392b9292f9",
    measurementId: "G-WFXT1G4TV1"
};

const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};