import Vue from 'vue';
import Router, { Route } from 'vue-router';
import { RouterPath } from '../common/config';
const store:any = require('../common/store').default;

declare let require: any

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: RouterPath.Home,
            name:'首页',
            component:(n:any) => require(["../components/Home.vue"],n),
        },
        {
            path: RouterPath.Login,
            name:'登录',
            component:(n:any) => require(["../components/Login.vue"],n)
        }
        //  {
        //     path: RouterPath.Login,
        //     name: '登录',
        //     component: (r:any) =>require(["../components/Login/Login.vue"], r),
        // }, 
    




    ]
})

router.beforeEach((to: Route, from: Route, next: Function) => {
    // if (store.state.User.Login.UID > 0) {
    //     next()
    // } else if (to.path != RouterPath.Login) {
    //     store.dispatch("A_USER_RELOGIN", {
    //         Success: () => {
    //             next()
    //         },
    //         Error: () => {
    //             next(RouterPath.Login)
    //         }
    //     })
    // } else {
    //     next()
    // }
    next();
})

export default router;