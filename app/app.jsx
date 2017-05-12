var React = require('react');
var reactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

var unsubscribe = store.subscribe(() => {
	var state = store.getState();
	console.log('new state', state);
});

store.dispatch(actions.addTodo('Create Spotify App'));
store.dispatch(actions.setSearchText('Learn'));
store.dispatch(actions.toggleShowCompleted());

//load foundation
$(document).foundation();
//require('style!css!foundation-sites/dist/foundation.min.css');

//load custom styles
require('style!css!sass!ApplicationStyles');

reactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
)