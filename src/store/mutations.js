/*直接更新state多个方法的对像*/
import { RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-type'
export default{
   [RECEIVE_ADDRESS](state,{address}){
       state.address = address
   },
   [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    }
}