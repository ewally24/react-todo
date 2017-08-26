import firebase, {firebaseRef, githubProvider} from 'app/firebase/index';
import moment from 'moment';

export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText: searchText
	}
}

export var toggleShowCompleted =() => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	}
}

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

export var startAddTodo = (text) => {
	return(dispatch, getState) => {
		var todo = {
			text: text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		}

		var uid = getState().auth.uid;

		// remember each user has it's own set of todos that's where the ${uid} security check comes in
		var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

		return todoRef.then(() => {
			dispatch(addTodo({
				id: todoRef.key,
				...todo
			}))

			console.log('Todo added to the database');
		}, () => {
			console.log('adding todo failed');
		})
	}
}



/* Changed To updateTodo
export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id: id
	}
}

*/

export var updateTodo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id: id,
		updates: updates
	} 
}

export var startToggleTodo = (id, completed) => {
	return(dispatch, getState) => {
		var uid = getState().auth.uid;

		// Here we will be modifying a user's todos but we find it the individual todo in the todos array by id
		var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);

		var updates = {
			completed: completed,
			completedAt: completed ? moment().unix() : null
		}

		return todoRef.update(updates).then(() => {
			dispatch(updateTodo(id, updates));
			console.log('update successful');
		}, () => {
			console.log('update failed');
		})

	}
}

export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos: todos
	}
}

export var startAddTodos = () => {
	return(dispatch, getState) => {

		var uid = getState().auth.uid;

		// getting all of the users todos on successful login
		var todosRef = firebaseRef.child(`users/${uid}/todos`);

		return todosRef.once('value').then((snapshot) => {
			var todos = snapshot.val();
			var parsedTodos = [];

			Object.keys(todos).forEach((todoID) => {
				parsedTodos.push({
					id: todoID,
					...todos[todoID]
				})
			})
			dispatch(addTodos(parsedTodos));
		}, () => {
			console.log('Fetching todos from firebase failed');
		})
	}
}

export var login = (uid) => {
	return {
		type: 'LOGIN',
		uid: uid
	}
}

// Authentication Section
export var startLogin = () => {
	return(dispatch, getState) => {
		firebase.auth().signInWithPopup(githubProvider).then((result) => {
			console.log('Authentication Successful', result);
		}, () => {
			console.log('Authentication Failed');
		})
	}
}

export var startLogout = () => {
	return(dispatch, getState) => {
		firebase.auth().signOut().then(() => {
			console.log('Logout successful');
		}, () => {
			console.log('logout failed');
		})
	}
}

export var clearTodos = () => {
	return {
		type: 'CLEAR_TODOS'
	}
}