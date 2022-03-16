// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore/lite'
// import { getAuth } from 'firebase/auth';


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACcqVbcyts0Yzwdo_-6LeN_Pw_U_LA8Ng",
    authDomain: "vezeeta-website-db.firebaseapp.com",
    databaseURL: "https://vezeeta-website-db-default-rtdb.firebaseio.com",
    projectId: "vezeeta-website-db",
    storageBucket: "vezeeta-website-db.appspot.com",
    messagingSenderId: "118999132560",
    appId: "1:118999132560:web:117741d75c1a3c81d42b15"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export const authentication = getAuth(app)
// export {db}


firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
const auth = firebase.auth();
export {db , auth}