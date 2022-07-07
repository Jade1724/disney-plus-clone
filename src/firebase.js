// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUWwlvUmxD9P1cq78Q3x1qrLDw7zIUtl0",
  authDomain: "disney-plus-clone-c290c.firebaseapp.com",
  projectId: "disney-plus-clone-c290c",
  storageBucket: "disney-plus-clone-c290c.appspot.com",
  messagingSenderId: "289701551627",
  appId: "1:289701551627:web:9c346352f5d9223b01f10e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

console.log("HERE");

export { auth, provider, storage };
export default db;


// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAUXp0z8x4PA1cZV7StnTG8HGvEsxomp3U",
//   authDomain: "inspired-fact-200600.firebaseapp.com",
//   projectId: "inspired-fact-200600",
//   storageBucket: "inspired-fact-200600.appspot.com",
//   messagingSenderId: "376536471085",
//   appId: "1:376536471085:web:bf3788a41cffd1137c8aa4",
//   measurementId: "G-WEYB0EWMKY"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;