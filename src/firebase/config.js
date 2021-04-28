import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDiP9lLt0Z3xdfkBbTelSzOc60al1g58hM",
    authDomain: "portfolio-blog-de699.firebaseapp.com",
    projectId: "portfolio-blog-de699",
    storageBucket: "portfolio-blog-de699.appspot.com",
    messagingSenderId: "447839831287",
    appId: "1:447839831287:web:3a792897340bdff8297ff2"
  };


  // initialise firebase
firebase.initializeApp(firebaseConfig)


// initialise firebase services
const fStore = firebase.firestore()
const fAuth = firebase.auth()
const fStorage = firebase.storage()


// saving firebase timestamp method
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export { timestamp, fStore, fAuth, fStorage }