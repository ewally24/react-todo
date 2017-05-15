var expect = require('expect');
var actions = require('actions');

describe('actions', () => {
	it('should generate searchText action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Todo Search Text'
		}

		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	})

	it('should generate addTodo action', () => {
		var action = {
			type: 'ADD_TODO',
			text: 'Walk Dog'
		}

		var res = actions.addTodo(action.text);

		expect(res).toEqual(action);
	})

	it('should generate addTodos action', () => {
		var todos = [{
			id: '111',
			text: 'anything',
			completed: false,
			completedAt: undefined,
			createdAt: 33000
		}]

		var action = {
			type: 'ADD_TODOS',
			todos: todos
		}

		var res = actions.addTodos(todos);
		expect(res).toEqual(action);
	})

	it('should generate toggle showCompleted action', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED',
		}

		var res = actions.toggleShowCompleted(action.showCompleted);
		expect(res).toEqual(action)
	});

	it('should generate toggle todo action', () => {
		var action = {
			type: 'TOGGLE_TODO',
			id: 1
		}

		var res = actions.toggleTodo(action.id);
		expect(res).toEqual(action);
	})


})