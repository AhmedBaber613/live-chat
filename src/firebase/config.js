import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCkVRWNPpC1_S8ARej2wZM_jwMohRsQSRY",
  authDomain: "composition-63c7f.firebaseapp.com",
  projectId: "composition-63c7f",
  storageBucket: "composition-63c7f.firebasestorage.app",
  messagingSenderId: "704840894264",
  appId: "1:704840894264:web:b3557463c894cae7d523cd"
};

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectAuth, projectFirestore }