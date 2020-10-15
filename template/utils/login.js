import $store from "@/store/index.js"
import $R from "@/api/index.js"
export default {
	login(){
		wx.login({
			success:async res=>{
				if (res.code){ 
					//发起网络请求
					let token = await $R.login.getToken({appid:$store.state.user.appid,code:res.code})
					$store.commit('updateToken',token.token)
				} else {
					console.log('登录失败！' + res.errMsg)
				}
			}
		})
	},
	back(){
		let pages = getCurrentPages(); //当前页面栈
		if (pages.length > 1) {  
		    var beforePage = pages[pages.length-2]; //获取上一个页面实例对象  
		    //触发父页面中的方法change()  
			beforePage.$vm.initGetList()
		 }
	}
}