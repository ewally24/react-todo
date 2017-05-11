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
				<form ref='ref' onSubmit={this.onFormSubmit}>
					<input type='text' ref='task' placholder='what do you want todo today?'/>
					<button className='button expanded'> add todo </button>
				</form>
			</div> 
		)
	}
});

module.exports = AddTodo;