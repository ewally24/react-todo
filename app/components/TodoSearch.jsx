var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var TodoSearch = React.createClass({
	render: function() {
		var {searchText, showCompleted, dispatch} = this.props;

		return (
			<div className='container__header'>
				<div>
					<input type='search' ref='searchText' value={searchText} onChange={() => {
						var searchText = this.refs.searchText.value;
						dispatch(actions.setSearchText(searchText))
					}} placeholder='search todos'/>
				</div>
				<div>
					<label>
						<input type='checkbox' ref='showCompleted' checked={showCompleted} onChange={() => {
							var showCompleted = this.refs.showCompleted.checked;
							dispatch(actions.toggleShowCompleted());
						}}/>
						Show Completed Todos.
					</label>
				</div>
			</div>
		)
	}
});

export default connect((state) => {
	return {
		showCompleted: state.showCompleted,
		searchText: state.searchText
	}
})(TodoSearch);
//module.exports = TodoSearch;