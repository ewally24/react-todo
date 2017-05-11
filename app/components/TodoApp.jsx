var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
			/*
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
			*/
		}
	},
	componentDidUpdate: function(prevProps, prevState) {
		TodoAPI.setTodos(this.state.todos);
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
	handleToggle: function(id) {
		var UpdatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : todo.createdAt;
			}
			return todo;
		})
		this.setState({todos: UpdatedTodos});
	},
	render: function() {
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

		return (
			<div className='row'>
				<div className='column small-centered medium-6 large-5 small-11'>
					<h1 className='page-title text-center'> Todo App </h1>

					<TodoSearch search={this.handleSearch}/>
					<TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
					<AddTodo addTodo={this.handleAddTodo}/>
				</div>
			</div>
		)
	}
});

module.exports = TodoApp;