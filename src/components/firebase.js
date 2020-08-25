import firebase from "firebase";

const firebseApp = firebase.initializeApp({
  apiKey: "AIzaSyAYRX_bjEujc2D9DIn0jHM7MU5_QvsL468",
  authDomain: "clone-a4449.firebaseapp.com",
  databaseURL: "https://clone-a4449.firebaseio.com",
  projectId: "clone-a4449",
  storageBucket: "clone-a4449.appspot.com",
  messagingSenderId: "500146029221",
  appId: "1:500146029221:web:da1ac13b2923b2d09f834c",
  measurementId: "G-3FNB2MYVET",
});

const auth = firebase.auth();

export { auth };
