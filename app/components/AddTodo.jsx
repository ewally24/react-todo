import React from 'react';
var {connect} = require('react-redux');

import * as actions from 'actions';

export class AddTodo extends React.Component {
	onFormSubmit(e) {
		var dispatch = this.props.dispatch;
		
		e.preventDefault();
		var task = this.refs.task.value;

		if(task.length > 0) {
			this.refs.task.value = '';
			// this.props.addTodo(task);
			// dispatch(actions.addTodo(task));
			dispatch(actions.startAddTodo(task));

		} else {
			this.refs.task.focus();
		}
	}
	render() {
		return (
			<div className='container__footer'>
				<form ref='form' onSubmit={this.onFormSubmit.bind(this)}>
					<input type='text' ref='task' placeholder='what would you like todo today?'/>
					<button className='button expanded'> add todo </button>
				</form>
			</div>
		)
	}
}

export default connect()(AddTodo);