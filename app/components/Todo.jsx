import React from 'react';
import moment from 'moment';
import * as redux from 'react-redux';
import * as actions from 'actions';

export class Todo extends React.Component {
	render() {
		var {id, text, completed, createdAt, completedAt, dispatch} = this.props;

		var TodoClassName = completed ? 'todo todo-completed' : 'todo';

		var RenderDate = () => {
			var timestamp = createdAt;
			var message = 'Created At ';

			if(completed) {
				var timestamp = completedAt;
				var message = 'Completed At ';
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');

		}

		return (
			<div className={TodoClassName} onClick={() => {
				// this.props.onToggle(id);
				//dispatch(actions.toggleTodo(id));
				dispatch(actions.startToggleTodo(id, !completed));
			}}>
				<div>
					<input type='checkbox' checked={completed}/> 
				</div>
				<div>
					<p>{text}</p>
					<p className='todo_subtext'>{RenderDate()}</p>
				</div>
			</div>
		)
	}
}

export default redux.connect()(Todo);