import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAQHHK-jJE59XLF4B8suSpz9Vby_sQtjNM",
    authDomain: "blog-app-c7ad1.firebaseapp.com",
    projectId: "blog-app-c7ad1",
    storageBucket: "blog-app-c7ad1.appspot.com",
    messagingSenderId: "559169257131",
    appId: "1:559169257131:web:9fd15c56222be91dc401ee"
  };



//init fierbase

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()  
const projectFierbaseStore = firebase.firestore()
const timeStamps =firebase.firestore.FieldValue.serverTimestamp

export {projectAuth, projectFierbaseStore , timeStamps} 