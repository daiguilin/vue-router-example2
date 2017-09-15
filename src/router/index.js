import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/components/login'
import Home from '@/components/home'
import project from '@/views/backend/project'
import workbench from '@/views/backend/workbench'
import doc from '@/views/backend/doc'
import layout from '@/views/layout'
import Doc from '@/views/backend/doc'

Vue.use(Router)

export default new Router({
	mode:'history',
	linkActiveClass:"is-active",
	routes: [
		{
		    path: '/home',
		    name: 'Home',
		    component: Home
		},
		{
		    path: '/management',
		    component: layout,
		    children:[
		    	{
				    path: '',
				    name: 'Management',
				    component: project,
				    meta:{
				    	login:true
				    }
				},
				{
				    path: '/workbench',
				    name: 'Workbench',
				    component: workbench,
				    meta:{
				    	login:true
				    }
				},
				{
				    path: '/doc',
				    name: 'Doc',
				    component: doc,
				    meta:{
				    	login:false
				    }
				}
		    ]
	    },
		{
		    path: '/login',
		    name: 'Login',
		    component: Login
	    },
	    {
	    	path:'*',
	    	component: Home
	    }
	]
})

router.berforeEach(to,from,next){
	let bl = to.matched.some(function(){

	})
}
