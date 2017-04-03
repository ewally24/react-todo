var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
	render: function() {
		var {todos} = this.props;

		var RenderTodos = () => {
			return todos.map((todo) => {
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
})

module.exports = TodoList;