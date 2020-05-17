import firebase from 'firebase/app'
import { storage } from './firebase'

export {
    getCards,
    getCardById,
    getCardByUser,
  postSpeech,
}

function getCards({ firestore = firebase.firestore }) {
  return firestore
    .collection('cards')
    .get()
    .then(snapshot => snapshot.docs.map(card => card.data()))
    .catch(error => console.error(error))
}

function getCardById({firestore, id }) {
  return firestore
    .collection('cards')
    .doc(id)
    .get()
    .then(doc => {
      if (doc.exists) {
        return doc.data()
      } else {
        return new Error('Card not found.')
      }
    })
    .catch(error => console.error(error))
}

function getCardByUser({firestore, id }) {
  return firestore
    .collection('cards')
    .where('userId', '==', id)
    .get()
    .then(snapshot => snapshot.docs.map(doc => doc.data()))
    .catch(error => console.error(error))
}

function postSpeech({firestore = firebase.firestore, card }) {
  return firestore
    .collection('card')
    .add(card)
    .then(doc => {
      firestore.collection('card')
        .doc(doc.id)
        .update({ _id: doc.id, uploadStatus: 'uploading' })
        .then(res => {
        })
        .catch(error => console.error('Error updating document: ', error))
      return doc.id
    })
    .catch(function(error) {
      console.error('Error writing document: ', error)
    })
}
