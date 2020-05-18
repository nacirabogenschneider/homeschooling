import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firebase-storage'

var firebaseConfig = {
  apiKey: 'AIzaSyAZmSdSQsTXVrXM9EDD-30rUkQdXM0zHks',
  authDomain: 'homeschooling-de.firebaseapp.com',
  databaseURL: 'https://homeschooling-de.firebaseio.com',
  projectId: 'homeschooling-de',
  storageBucket: 'homeschooling-de.appspot.com',
  messagingSenderId: '829961094132',
  appId: '1:829961094132:web:cc8d3b893578b5eba1afa1',
  measurementId: 'G-T3QX62ZR7R',
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

const provider = new firebase.auth.GoogleAuthProvider()
const signInWithGoogle = ()=>auth.signInWithPopup(provider)


export { firestore, auth, storage, signInWithGoogle }
