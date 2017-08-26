import React from 'react';
import * as Redux from 'react-redux';

export class Main extends React.Component {
	render() {
		return (
			<div>
				<div className='row'>
					<div className=''>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}

export default Redux.connect()(Main);