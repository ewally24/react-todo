var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
	onFormSubmit: function(e) {
		var {dispatch} = this.props;

		e.preventDefault();
		var task = this.refs.task.value;

		if(task.length > 0) {
			this.refs.task.value = '';
			// this.props.addTodo(task);
			//dispatch(actions.addTodo(task));
			dispatch(actions.startAddTodo(task));
		} else {
			this.refs.task.focus();
		}
	},
	render: function() {
		return (
			<div className='container__footer'>
				<form ref='form' onSubmit={this.onFormSubmit}>
					<input type='text' ref='task' placeholder='what would you like todo today?'/>
					<button className='button expanded'> add todo </button>
				</form>
			</div>
		)
	}
});

export default connect()(AddTodo);