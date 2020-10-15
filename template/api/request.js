import $store from "@/store/index.js"
import $R from "@/api/index.js"
import utils from "@/utils/login.js"
export default {
	// 全局配置
	common: {
		// domain:"https://app-api.shopmy.com.au/", //域名
		baseUrl:"https://angel.kefutu.com/prod-api", //请求地址
		// baseUrl:"http://192.168.33.25:8080", //请求地址
		header: {
			"Content-Type": "application/json"
		},
		method: "GET",
		datatype: "json",
		options:"",
	},
	// 请求 返回promise
	request(options = {}, isOptions) {
		this.common.options = options
		if(!isOptions){
			// 请求之前token 验证
			if ($store.state.user.token) {
				this.common.header['token'] =$store.state.user.token
			}
			options.url = this.common.baseUrl + options.url
			options.header = this.common.header
			options.method = options.method
		}
		return new Promise((res, rej) => {
			uni.request({
				...options,
				success: result => {
					if(result.data.code ==401){
						utils.login()
					}else if (result.data.code === 200) {
						res(result.data)
					}else if (result.data.code === 20000){
						rej(result.data)
					}else if (result.data.code === 0) {
						if (result.data.msg) {
							uni.showToast({
								icon: "none",
								title: result.data.msg
							})
						}
						rej(result.data)
					} else {
						rej(result)
						console.log(result)
						uni.showToast({
							icon: "none",
							title: "服务器繁忙！"
						})
					}
				},
				fail: (error) => {
					console.log(error,"失败")
					return rej(error)
				}
			})
		})
	},
	// get请求
	get(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = "GET"
		return this.request(options)
	},

	// post请求
	post(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = "POST"
		return this.request(options)
	},
	// delete请求
	delete(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = "DELETE"
		return this.request(options)
	},


	// put请求
	put(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = "PUT"
		return this.request(options)
	}
}
