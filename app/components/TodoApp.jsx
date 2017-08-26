import React from 'react';
import * as redux from 'react-redux';
import * as actions from 'actions';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';


import uuid from 'node-uuid';
import moment from 'moment';

export class TodoApp extends React.Component {
	constructor(props) {
		super(props);
	}

	onLogout() {
		var {dispatch} = this.props;
		dispatch(actions.startLogout()); // will changed the state of the firebase user object to null
		dispatch(actions.clearTodos()); // This will clear the current users todos on logout.
	}

	render() {
		return (
			<div>
				<div className='page-actions'>
					<a href='#' onClick={this.onLogout.bind(this)}>Logout</a>
				</div>

				<div className='row'>
					<div className='column small-centered small-11 medium-6 large-5'>
						<h1 className='page-title'> Todo App </h1>

						<TodoSearch/>
						<TodoList/>
						<AddTodo/>
					</div>
				</div>
			</div>
		)
	}
};

export default redux.connect()(TodoApp);