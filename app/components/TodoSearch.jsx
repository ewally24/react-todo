import React from 'react';
import * as redux from 'react-redux';
import * as actions from 'actions';

export class TodoSearch extends React.Component {
	render() {
		var {dispatch, showCompleted, searchText} = this.props;

		return (
			<div>
				<div>
					<input type='search' ref='searchText' placeholder='search todos' value={searchText} onChange={() => {
						var searchText = this.refs.searchText.value;
						dispatch(actions.setSearchText(searchText));
					}}/>
				</div>
				<input type='checkbox' ref='showCompleted' value={showCompleted} onChange={() => {
					var showCompleted = this.refs.showCompleted.checked;
					dispatch(actions.toggleShowCompleted(showCompleted));
				}}/>
				Show Completed Todos.
			</div>
		)
	}
}

export default redux.connect((state) => {
	return {
		showCompleted: state.showCompleted,
		searchText: state.searchText
	}
})(TodoSearch);

