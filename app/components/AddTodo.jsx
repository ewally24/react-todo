var React = require('react');

var AddTodo = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();
		var task = this.refs.task.value;

		if(task.length > 0) {
			this.refs.task.value = '';
			this.props.addTodo(task);
		} else {
			this.refs.task.focus();
		}
	},
	render: function() {
		return (
			<div>
				<form ref='form' onSubmit={this.onFormSubmit} className='todo-form'>
					<input type='text' ref='task' placeholder='What do you need to do?' />
					<button className='button expanded'> Add Todo</button>
				</form>
			</div>
		)
	}
});

module.exports = AddTodo;