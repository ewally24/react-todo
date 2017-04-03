var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
	it('should Exist', () => {
		expect(AddTodo).toExist();
	})

	it('should call onAddTodo prop with valid data', () => {
		var taskText = 'Beat Hyper light drifter';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.task.value = taskText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(taskText);
	})

	it('should not call onAddTodo prop with valid data', () => {
		var taskText = '';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.task.value = taskText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	})
})