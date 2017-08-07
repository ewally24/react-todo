var $ = require('jquery');

module.exports = {
	/*
	setTodos: function(todos) {
		if($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
		}

		return todos;
	},
	getTodos: function() {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos)
		} catch(e) {

		}

		return $.isArray(todos) ? todos : [];
	},
	*/
	filterTodos: function(todos, showCompleted, searchText) {
		var filteredTodos = todos;

		// Filtered by showCompleted checked or by incomplete todos
		var filteredTodos = filteredTodos.filter((todo) => {
			return showCompleted || !todo.completed
		});

		// Filter by searchText.
		var filteredTodos = filteredTodos.filter((todo) => {
			var todoText = todo.text;
			return searchText.length === 0 || todoText.indexOf(searchText.toLowerCase()) > -1;
		});

		filteredTodos.sort((a, b) => {
			if(a.completed && !b.completed) {
				return -1;
			} else if(!a.completed && b.completed) {
				return 1;
			} else {
				return 0;
			}
		})

		return filteredTodos;
	}
}