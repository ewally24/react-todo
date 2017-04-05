var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog',
					completed: false
				},
				{
					id: uuid(),
					text: 'Take out the garbage',
					completed: true
				},
				{
					id: uuid(),
					text: 'Reach Platinum in SF V',
					completed: true
				},
				{
					id: uuid(),
					text: 'Learn how to Rollerblade',
					completed: false 
				}
			]
		}
	},
	handleToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
			}

			return todo;
		})

		this.setState({todos: updatedTodos});
	},
	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.ToLowerCase()
		})
	},
	handleAddTodo: function(task) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: task,
					completed: false
				}
			]
		})
	},
	render: function() {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo addTodo={this.handleAddTodo}/>
			</div>
		)
	}
})

module.exports = TodoApp;