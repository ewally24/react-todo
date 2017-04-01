var React = require('react');
var reactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

//load foundation
$(document).foundation();
//require('style!css!foundation-sites/dist/foundation.min.css');

//load custom styles
require('style!css!sass!ApplicationStyles');

reactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
)