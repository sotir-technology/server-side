import Axios from "axios"

/*=========================================================================================
  File Name: moduleEcommerceActions.js
  Description: Ecommerce Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
    toggleServiceInWishList({ commit }, item) {
        commit('TOGGLE_ITEM_IN_WISH_LIST', item)
    },
    toggleServiceInCart({ commit }, item) {
        commit('TOGGLE_ITEM_IN_CART', item)
    },
    addServiceInCart({ commit }, item) {
        item["quantity"] = 1
        item["discount_in_percentage"] = Math.floor(Math.random() * 20) + 4
        item["offers_count"] = Math.floor(Math.random() * 4) + 1
        item["delivery_date"] = new Date(new Date().getTime() + (Math.random()*10*24*60*60*1000)).toDateString().slice(0, -4)
        commit('ADD_ITEM_IN_CART', item)
    },
    updateServiceQuantity({ commit }, payload){
      commit('UPDATE_ITEM_QUANTITY', payload)
    },

    fetchAllServices({commit}){
      Axios({
        url:'http://api.churcha2z.org/services/get/?ssk=801fe414298dc26cbd0f7f52cca001fc928142bd',
        method:'post',

      },
      {
        header: {
            'content-length': "86",
            'content-type': "application/json; charset=utf-8",
            'X-Powered-By':	'Express, Phusion Passenger',
            'access-control-allow-credentials':	'true',
              'access-control-allow-origin'	:'*',
        }
      })
        .then(res =>{
          commit('SET_SERVICES_STATE',res.data.data)
          console.log("services")
          console.log(res.data.data)
          
        })
        .catch(err=>{
          console.log(err)
        })
    }
}