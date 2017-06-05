var React = require('react');
var moment = require('moment');
var uuid = require('node-uuid');
var {connect} = require('react-redux');

var actions = require('actions');

export var Todo = React.createClass({
	render: function() {
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
				dispatch(actions.toggleTodo(id));
			}}>
				<div>
					<input type='checkbox' checked={completed} />
				</div>
				<div>
					<p>{text}</p>
					<p className='todo_subtext'>{RenderDate()}</p>
				</div>
			</div>
		)
	}
});

export default connect()(Todo);