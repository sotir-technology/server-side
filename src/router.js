/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Structure:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import {AuthCheck} from "./auth/authService";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '/',
            component: () => import('./layouts/main/Main.vue'),
            redirect: '/dashboard',
            children: [
                {name: 'dashboard', path: '/dashboard', component: null}
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/error-404'
        },
        //LOGIN LAYOUTS
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '/',
            component: () => import('./layouts/full-page/FullPage.vue'),
            children: [
                {name: 'login', path: '/login', component: () => import('./views/pages/Login.vue')}
            ],
        },
    ],
});

//router to check after
router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg');
    if (appLoading) {
        appLoading.style.display = "none";
    }
});

//router to check before
router.beforeEach((to, from, next) => {
    // get logged user current user
    if (
        to.path === "/login" ||
        to.path === "/statistic" ||
        AuthCheck!=null
    ) {
        return next();
    }
    router.push({path: '/login', query: {to: to.path}});
    //router.push({path: '/login', query: {to: to.path}})
    // Specify the current path as the customState parameter, meaning it
    // will be returned to the application after auth
    // auth.login({ target: to.path });
    next();
});

export default router
