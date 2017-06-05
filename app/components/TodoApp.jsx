var React = require('react');
var moment = require('moment');
var uuid = require('node-uuid');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos(),
		}
	},
	render: function() {
		return (
			<div className='row'>
				<h1 className='page-title'> Todo App </h1>

				<div className='column small-centered small-11 medium-6 large-5'>
					<TodoSearch/>
					<TodoList/>
					<AddTodo/>
				</div>
			</div>
		)
	}
});

module.exports = TodoApp;