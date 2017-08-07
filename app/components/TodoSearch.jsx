import React from 'react';
var {connect} = require('react-redux');

import * as actions from 'actions';

export class TodoSearch extends React.Component {
	render() {
		var {showCompleted, searchText, dispatch} = this.props;

		return (
			<div className='container__header'>
				<div>
					<input type='search' ref='searchText' value={searchText} placeholder='search todos' onChange={() => {
						var searchText = this.refs.searchText.value;
						dispatch(actions.setSearchText(searchText));
					}} />
				</div>
				<div>
					<label>
						<input type='checkbox' ref='showCompleted' value={showCompleted} onChange={() => {
							var showCompleted = this.refs.showCompleted.checked;
							dispatch(actions.toggleShowCompleted());
						}} />
						Show Completed Todos.
					</label>
				</div>
			</div>
		)	
	}
};

export default connect((state) => {
	return {
		showCompleted: state.showCompleted,
		searchText: state.searchText
	}
})(TodoSearch);
