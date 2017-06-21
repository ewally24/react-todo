var redux = require('redux');
var thunk = require('redux-thunk').default;
var {authReducer, showCompletedReducer, searchTextReducer, todosReducer} = require('reducers');

export var configure = (initialState = {}) => {
	var reducers = redux.combineReducers({
		auth: authReducer,
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