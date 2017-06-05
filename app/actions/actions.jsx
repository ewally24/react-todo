var moment = require('moment');
import firebase, {firebaseRef} from 'app/firebase/index'

export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText: searchText
	}
}

export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED',
	}
}

// changed to add data to the database
/*
export var addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text: text 
	}
}
*/

export var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo: todo
	}
}

//asynchronous call using AddTodo has callback
export var startAddTodo = (text) => {
	return (dispatch, getStore) => {
		var todo = {
			text: text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		}
		var todoRef = firebaseRef.child('todos').push(todo);

		return todoRef.then(() => {
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}))
			console.log('Create Todo Successful');
		}, () => {
			console.log('Create Todo Failed');
		}) 
	}
}
export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos: todos
	}
}

export var toggleTodo = (id) =>  {
	return {
		type: 'TOGGLE_TODO',
		id: id 
	}
}