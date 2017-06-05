var React = require('react');
var reactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');
var store = require('configureStore').configure();
var actions = require('actions');

// import './../playground/firebase/index';

//load foundation
$(document).foundation();

//require('style!css!foundation-sites/dist/foundation.min.css');

//load custom styles
require('style!css!sass!ApplicationStyles');

var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	TodoAPI.setTodos(state.todos);

	console.log('CurrentState', state);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

reactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('app')
)