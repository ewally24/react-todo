var React = require('react');
var moment = require('moment');
var uuid = require('node-uuid');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

var TodoApp = React.createClass({
	render: function() {
		return (
			<div className='row'>
				<div className='column small-centered small-11 medium-6 large-5'>
					<h1 className='page-title'> Todo App </h1>

					<TodoSearch/>
					<TodoList/>
					<AddTodo/>
					
				</div>
			</div>
		)
	}
});

module.exports = TodoApp;