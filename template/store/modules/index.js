import $R from "@/api/index.js"
export default {
	state: {
		registration:"",
		vehicle:"",
		doctor:"",
		parking:"",
		statusTop:"",//浮框距离顶部距离
		statusLeft:"",//浮框距离左边距离
	},
	getters:{
		isIndexShow(state){
			if(state.registration&&state.vehicle&&state.doctor){
				return true
			}else{
				return false
			}
		}
	},
	mutations: {
		// 存停车场
		saveParkingItem(state,item){
			state.parking = item
		},
		//选择挂号人
		selectRegistration(state,item){
			state.registration = item
			console.log(item)
			uni.setStorageSync('selectRegistrationItem',JSON.stringify(item))
		},
		//选择医生
		selectDoctor(state,item){
			state.doctor = item
			uni.setStorageSync('selectDoctorItem',JSON.stringify(item))
		},
		// 切换医院初始化医生
		initSelectDoctor(state){
			state.doctor = ""
		},
		//选择车牌号
		selectVehicle(state,item){
			state.vehicle = item
			uni.setStorageSync('selectVehicleItem',JSON.stringify(item))
		},
		// 成功挂号初始化车牌号
		initSelectVehicle(state){
			state.vehicle = ""
			// 发送车牌号信息
		},
		//初始化首页信息
		initIndex(state){
			// #ifdef MP-WEIXIN
				state.statusTop = wx.getMenuButtonBoundingClientRect().top
				state.statusLeft =wx.getSystemInfoSync().windowWidth- wx.getMenuButtonBoundingClientRect().right
			// #endif
			let registration = uni.getStorageSync('selectRegistrationItem')
			let vehicle = uni.getStorageSync('selectVehicleItem')
			let doctor  = uni.getStorageSync('selectDoctorItem')
			if(registration&&vehicle&&doctor){
				state.registration =JSON.parse(registration)
				state.vehicle =JSON.parse(vehicle) 
				state.doctor =JSON.parse(doctor) 
			}
		}
	}
}
