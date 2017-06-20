var React = require('react');
var reactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');
var store = require('configureStore').configure();
var actions = require('actions');

import TodoApp from 'TodoApp';
import Login from 'Login';
var Main = require('Main');
var TodoAPI = require('TodoAPI');

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
store.dispatch(actions.startAddTodos());


reactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={Main}>
				<IndexRoute component={Login}/>
				<TodoApp path='todos' component={TodoApp}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)