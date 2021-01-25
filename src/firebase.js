import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBmANoVAoYUDEFggcasMFNDWnFY34SOOXk",
    authDomain: "clone-3c846.firebaseapp.com",
    projectId: "clone-3c846",
    storageBucket: "clone-3c846.appspot.com",
    messagingSenderId: "1000444820870",
    appId: "1:1000444820870:web:518aa9fb7107fee9f30007"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider } 
