import React from 'react';
var {Link, IndexLink} = require('react-router');
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var Login = React.createClass({
	onLogin: function() {
		var {dispatch} = this.props;

		dispatch(actions.startLogin());
	},
	render: function() {
		return (
			<div>
				<h1 className='page-title'> Todo App </h1>

				<div className='row'>
					<div className='column small-centered small-11 medium-6 large-5'>
						<div className='callout callout-auth'>
							<h3 className=''> Login </h3>
							<p> Login with Github account below </p>

							<button onClick={this.onLogin} className='button'> Login with Github </button>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default Redux.connect()(Login);