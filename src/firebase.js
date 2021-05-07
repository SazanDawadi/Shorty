import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCGG96hLsV9wXqF4Pn42Egwf3L2pVHd2Yg",
    authDomain: "shorty-urls.firebaseapp.com",
    projectId: "shorty-urls",
    storageBucket: "shorty-urls.appspot.com",
    messagingSenderId: "24930964970",
    appId: "1:24930964970:web:0efe5a589d55e2c7d00e93"
  };

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
