var expect = require('expect');
var actions = require('actions');

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var createMockStore = configureMockStore([thunk]);

describe('actions', () => {
	it('should generate searchText action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Todo Search Text'
		}

		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	})

	it('should create todo and dispatch ADD_TODO', (done) => {
		const store = createMockStore({});
		const todoText = 'My todo item';

		store.dispatch(actions.startAddTodo(todoText)).then(() => {
			const actions = store.getActions();
			expect(actions[0]).toInclude({
				type: 'ADD_TODO'
			});
			expect(actions[0].todo).toInclude({
				text: todoText
			});
			done();
		}).catch(done);
	})


	it('should generate addTodo action', () => {
		var action = {
			type: 'ADD_TODO',
			todo: {
				id: '123abc',
				text: 'anything we like',
				completed: false,
				createdAt: 0
			}
		}

		var res = actions.addTodo(action.todo);

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