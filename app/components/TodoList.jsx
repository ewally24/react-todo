var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
	render: function() {
		var RenderTodos = () => {
			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo}/>
				)
			})
		}

		var {todos} = this.props;
		return (
			<div>
				{RenderTodos()}
			</div>
		)
	}
});

module.exports = TodoList;