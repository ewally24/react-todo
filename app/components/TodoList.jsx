var React = require('react');
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

import Todo from 'Todo';

export var TodoList = React.createClass({
	render: function() {
		var {todos, showCompleted, searchText} = this.props;

		var RenderTodos = () => {
			if(todos.length === 0) {
				return <p className='container_message'> There are no todos, add some! </p>
			}

			return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
				return (
					<Todo key={todo.id} {...todo}/>
				)
			})

		}

		return (
			<div>
				{RenderTodos()}
			</div>
		)
	}
});

export default connect((state) => {
	return state;
})(TodoList)