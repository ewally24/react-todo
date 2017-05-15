var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');

var actions = require('actions');

export var Todo = React.createClass({
	render: function() {
		var {id, text, completed, createdAt, completedAt, dispatch} = this.props;

		var todoClassName = completed ? 'todo todo-completed' : 'todo';

		var RenderDate = () => {
			var timestamp = createdAt;
			var message = 'Created At ';

			if(completed) {
				var timestamp = completedAt;
				var message = 'Completed At ';
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
		}


		return (
			<div className={todoClassName} onClick={()=>{
				//this.props.onToggle(id);
				dispatch(actions.toggleTodo(id));
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
});

export default connect()(Todo);