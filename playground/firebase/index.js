import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8su9AdsDy3J4F5CMiEy20eSR7Uf1m-5A",
    authDomain: "errol-todo-app.firebaseapp.com",
    databaseURL: "https://errol-todo-app.firebaseio.com",
    projectId: "errol-todo-app",
    storageBucket: "errol-todo-app.appspot.com",
    messagingSenderId: "153267509522"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
  	app: {
  		name: 'Todo Application',
  		version: '0.0.1'
  	},
  	isRunning: true,
  	user: {
  		name: 'Quavo',
  		age: 27
  	}
  });

 firebaseRef.update({
 	'app/name': 'Todo-App',
 	'app/version': '0.0.2',
 	isRunning: false,
 }).then(() => {
 	console.log('update successful')
 }, () => {
 	console.log('update failed');
 });

 firebaseRef.child('user/age').remove().then(() => {
 	console.log('delete successful');
 }, () => {
 	console.log('delete failed.');
 })

 /*
 firebaseRef.once('value', (snapshot) => {
 	console.log('current state of db', snapshot.val())
 })
 */

 firebaseRef.child('user').on('value', (snapshot) => {
 	console.log('user data changed', snapshot.val());
 }, () => {
 	console.log('data fetch failed');
 });

 firebaseRef.update({
 	'app/name': 'Todo App',
 	'app/version': '0.0.1'
 }).then({

 }, () => {

 })

 firebaseRef.child('user').update({
 	age: 27
 });

 var todosRef = firebaseRef.child('todos');

 todosRef.on('value', (snapshot) => {
 	console.log('child_added', snapshot.key, snapshot.val());
 });

  todosRef.on('child_removed', (snapshot) => {
    console.log('child_removed', snapshot.key, snapshot.val());
 });

 todosRef.push({
 	text: 'walk the dog'
 });

 todosRef.push({
 	text: 'exercise'
 });

 todosRef.update({
 	text: 'play basketball'
 })

 todosRef.child('text').remove().then(() => {

 })