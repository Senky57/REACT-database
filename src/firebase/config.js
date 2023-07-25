import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAmEbgMEoSxV_P6Euib2zyu6OOWcSt3yYY",
    authDomain: "movies-project-2-bfc96.firebaseapp.com",
    projectId: "movies-project-2-bfc96",
    storageBucket: "movies-project-2-bfc96.appspot.com",
    messagingSenderId: "1010905748745",
    appId: "1:1010905748745:web:318586407eddd3eae6efd8"
  };

  //počáteční initializace
  firebase.initializeApp(firebaseConfig)

  //počáteční initializace služeb
  const projectFirestore = firebase.firestore()

  export { projectFirestore }