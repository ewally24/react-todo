var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
	it('searchTextReducers', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'clean room'
		}

		var res = reducers.searchTextReducer(df(''), df(action));
		expect(res).toEqual(action.searchText);
	})

	it('showCompletedReducers', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED',
			showCompleted: false
		}

		var res = reducers.showCompletedReducer(df(false), df(action));
		expect(res).toEqual(true)
	})

	describe('todosReducers', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				todo: {
					id: 'abc123',
					text: 'Something to do',
					completed: false,
					createdAt: 92384275
				}
			}

			var res = reducers.todosReducer(df([]), df(action));
			expect(res.length).toEqual(1)
			expect(res[0]).toEqual(action.todo);
		})

		it('should array of todos', () => {
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

		var res = reducers.todosReducer(df([]), df(action))

		expect(res.length).toEqual(1);
		expect(res[0]).toEqual(todos[0]);

		})

		it('should toggle completed for a todo', () => {
			var todos = [{
				id: 123,
				text: 'something',
				completed: true,
				createdAt: 123,
				completedAt: 125
			}]

			var action = {
				type: 'TOGGLE_TODO',
				id: 123
			}

			var res = reducers.todosReducer(df(todos), df(action));
			expect(res[0].completed).toEqual(false);
			expect(res[0].completedAt).toEqual(res[0].createdAt);
		})
	})
})