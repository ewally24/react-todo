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

		it('clear array of todos', () => {
			var todos = [{
			id: '111',
			text: 'anything',
			completed: false,
			completedAt: undefined,
			createdAt: 33000
		}]

		var action = {
			type: 'CLEAR_TODOS',
		}

		var res = reducers.todosReducer(df(todos), df(action))

		expect(res.length).toEqual(0);
		})

		it('should update todo', () => {
			var todos = [{
				id: 123,
				text: 'something',
				completed: true,
				createdAt: 123,
				completedAt: 125
			}]

			var updates = {
				completed: false,
				completedAt: null
			}

			var action = {
				type: 'UPDATE_TODO',
				id: todos[0].id,
				updates: updates
			}

			var res = reducers.todosReducer(df(todos), df(action));

			expect(res[0].completed).toEqual(updates.completed);
			expect(res[0].completedAt).toEqual(updates.completedAt);
			expect(res[0].text).toEqual(todos[0].text);
		})
	})

	describe('authReducer', () => {
		it('should store uid on LOGIN', () => {
			const action = {
				type: 'LOGIN',
				uid: 'abc123'
			};

			const res = reducers.authReducer(undefined, df(action));

			expect(res).toEqual({
				uid: action.uid
			})
		})

		it('should wipe auth on LOGOUT', () => {
			const authData = {
				uid: '123abc'
			}

			const action = {
				type: 'LOGOUT'
			}

			const res = reducers.authReducer(df(authData), df(action));

			expect(res).toEqual({});
		})
	})
})