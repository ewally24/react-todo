var React = require('react');
var reactDOM = require('react-dom');
var {hashHistory} = require('react-router');
var {Provider} = require('react-redux');
var store = require('configureStore').configure();
var actions = require('actions');

import 'app/firebase/index';
import Router from 'app/router/index';

//load foundation
$(document).foundation();

//require('style!css!foundation-sites/dist/foundation.min.css');

//load custom styles
require('style!css!sass!ApplicationStyles');

// If user is not logged in redirect to login screen
firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		dispatch(actions.login(user.uid));
		hashHistory.push('/todos');
	} else {
		dispatch(actions.logout());
		hashHistory.push('/');
	}
})

var unsubscribe = store.subscribe(() => {
	var state = store.getState();
	// TodoAPI.setTodos(state.todos);

	console.log('currentState', state);
})

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));
store.dispatch(actions.startAddTodos());


reactDOM.render(
	<Provider store={store}>
		{Router}
	</Provider>,
	document.getElementById('app')
)