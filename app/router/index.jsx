import React from 'react';
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

import Main from 'Main';
import Login from 'Login';
import TodoApp from 'TodoApp';

// MiddleWare to add public private auth to login and todos pages
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

export default (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
			<TodoApp path='todos' component={TodoApp} onEnter={requireLogin}/>
		</Route>
	</Router>
)

