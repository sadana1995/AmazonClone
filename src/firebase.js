import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVsana4Wq6icgz_CFMhSe2MX9Qq5zOQjA",
  authDomain: "challenge-68141.firebaseapp.com",
  databaseURL: "https://challenge-68141.firebaseio.com",
  projectId: "challenge-68141",
  storageBucket: "challenge-68141.appspot.com",
  messagingSenderId: "18368433565",
  appId: "1:18368433565:web:17eb7b25b93a55b13a3374",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
