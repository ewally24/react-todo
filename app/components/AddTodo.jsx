var React = require('react');

var AddTodo = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();
		var task = this.refs.task.value;

		if(task.length > 0) {
			this.refs.task.value = '';
			this.props.addTodo(task)
		} else {
			this.refs.task.focus();
		}
	},
	render: function() {
		return (
			<div>
				<form ref='form' onSubmit={this.onFormSubmit} >
					<input type='text' ref='task' placeholder='What do you want to get done?'/>
					<button className='button expanded'> Add Task </button>
				</form>
			</div>
		)
	}
});

module.exports = AddTodo;