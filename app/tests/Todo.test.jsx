var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
	it('should Exist', () => {
		expect(Todo).toExist();
	})

	it('should call onToggle prop with id onClick', () => {
		var todoDate = {
			id: 199,
			text: 'todo.jsx test',
			completed: true 
		}

		var spy = expect.createSpy()
		var todo = TestUtils.renderIntoDocument(<Todo {...todoDate} onToggle={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(199);

	})
})