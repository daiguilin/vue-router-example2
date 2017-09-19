<template>
<div>
    <header-nav></header-nav>
    <div class="breadcrumb">
    	<router-link :to="{name:'Home'}" tag="span">首页</router-link>/<span style="color:#999">{{flag}}</span>
    </div>
    <transition name="fade" mode="out-in">
    	<router-view></router-view>
    </transition>
</div>
</template>

<script>
	import header from '@/components/header'
	let Flags = {
		'project':'我的项目',
		'workbench':'工作台',
		'doc':'文档'
	}
	export default{
		data(){
			return {
				flag:''
			}
		},
		watch:{
			$route(){
				this.flag=Flags[this.$route.path.slice(1)]
			}
		},
		beforeRouteEnter(to,from,next){
			next((vm) => {
				vm.flag=Flags[to.path.slice(1)]
			})
		},
		components:{
			"header-nav":header
			//vue异步组件的写法
			/*(resolve) => {
				setTimeout(() => {
					resolve(require('@/components/header'))
				},2000)
			}*/
		}

	}
</script>
<style></style>