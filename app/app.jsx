var React = require('react');
var reactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');
var store = require('configureStore').configure();
import * as actions from 'actions';
import firebase from 'firebase';

import TodoApp from 'TodoApp';
import Login from 'Login';
import Main from 'Main';

// import './../playground/firebase/index';

//load foundation
$(document).foundation();

//require('style!css!foundation-sites/dist/foundation.min.css');

//load custom styles
require('style!css!sass!ApplicationStyles');

var unsubscribe = store.subscribe(() => {
	var state = store.getState();
	// TodoAPI.setTodos(state.todos);

	console.log('currentState', state);
})

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));


firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		store.dispatch(actions.login(user.uid));
		store.dispatch(actions.startAddTodos());
		hashHistory.push('todos');
	} else {
		store.dispatch(actions.logout());
		hashHistory.push('/');
	}
});

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
				<TodoApp path='todos' component={TodoApp} onEnter={requireLogin}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)