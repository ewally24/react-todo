import React from 'react';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import firebase from 'firebase';

const store = require('configureStore').configure();
import * as actions from 'actions';

import Main from 'Main';
import Login from 'Login';
import TodoApp from 'TodoApp';
import * as TodoAPI from 'TodoAPI';


//load foundation
$(document).foundation();

// load custom styles
require('style!css!sass!ApplicationStyles');

var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log('currentState', state);
})

//var initialTodos = TodoAPI.getTodos();
//console.log(initialTodos, 'Current Todos State:');
// store.dispatch(actions.addTodos(initialTodos));

// Authentication Section 

// redirect if user is not logged in.
// the user object holds the uid that is passed from firebase when the user authenticats through github. user.uid
firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		// if authentication is successful adds user.uid from github authentication to the redux store auth object.
		// retrieves that users todos.
		console.log('successful authentication uid:', user.uid);
		store.dispatch(actions.login(user.uid));
		store.dispatch(actions.startAddTodos());
		hashHistory.push('todos');
	} else {
		console.log('logout failed.');
		store.dispatch(actions.logout()); // will set the redux store auth object to empty and redirect the user to login page.
		hashHistory.push('/');
	}
})

var requireLogin = (nextState, replace, next) => {
	if(!firebase.auth().currentUser) {
		replace('/');
	}
	next(); 
}

var redirectIfLoggedIn = (nextState, replace, next) => {
	if(firebase.auth().currentUser) {
		replace('/todos');
	}
	next();
}


reactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
			<Route path='todos' component={TodoApp} onEnter={requireLogin}/>
		</Route>
	</Router>
	</Provider>,
	document.getElementById('app')
)

