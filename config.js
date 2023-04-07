import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC6-JwanHmIJZkOe2MwupQSM9mVcLEBtP8",
  authDomain: "willy-app-45b67.firebaseapp.com",
  projectId: "willy-app-45b67",
  storageBucket: "willy-app-45b67.appspot.com",
  messagingSenderId: "552636007194",
  appId: "1:552636007194:web:e9da0bd216c9340a6c62a3",
  measurementId: "G-KR8BEQ6PR2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
