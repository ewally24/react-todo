import firebase from 'firebase';

// Initialize Firebase
try {
  var config = {
    apiKey: "AIzaSyA8su9AdsDy3J4F5CMiEy20eSR7Uf1m-5A",
    authDomain: "errol-todo-app.firebaseapp.com",
    databaseURL: "https://errol-todo-app.firebaseio.com",
    projectId: "errol-todo-app",
    storageBucket: "errol-todo-app.appspot.com",
    messagingSenderId: "153267509522"
  };
  firebase.initializeApp(config);
 } catch(e) {

 }

export var firebaseRef = firebase.database().ref();
export default firebase;