export var setSearchText = ((searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText: searchText
	}
});

// toggleShowCompleted 
export var toggleShowCompleted = (() => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	}
})

export var addTodo = ((text) => {
	return {
		type: 'ADD_TODO',
		text: text
	}
})

export var addTodos = ((todos) => {
	return {
		type: 'ADD_TODOS',
		todos: todos
	}
})

export var toggleTodo = ((id) => {
	return {
		type: 'TOGGLE_TODO',
		id: id
	}
})