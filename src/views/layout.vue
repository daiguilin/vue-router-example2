<template>
<div>
    <header-nav></header-nav>
    <router-view></router-view>
</div>
</template>

<script>
	import header from '@/components/header'
	export default{
		components:{
			"header-nav":header
		}
	}
</script>
<style></style>