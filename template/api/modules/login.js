import request from "@/api/request.js"
export default{
	// 获取token
	getToken(options){
		return request.get("/wxapp/user/login",options).then(data=>{
			return data.data
		})
	}
}