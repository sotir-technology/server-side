/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


// import firebase from 'firebase/app'
// import 'firebase/auth'
import router from '@/router'
import axios from 'axios'

export default {

    logout({commit}){
            return new Promise((resolve, reject) => {
                commit('AUTH_LOGOUT')
                localStorage.removeItem('token')
                // remove the axios default header
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },
    registerAttempt({ dispatch }, payload) {
        const newPayload = {
            userDetails: payload.userDetails,
            notify: payload.notify,
            stop: payload.stopLoading
        }
        dispatch('register', newPayload);

    },
    register({ commit }, payload) {
     

        axios({
                url: 'http://api.churcha2z.org/user/create/?ssk=801fe414298dc26cbd0f7f52cca001fc928142bd',
                method:'post',
                data:{
                    name: payload.userDetails.name,
                    phone: payload.userDetails.phone,
                    password: payload.userDetails.password,
                    country: payload.userDetails.password,
                    state: payload.userDetails.state,
                    street: payload.userDetails.street,
                    email:   payload.userDetails.email
                }
            },
            {
                header: {
                    'content-length': "86",
                    'content-type': "application/json",

                }
            })
            .then((result) => {
            if(result.data.status) {
                const userDetails = result.data.data;
                console.log(userDetails);
                commit('UPDATE_AUTHENTICATED_USER', userDetails)
               router.push(router.currentRoute.query.to || '/');
            }
            else{
                payload.notify({
                    time: 5500,
                    title: 'Error',
                    text: result.data.msg,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
            }
                payload.stop.close("#button-with-loading > .con-vs-loading");
                },
                (err) => {
                    payload.notify({
                        time: 2500,
                        title: 'Error',
                        text: err.message,
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    });
                    payload.stop.close("#button-with-loading > .con-vs-loading");
                }

        )
    },
    loginAttempt({ dispatch }, payload) {
        const newPayload = {
            userDetails: payload.userDetails,
            notify: payload.notify,
            stop: payload.stopLoading
        }
        if (!payload.checkbox_remember_me) {
             localStorage.setItem('remember_me', false);
                    dispatch('login', newPayload)
        }
        else {
            // localStorage.setItem('remember_me', true);
            dispatch('login', newPayload)
        }
    },

    login({ commit, state }, payload) {
        if (state.isUserLoggedIn) {
            payload.notify({
                title: 'Login Attempt',
                text: 'You are already logged in!',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'warning'
            });
            return false
        }

       axios({
                url: 'http://api.churcha2z.org/user/login/?ssk=801fe414298dc26cbd0f7f52cca001fc928142bd',
                method:'post',
                data:{
                email:   payload.userDetails.email,
                password: payload.userDetails.password
                }
            },
                {
                    header: {
                        'content-length': "86",
                        'content-type': "application/json",

                    }
                })
            .then((result) => {
           const userDetails = result.data.data
           if(result.data.status){
            console.log(userDetails);
            commit('UPDATE_AUTHENTICATED_USER', userDetails)
                         
                    payload.stop.close("#button-with-loading > .con-vs-loading");
                    router.push(router.currentRoute.query.to || '/');
            }
            else{
                payload.notify({
                    time: 5500,
                    title: 'Error',
                    text: result.data.msg,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
            }
        },
                (err) => {
                payload.notify({
                    time: 5500,
                    title: 'Error',
                    text: err.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
                localStorage.removeItem('token')
                payload.stop.close("#button-with-loading > .con-vs-loading");
            })
    },

    fetch_user_data_with_valid_token({commit,dispatch},payload){
       axios({
           url:'http://api.churcha2z.org/user/get/?ssk=801fe414298dc26cbd0f7f52cca001fc928142bd',
           method:'post',
           data:{token: payload }
       },
       {
        header: {
            'content-length': "86",
            'content-type': "application/json",
        }
    })
    .then(res =>{
        if(!res.data){
            dispatch('logout')
        return
    }
    console.log(res.data);
    commit('UPDATE_AUTHENTICATED_USER', res.data.data)
    }) 
    },
    updateUser(payload) {
    return new Promise((resolve, reject)=>{
        axios({
            url: 'http://api.churcha2z.org/user/update-acc/?ssk=801fe414298dc26cbd0f7f52cca001fc928142bd',
            method:'post',
            data:{
                name: payload.userDetails.name,
                phone: payload.userDetails.phone,
                country: payload.userDetails.password,
                state: payload.userDetails.state,
                street: payload.userDetails.street,
                email:   payload.userDetails.email
            }
        },
        {
            header: {
                'content-length': "86",
                'content-type': "application/json",

            }
        })
        .then((result) => {
            resolve(result.data)
        },(result)=>{
            reject(result.data)
        })
    })
},

changePassword(payload){
    return new Promise((resolve, reject)=>{
        axios({
            url: 'http://api.churcha2z.org/user/update-psw/?ssk=801fe414298dc26cbd0f7f52cca001fc928142bd',
            method:'post',
            data:{
                token: payload.token,
                pass1: payload.old_password,
                pass2: payload.new_password,
                
            }
        },
        {
            header: {
                'content-length': "86",
                'content-type': "application/json",

            }
        })
        .then((result) => {
            resolve(result.data)
        },(result)=>{
            reject(result.data)
        })
    })
},
requestNewPassword(payload){
    
    return new Promise((resolve, reject)=>{
        axios({
            url: 'http://api.churcha2z.org/user/request-psw-reset/?ssk=801fe414298dc26cbd0f7f52cca001fc928142bd',
            method:'post',
            data:{
                email: payload.email,                
            }
        },
        {
            header: {
                'content-length': "86",
                'content-type': "application/json",

            }
        })
        .then((result) => {
            resolve(result.data)
        },(result)=>{
            reject(result.data)
        })
    })
},
    updateAuthenticatedUser({ commit }, payload) {
        commit('UPDATE_AUTHENTICATED_USER', payload)
    }
}

