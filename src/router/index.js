import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import ProFile from '../pages/ProFile/ProFile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/login/login.vue'
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:"/msite",
            component:MSite,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/order",
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/profile",
            component:ProFile,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/search",
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/",
            redirect:'/msite'
        }
    ]
})