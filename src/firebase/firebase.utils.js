import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCa_18_9ePhMO6wwleatf0-bZo3JoTL6oM",
    authDomain: "crwn-clothing-be442.firebaseapp.com",
    databaseURL: "https://crwn-clothing-be442.firebaseio.com",
    projectId: "crwn-clothing-be442",
    storageBucket: "crwn-clothing-be442.appspot.com",
    messagingSenderId: "1029114862836",
    appId: "1:1029114862836:web:3ccaf44ea75f09876912a1"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
