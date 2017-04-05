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
					text: 'Walk the dog'
				},
				{
					id: uuid(),
					text: 'Take out the garbage'
				},
				{
					id: uuid(),
					text: 'Reach Platinum in SF V'
				},
				{
					id: uuid(),
					text: 'Learn how to Rollerblade'
				}
			]
		}
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
					text: task
				}
			]
		})
	},
	render: function() {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo addTodo={this.handleAddTodo}/>
			</div>
		)
	}
})

module.exports = TodoApp;