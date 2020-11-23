import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Todos from '@/views/Todos'

Vue.use(Router)

export default new Router ({
	mode: 'history',
	routes: [
		{
			path: '/todos',
			component: Todos
		},
		{
			path: '/',
			component: Login
		}
	]
})