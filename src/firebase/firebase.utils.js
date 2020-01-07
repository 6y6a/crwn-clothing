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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating a user', error.message)
        }
    }

    return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
