var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');
import {configure} from 'configureStore';

//var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList'; // import is used to pass components through connect.
import ConnectedTodo, {Todo} from 'Todo';
//var Todo = require('Todo');

describe('TodoList', () => {
	it('should Exist', () => {
		expect(TodoList).toExist();
	})

	it('should render one Todo Component for each todo item', () => {
		var todos = [
			{
				id: 1,
				text: 'do something',
				completed: false,
				completedAt: undefined,
				createdAt: 500
			},
			{
				id: 2,
				text: 'Check mail',
				completed: false,
				completedAt: undefined,
				createdAt: 500
			}];

		var store = configure({
			todos: todos
		});

		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList/>
			</Provider>
		);

		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

		expect(todoComponents.length).toBe(todos.length);
	})

	it('should render empty message if no todos', () => {
		var todos = [];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container_message').length).toBe(1);
	})
})