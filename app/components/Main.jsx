var React = require('react');

var Main = React.createClass({
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

module.exports = Main;