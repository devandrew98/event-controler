import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYX3Pgu77KawsA2kP1r54mrSPacPUc9mI",
    authDomain: "event-controller-d3e23.firebaseapp.com",
    projectId: "event-controller-d3e23",
    storageBucket: "event-controller-d3e23.firebasestorage.app",
    messagingSenderId: "112663225030",
    appId: "1:112663225030:web:08fa304cb7ca8a5b04edc7",
    measurementId: "G-FHHFWZGC92"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword };