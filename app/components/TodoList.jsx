import React from 'react';
var {connect} = require('react-redux');
import * as actions from 'actions';

import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export class TodoList extends React.Component {
	render() {
		var {todos, showCompleted, searchText, dispatch} = this.props;
		
		var RenderTodos = () => {
			var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

			if(filteredTodos.length == 0) {
				return <p className='container_message'> There is Nothing To do, add some! </p>
			}

			return filteredTodos.map((todo) => {
				return(
					<Todo key={todo.id} {...todo}/>
				)
			}) 
		}
		
		return (
			<div>
				{RenderTodos()}
			</div>
		)
	}
};

export default connect((state) => {
	return state;
})(TodoList)