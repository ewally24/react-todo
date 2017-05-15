var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

// var TodoList = require('TodoList'); 
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
//var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			//todos: TodoAPI.getTodos()
			todos: [
				{
					id: uuid(),
					text: 'Reach Supa Gold With Gief',
				}, 
				{
					id: uuid(),
					text: 'Master Ultimate Self Control',
				},
				{
					id: uuid(),
					text: 'Finish React For Realz',
				}
			]
		}
	},
	componentDidUpdate: function(prevProps, prevState) {
		//TodoAPI.setTodos(this.state.todos);
	},
	handleAddTodo: function(task) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: task,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		})
	},
	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	},
	render: function() {
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

		return (
			<div className='row'>
				<div className='column small-centered medium-6 large-5 small-11'>
					<h1 className='page-title text-center'> Todo App </h1>

					<TodoSearch onSearch={this.handleSearch}/>
					<TodoList/>
					<AddTodo addTodo={this.handleAddTodo}/>
				</div>
			</div>
		)
	}
});

module.exports = TodoApp;