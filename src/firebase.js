import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOhSiJwc_Wmf9QbeHhHFFRS7fWjID_E08",
  authDomain: "disney-plus-clone-640bb.firebaseapp.com",
  projectId: "disney-plus-clone-640bb",
  storageBucket: "disney-plus-clone-640bb.appspot.com",
  messagingSenderId: "1072582347227",
  appId: "1:1072582347227:web:2b66a662d6ffd6ba8b7ffe",
  measurementId: "G-W3PLXGZ2V3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
