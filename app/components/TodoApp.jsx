var React = require('react');

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
					id: 1,
					text: 'Walk the dog'
				},
				{
					id: 2,
					text: 'Take out the garbage'
				},
				{
					id: 3,
					text: 'Reach Platinum in SF V'
				},
				{
					id: 4,
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
		alert('Added Task ' + task);
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