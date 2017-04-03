var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
	it('should Exist', () => {
		expect(TodoList).toExist();
	})

	it('should render one Todo Component for each todo item', () => {
		var todos = [
			{
				id: 1,
				text: 'do something'
			},
			{
				id: 2,
				text: 'Check mail'
			}]

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todoComponents.length).toBe(todos.length);
	})
})