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
			<div className='container__footer'>
				<form ref='form' onSubmit={this.onFormSubmit}>
					<input type='text' ref='task' placeholder='What would you like to todo today?'/>
					<button className='button expanded'> Add Todo </button>
				</form>
			</div>
		)
	}
});

module.exports = AddTodo;