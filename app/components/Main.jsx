import React from 'react';
import * as Redux from 'react-redux';

export var Main = React.createClass({
	render: function() {
		return(
			<div>
				<div className='row'>
					<div className=''>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
})

export default Redux.connect()(Main);