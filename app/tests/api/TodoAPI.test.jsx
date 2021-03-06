var $ = require('jquery');
var expect = require('expect'); 

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	})

	it('should exist', () => {
		expect(TodoAPI).toExist();
	})
/*
	describe('setTodos', () => {
		it('should set valid todos array', () => {
			var todos = [
				{
					id: 23,
					text: 'Michael Jordon',
					completed: false
				}
			]

			TodoAPI.setTodos(todos);
			var actualTodos = JSON.parse(localStorage.getItem('todos'));
			expect(actualTodos).toEqual(todos);
		})

		it('should not set invalid todos array', () => {
			var badTodos = {a: 'b'};
			TodoAPI.setTodos(badTodos);
			expect(localStorage.getItem('todos')).toBe(null);
		})
	})

	describe('getTodos', () => {
		it('should return empty array for bad local storage data', () => {
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		})

		it('should return todo if valid array in local storage', () => {
			var todos = [
				{
					id: 23,
					text: 'Michael Jordon',
					completed: false
				}
			]

			localStorage.setItem('todos', JSON.stringify(todos));
			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);
		})
	})

	describe('filteredTodos', () => {
		var todos = [
			{
				id: 1,
				text: 'some text about todos',
				completed: true
			},
			{
				id: 2,
				text: 'some text about something',
				completed: false
			},
			{
				id: 3,
				text: 'text about the realness',
				completed: true 
			}
		]

		it('should return all todos when showCompleted is true', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		})

		it('should return only not completed todos when showCompleted is false', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		})

		it('should sort by completed status', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(true);
		})

		it('should return all todos by searchText', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
			expect(filteredTodos.length).toBe(2);
		})

		it('should return all todos if empty string', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		})
	})
*/
})