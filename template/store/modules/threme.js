export default {
	state: {
		//主题颜色
		mainColor:"#1258E6"
	},
	mutations: {
		//修改主体颜色
		updateMainColor(state,color){
			state.mainColor = color
		},
	}
}
