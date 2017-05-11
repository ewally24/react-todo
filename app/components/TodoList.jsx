var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
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
						<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

module.exports = TodoList;