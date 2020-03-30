import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
export var firebaseConfig = {
  apiKey: "AIzaSyBeqfhdWjQ6pqc7De4FLSTyplzcLq7H9iw",
  authDomain: "tinderfood-83ba7.firebaseapp.com",
  databaseURL: "https://tinderfood-83ba7.firebaseio.com",
  projectId: "tinderfood-83ba7",
  storageBucket: "tinderfood-83ba7.appspot.com",
  messagingSenderId: "1013681643309",
  appId: "1:1013681643309:web:022b31184b50a99e85bda4",
  measurementId: "G-4JPNB788E0"
};

firebase.initializeApp(firebaseConfig)

export default firebase;