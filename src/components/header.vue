<template>
<div>
	<div class="clearFix el-menu--dark">
		<ul class="el-menu menu-horizontal el-menu--dark el-menu--horizontal header-nav">
			<router-link class="el-menu-item logo" to="/home" tag="li">
				<img src="../assets/miaov.png" height="34" width="141" alt="">
			</router-link>
			<router-link class="el-menu-item" :to="{name:'Project'}" tag="li"><!-- 可以利用name值，使得进入某个页面时，直接默认进入某个子路由 -->
				<i class="fa fa-home"></i>
				<span>我的项目</span>
			</router-link>
			<router-link class="el-menu-item" :to="{name:'Workbench'}" tag="li">
				<i class="fa fa-code"></i>
				<span>工作台</span>
			</router-link>
			<router-link class="el-menu-item" :to="{name:'Doc'}" tag="li">
				<i class="fa fa-book"></i>
				<span>文档</span>
			</router-link>
		</ul>
		<div class="user-info-box" v-show="isLogin">
	      <div class="el-submenu__title">
	        <img src="../assets/portrait.png">
	        <span>{{userName}}</span>
	      </div>
	      <div class="header-menu">
	        <ul class="menu-nav">
	          <li class="el-menu-item" @click="loginOut">登出</li>
	        </ul>
	      </div>
    	</div>
	</div>
</div>
</template>
<script>
	export default{
		
		data(){
			return {
				userName:'',
				isLogin:false
			}
		},
		created(){
			var info=this.$local.fetch("userName");
			this.userName=info.userName;
			this.isLogin=info.login;
		},
		methods:{
			loginOut(){
				this.$local.save("userName",null)
				this.$router.push({
					path:'/'
				})
			}
		}
	}
</script>
<style lang="less">
	
</style>