import Vue from "vue"
import Vuex from "vuex"

import user from './user'
import commonData from './common-data'
import wechat from './wechat'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        commonData,
        wechat
    }
})