/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import axios from 'axios';

const actions = {

    // ////////////////////////////////////////////
    // SIDEBAR & UI UX
    // ////////////////////////////////////////////

    updateSidebarWidth({ commit }, width) {
        commit('UPDATE_SIDEBAR_WIDTH', width);
    },
    updateI18nLocale({ commit }, locale) {
        commit('UPDATE_I18N_LOCALE', locale);
    },
    toggleContentOverlay({ commit }) {
        commit('TOGGLE_CONTENT_OVERLAY');
    },
    updateTheme({ commit }, val) {
        commit('UPDATE_THEME', val);
    },
    updateUserRole({ commit }, val) {
        commit('UPDATE_USER_ROLE', val);
    },


    // ////////////////////////////////////////////
    // COMPONENT
    // //////////////////////////////////////////// 
    
    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
        commit('UPDATE_STARRED_PAGE', payload)
    },

    //  The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
        commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
        commit('ARRANGE_STARRED_PAGES_MORE', list)
    },


    // ////////////////////////////////////////////
    // USERS REGISTRATION
    // ////////////////////////////////////////////

    RegisterChurch({commit}, church_data){

        commit('reg_request')
      return axios(
            {
                url: 'http://api.churcha2z.org/church/create/?ssk=801fe414298dc26cbd0f7f52cca001fc928142bd',
                method:'post',
                data:church_data,
            },
            {
                headers: {
                    'content-length' : "87",
                    'content-type': "application/json; charset=utf-8"}
            } )
            .then((response) => {
                console.log(response.data)
                //ASSIGN THE MESSAGE AND STATUS FROM RESPONSE TO STATE in VUEX
                commit('INPUT_MSG',response.data.msg);
                commit('INPUT_REG_STATUS',response.data.status);
                commit('reg_success')
            }            )
            .catch(error=>{
                console.log(error + ' the error')
                commit('INPUT_MSG',error);
            });
    }
}

export default actions