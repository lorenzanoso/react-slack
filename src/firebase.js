import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtgeQ2yEnjgygz9przinJzB20xdoMt2_k",
    authDomain: "react-slack-efb58.firebaseapp.com",
    projectId: "react-slack-efb58",
    storageBucket: "react-slack-efb58.appspot.com",
    messagingSenderId: "593238646212",
    appId: "1:593238646212:web:e2f61d213a3d4de4c51891"
  };

  // Use this to Initialize the firebase App

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  // Use these for db, auth & provider

  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { db, auth, provider }