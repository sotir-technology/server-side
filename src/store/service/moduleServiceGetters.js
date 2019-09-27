/*=========================================================================================
  File Name: moduleEcommerceGetters.js
  Description: Ecommerce Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    isInCart: state => serviceId => {
        return state.serviceCartItems.some((service) => service.s_id == serviceId )
    },
    isInWishList: state => itemId => {
        return state.wishList.some((item) => item.objectID == itemId )
    },
    totalCartPrize: state => {
        let total = 0;
        state.serviceCartItems.forEach(element => {
            total += parseInt(element.s_cost);
            console.log(total)
            return total;
        });
       
    }
}