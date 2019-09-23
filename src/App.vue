<!-- =========================================================================================
	File Name: App.vue
	Description: Main vue file - APP
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<div id="app">

		<router-view></router-view>

	</div>
</template>

<script>
import themeConfig from '../themeConfig.js'
// import undefined from 'firebase/empty-import';
import axios from 'axios';
export default {
    watch: {
        '$store.state.theme'(val) {
            this.toggleClassInBody(val);
        }
    },
    async created() {
        //Check if token is available from local storage
        let token = localStorage.getItem('token');
        if(token){
           //fetch user data from api if token is available
                this.$store.dispatch('auth/fetch_user_data_with_valid_token',token)
        }
    },
    methods: {
        toggleClassInBody(className) {
            if (className == 'dark') {
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
                document.body.classList.add('theme-dark');
            } else if (className == 'semi-dark') {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                document.body.classList.add('theme-semi-dark');
            } else {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
            }
        }
    },
    mounted() {
        this.toggleClassInBody(themeConfig.theme)
    },
 
}
</script>
