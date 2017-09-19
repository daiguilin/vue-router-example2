import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/components/login'
import Home from '@/components/home'
//import project from '@/views/backend/project'
//import workbench from '@/views/backend/workbench'
//import doc from '@/views/backend/doc'
//import layout from '@/views/layout'

let layout=(resolve) => {
	return	require.ensure([],() => {
		resolve(require('@/views/layout'))
	})
}
let project=(resolve) => {
	return	require.ensure([],() => {
		resolve(require('@/views/backend/project'))
	})
}
let workbench=(resolve) => {
	return	require.ensure([],() => {
		resolve(require('@/views/backend/workbench'))
	},"abc")
	//通过第二个参数"abc"，可以把两个组件的代码打包到一个js中
}
/*let doc=(resolve) => {
	return	require.ensure([],() => {
		resolve(require('@/views/backend/doc'))
	},"abc")
}*/
let doc=(resolve) => {
	return	import('@/views/backend/doc')
}//此方法可以对上面的写法进行简写，但不支持第二个参数，对两个组件的代码进行合并
Vue.use(Router)

let router = new Router({
		mode:'history',
		linkActiveClass:"is-active",
		routes: [
			{
			    path: '/',
			    name: 'Home',
			    component: Home
			},
			{
			    path: '/management',
			    name: 'Management',
			    component: layout,
			    children:[
			    	{
					    path: '/project',
					    name: 'Project',
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
		    	redirect: '/'
		    }
		]
	})
//console.log(router)
router.beforeEach((to,from,next) => {
	//next()
	//console.log(to)
	let b1 = to.matched.some(function(item){
		return item.meta.login
	})
	if(b1){
		let info=router.app.$local.fetch("userName");
		if(info.login){
			next()
		}else{
			router.push({
				path:'/login',
				query:{
					redirect:to.path.slice(1)
				}
			})
		}
	}else{
		next()
	}
})
export default router

	

