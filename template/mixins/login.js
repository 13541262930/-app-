import store from "@/store/index.js"
import $R from "@/api/index.js"
import {
	mapState,mapMutations,mapGetters
} from "vuex"
export default {
	computed:{
		...mapState({
			appid:state=>state.user.appid,
			tmplId:state=>state.user.tmplId,
			loginStatus:state=>state.user.loginStatus,
			listItem:state=>state.hospital.listItem,
			childItem:state=>state.hospital.childItem,
			info:state=>state.user.info,
			registration:state=>state.index.registration,
			vehicle:state=>state.index.vehicle,
			doctor:state=>state.index.doctor,
			parking:state=>state.index.parking,
			statusTop:state=>state.index.statusTop,
			statusLeft:state=>state.index.statusLeft,
		}),
		...mapGetters(['isIndexShow'])
	}
}
