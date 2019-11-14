import Vue from 'vue'
import Router from 'vue-router'
const DashboardLayout = () => import('../components/dashboardLayout.vue')/* webpackChunkName: "dashboard" */ 
function loadView(view) {
return () => import(`../components/dashboardContents/${view}.vue`)/* webpackChunkName: "view-[request]" */ 
}
const routes = [
	{
		path: '/',
		component: DashboardLayout,
		children: [
			{
				name: 'UserController',
				path: '',
				component: loadView('userController')
			},
			{
				name: 'KendaraanController',
				path: '/kendaraanServices',
				component: loadView('kendaraanController')
			}
		]
	},
]
Vue.use(Router)
const router = new Router({mode: 'history', routes: routes})
export default router
