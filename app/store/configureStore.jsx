var redux = require('redux');
var thunk = require('redux-thunk').default;
import {authReducer, searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export var configure = (initialState = {}) => {
	var reducers = redux.combineReducers({
		auth: authReducer,
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer,
	})

	var store = redux.createStore(reducers, initialState, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	))

	return store;
}