var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
	it('searchTextReducers', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'clean room'
		}

		var res = reducers.searchTextReducer(df(''), df(action));
		expect(res).toEqual(action.searchText);
	})

	it('showCompletedReducers', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED',
			showCompleted: false
		}

		var res = reducers.showCompletedReducer(df(false), df(action));
		expect(res).toEqual(true)
	})
})