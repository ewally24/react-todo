import React from 'react';
import * as redux from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component {
	onFormSubmit(e) {
		var {dispatch} = this.props;

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
			<div>
				<form ref='form' onSubmit={this.onFormSubmit.bind(this)}>
					<input type='text' ref='task' placeholder='what do you want todo?'/>
					<button className='button expanded'>Add Todo </button>
				</form> 
			</div>
		)
	}
}

export default redux.connect()(AddTodo);

