/*通过mutation间接更新state*/
import { RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-type'
import {reqAddress,reqFoodCategorys,reqShops} from '../api'
export default{
    // 异步获取地址
    async getAddress ({commit,state}){
        //发送ajax请求
        const geohash = state.latitude+","+state.longitube
        const result = await reqAddress(geohash)
        //提交一个mutation
        if(result.code===0){
            const address = result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },
     // 异步食品
     async getFoodCategorys ({commit}){
        //发送ajax请求
        
        const result = await reqFoodCategorys()
        //提交一个mutation
        if(result.code===0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },
      // 异步获取商家
      async getShops ({commit,state}){
        //发送ajax请求
        const {longitube,latitude} = state
        const result = await reqShops(longitube,latitude)
        //提交一个mutation
        if(result.code===0){
            const shops = result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    }
}