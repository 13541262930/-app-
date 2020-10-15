import utils from "@/utils/login.js"
import $R from "@/api/index.js"
export default {
	state: {
		// 小程序id
		appid:"wx2c3cb2b5e69f17ae",
		tmplId:"pXeJTgL0M9bczSy4nM-Q_QKQKlDEHSHRJdm39jBnTJY",
		// 登录状态
		loginStatus: false,
		// token
		token: null,
		info:"",
	},
	mutations: {
		//存登录token
		updateToken(state,token){
			state.token = token
			this.commit('getInfo')
			uni.setStorageSync('token',token)
		},
		//初始化用户信息
		async initUser(state){
			let token = uni.getStorageSync('token')
			if(token){
				state.token = token
				await this.commit('getInfo')
			}else{
				utils.login()
			}
		},
		//获取个人信息
		async getInfo(state){
			state.info = await $R.user.getInfo()
			if(state.info.nickName){
				state.loginStatus = true
			}else{
				state.loginStatus = 'login'
			}
		}
	}
}

