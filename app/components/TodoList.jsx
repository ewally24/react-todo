var React = require('react');
var {connect} = require('react-redux');

import Todo from 'Todo';
//var Todo = require('Todo');

export var TodoList = React.createClass({
	render: function() {
		var {todos} = this.props;

		var RenderTodos = () => {
			if(todos.length === 0) {
				return (
					<p className='container_message'>There are no todos, do something!</p>
				)
			}

			return todos.map((todo) => {
				return (
					<div>
						<Todo key={todo.id} {...todo}/>
					</div>
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
	return {
		todos: state.todos
	}
})(TodoList);