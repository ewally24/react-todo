var moment = require('moment');
import firebase, {firebaseRef, githubProvider} from 'app/firebase/index'

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

export var updateTodo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id: id,
		updates: updates
	}
}

export var clearTodos = () => {
	return {
		type: 'CLEAR_TODOS'
	}
}

//asynchronous call using updateTodo as callback
export var startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		var uid = getState().auth.uid;
		var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);

		var updates = {
			completed: completed,
			completedAt: completed ? moment().unix() : null
		}

		return todoRef.update(updates).then(() => {
			dispatch(updateTodo(id, updates))
			console.log('Update Successful');
		}, () => {
			console.log('Update Failed');
		})
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

		var uid = getState().auth.uid;
		var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

		return todoRef.then(() => {
			dispatch(addTodo({
				id: todoRef.key,
				...todo
			}))
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
	return(dispatch, getState) => {
		var uid = getState().auth.uid;
		var todosRef = firebaseRef.child(`users/${uid}/todos`);

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

export var startLogin = () => {
	return(dispatch, getState) => {
		firebase.auth().signInWithPopup(githubProvider).then((result) => {
			console.log('Login successful!');
		}, () => {
			console.log('login failed');
		})
	}
}

export var login = (uid) => {
	return {
		type: 'LOGIN',
		uid: uid
	}
}

export var startLogout = () => {
	return(dispatch, getState) => {
		firebase.auth().signOut().then(() => {
			console.log('Logout successful!');
		})
	}
}

export var logout = () => {
	return {
		type: 'LOGOUT'
	}
}


