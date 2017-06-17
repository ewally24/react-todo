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
	return(dispatch, getState) => {
		var todo = {
			text: text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		}

		var todoRef = firebaseRef.child('todos').push(todo);

		return todoRef.then(() => {
			dispatch(addTodo({
				id: todoRef.key,
				...todo
			}))
			console.log('Add Todo Successful');
		}, () => {
			console.log('Add Todo Failed');
		})
	}
}

export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos: todos
	}
}

//asynchronous call using addTodos has callback to fetch todos from firebase and populate redux store.
export var startAddTodos = () => {
	return (dispatch, getState) => {
		var todosRef = firebaseRef.child('todos');

		return todosRef.once('value').then((snapshot) => {
			var todos = snapshot.val();
			var parsedTodos = [];

			Object.keys(todos).forEach((todoId) => {
				parsedTodos.push({
					id: todoId,
					...todos[todoId]
				})
			})
			dispatch(addTodos(parsedTodos));
		})
	}
}

export var updateTodo = (id, updates) =>  {
	return {
		type: 'UPDATE_TODO',
		id: id,
		updates: updates
	}
}

//asynchronous call using updateTodo has callback to update completed property of todo
export var startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		var todoRef = firebaseRef.child(`todos/${id}`);

		var updates = {
			completed: completed,
			completedAt: completed ? moment().unix() : null
		}

		return todoRef.update(updates).then(() => {
			dispatch(updateTodo(id, updates));
			console.log('Update Successful');
		}, () => {
			console.log('Update Failed');
		})
	}
}

