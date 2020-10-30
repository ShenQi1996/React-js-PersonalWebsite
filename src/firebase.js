import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
  apiKey: "AIzaSyAs6j0_jXbMIt5bVD1v2u6EwaVxBtWQ6KI",
  authDomain: "personal-website-2f404.firebaseapp.com",
  databaseURL: "https://personal-website-2f404.firebaseio.com",
  projectId: "personal-website-2f404",
  storageBucket: "personal-website-2f404.appspot.com",
  messagingSenderId: "507704779738",
  appId: "1:507704779738:web:33d987b1f05faad51256e3",
  // Initialize Firebase
});

var db = firebaseApp.firestore();

export { db };
