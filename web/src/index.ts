import {set_server, set_ws_server } from 'castle-request/dist'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CastleUi from 'castle-ui'
import configer from './common/config'
import store from './common/store'
import './common/assets/css/Public'
import './common/assets/js/lunbo'
set_server(configer.HttpServer)
// set_ws_server(configer.WSServer)

Vue.use(CastleUi,  {})

new Vue( {
    el:'#app', 
    router, 
    store, 
    render:(h:any) => h(App)
})