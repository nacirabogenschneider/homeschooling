import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
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

// const settings = { timestampsInSnapshots: true }
export const firestore = firebase.firestore()

// firestore.settings(settings)

export default firebase
