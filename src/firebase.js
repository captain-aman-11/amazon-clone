import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlETZKNvjB8P9tGPWEdmlXd2RiejjcPS0",
  authDomain: "clone-7ab5b.firebaseapp.com",
  databaseURL: "https://clone-7ab5b.firebaseio.com",
  projectId: "clone-7ab5b",
  storageBucket: "clone-7ab5b.appspot.com",
  messagingSenderId: "974558639909",
  appId: "1:974558639909:web:46ad2f05ca91a7ee63cccc",
  measurementId: "G-S3JK3HQY79"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };