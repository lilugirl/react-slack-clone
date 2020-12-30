// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCSdwKEWgros5sQTliMsrkupYXzR1rOREg",
  authDomain: "slack-clone-b9c8a.firebaseapp.com",
  databaseURL: "https://slack-clone-b9c8a-default-rtdb.firebaseio.com",
  projectId: "slack-clone-b9c8a",
  storageBucket: "slack-clone-b9c8a.appspot.com",
  messagingSenderId: "593276018061",
  appId: "1:593276018061:web:5f7d2cedfca5888f41f1c4",
  measurementId: "G-63PBE4EJPN"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;