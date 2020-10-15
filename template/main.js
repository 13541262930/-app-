import Vue from 'vue'
import App from './App'

//状态管理
import graceChecker from "@/common/graceChecker.js"
import store from "@/store/index.js"
import api from "api/index.js"
Vue.prototype.$R = api
Vue.prototype.$graceChecker = graceChecker
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store,
})
app.$mount()
