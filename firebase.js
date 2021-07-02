import firebase from 'firebase'

//firebase server
const firebaseConfig = {
    apiKey: "AIzaSyBx-aWb4ST_xmy_o_YqY3NXfWYhoh_W3jg",
    authDomain: "whatsnext-v1.firebaseapp.com",
    projectId: "whatsnext-v1",
    storageBucket: "whatsnext-v1.appspot.com",
    messagingSenderId: "237962981731",
    appId: "1:237962981731:web:ef09f4223468f4b70e6356"
  };

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = firebase.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};