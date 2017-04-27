var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	render: function() {
		var {id, text, completed, createdAt, completedAt} = this.props;

		var RenderDate = () => {
			var message = 'Created ';
			var timestamp = createdAt;

			if(completedAt) {
				var message = 'Completed ';
				var timestamp = completedAt
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		}

		return (
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				<input type='checkbox' checked={completed}/>
				<p>{text} </p>
				<p>{RenderDate()}</p>
			</div>
		)
	}
});

module.exports = Todo;