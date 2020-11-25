export default {
	actions: {
		async fetchTodos(ctx) {
			const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
			const todos = await res.json()
			let result = []
			for (let todo in todos) {
				const newTodo = {
					id: todos[todo].id,
					text: todos[todo].title,
					date: '5 november 2020'
				}
				result.push(newTodo)
			}
			ctx.commit('updateTodos', result)
		},
	},
	mutations: {
		updateTodos(state, todos) {
			state.todos = todos
		},
		removeTodo(state, todoId) {
			let filtered = state.todos.filter(function (todo) {
				return todo.id !== todoId;
			});
			state.todos = filtered
			state.complitedTasks += 1
		}
	},
	state: {
		todos: [],
		complitedTasks: 0
	},
	getters: {
		getTodos(state) {
			return state.todos
		},
		getComplitedTasks(state) {
			return state.complitedTasks
		}
	},
}