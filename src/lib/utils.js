let local={
	 save:function(key,value){
	 	localStorage.setItem(key,JSON.stringify(value));
	 },
	 fetch:function(key){
	 	return JSON.parse(localStorage.getItem(key)) || {};
	 }
}
//定义组件
export default {
  install: function (vm) {
    vm.prototype.$local = local
  }
}
