import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export var TodoApp = React.createClass({
	onLogout: function() {
		var {dispatch} = this.props;

		dispatch(actions.startLogout());
	},
	render: function() {
		return (
			<div>
				<div className='page-actions'>
					<a href='#' onClick={this.onLogout}>Logout</a>
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
});

export default Redux.connect()(TodoApp);