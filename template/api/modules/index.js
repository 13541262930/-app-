import request from "@/api/request.js"
export default{
	//获取停车场
	getVehicleList(options){
		return request.get("/wxapp/park/list",options).then(data=>{
			return data.data.rows
		})
	},
	//医院列表
	getHospitalList(options){
		return request.get("/wxapp/dept/list",options).then(data=>{
			return data.data
		})
	},
	//获取医生列表
	getDoctorList(options){
		return request.get("/wxapp/his/getOrderList",options).then(data=>{
			return data.data
		})
	}
}