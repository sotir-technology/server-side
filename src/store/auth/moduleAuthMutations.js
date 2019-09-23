/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import axios from 'axios'

export default {
	UPDATE_AUTHENTICATED_USER(state, userDetails) {
		//store the user details on state authUser
		    state.userDetails = userDetails;
        state.isUserLoggedIn = true;
        const token = userDetails.a_token;
        axios.defaults.headers.common['Authorization'] = token
        localStorage.setItem('token', token );
    
		localStorage.setItem('userRole', userDetails.a_role);
  },
  
  AUTH_LOGOUT(state){
    state.isUserLoggedIn == false;
    state.userDetails == null;   
  }

}