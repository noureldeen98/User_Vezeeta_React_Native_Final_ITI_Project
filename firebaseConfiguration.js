import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyACcqVbcyts0Yzwdo_-6LeN_Pw_U_LA8Ng",
    authDomain: "vezeeta-website-db.firebaseapp.com",
    databaseURL: "https://vezeeta-website-db-default-rtdb.firebaseio.com",
    projectId: "vezeeta-website-db",
    storageBucket: "vezeeta-website-db.appspot.com",
    messagingSenderId: "118999132560",
    appId: "1:118999132560:web:117741d75c1a3c81d42b15"
};


////////DB teating 
// const firebaseConfig = {
//     apiKey: "AIzaSyAyrUawd_2Wqfl5h-I0h1zZIzT0icwYfjc",
//     authDomain: "nth-glass-336023.firebaseapp.com",
//     projectId: "nth-glass-336023",
//     storageBucket: "nth-glass-336023.appspot.com",
//     messagingSenderId: "583354460407",
//     appId: "1:583354460407:web:5276ff9275ac491c484bf2",
//     measurementId: "G-L7LS2X8Y4N"
//   };

const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
const auth = firebase.auth();
export {db , auth, app}