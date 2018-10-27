import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyA4POzriZ7_bVdrICbtJdJ_2mjBZX5cLJg',
  authDomain: 'proscht-webpro.firebaseapp.com',
  databaseURL: 'https://proscht-webpro.firebaseio.com',
  projectId: 'proscht-webpro',
  storageBucket: 'proscht-webpro.appspot.com',
  messagingSenderId: '834146581779'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const games = db.collection('games')

export {
  auth,
  currentUser,
  games
}
