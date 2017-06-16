var redux = require('redux');
var thunk = require('redux-thunk').default;
var {showCompletedReducer, searchTextReducer, todosReducer} = require('reducers');

export var configure = (initialState = {}) => {
	var reducers = redux.combineReducers({
		showCompleted: showCompletedReducer,
		searchText: searchTextReducer,
		todos: todosReducer
	})

	var store = redux.createStore(reducers, initialState, redux.compose(
			redux.applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		))

	return store;
}