<template>
	<div class="main">
		<div class="home-header">
			<img src="../assets/miaov.png" height="34" width="141" alt="">
			<div class="portrait" :class={portraitLogin:isLogin}>
		        <router-link  v-if="!isLogin" to="/login" tag="span">登录</router-link>
		        <img  v-if="isLogin" src="../assets/portrait.png" alt="">
		    </div>
		</div>
		<div class="phrase">一起学习Vue-router </div>
		<div class="btns">
			<router-link class="trans" to="/project" tag="div">我的项目</router-link>
			<router-link class="trans" to="/doc" tag="div">我的文档</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				isLogin:false
			}
		},
		created(){
			var info=this.$local.fetch("userName");
			this.isLogin=info.login;
		},
	}
</script>
<style></style>