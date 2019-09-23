<!-- =========================================================================================
    File Name: Profile.vue
    Description: Profile Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="profile-page">

        <!-- PROFILE HEADER -->
        <div class="profile-header">
            <div class="relative">
                <div  class="shadow cover-container  rounded-t-lg bg-primary">
                    
                    <img src="@/assets/images/logo/white/header_sm.png" alt="user-profile-cover" class="responsive block">
                </div>
                <div class="profile-img-container pointer-events-none">
                    <div>
                        <vs-avatar class="user-profile-img" :src="require(`@/assets/images/portrait/small/avatar-s-24.png`)" size="85px" />
                    </div>
                    <!--YOU CAN ADD EXTRA FLOATING BUTTONS
                     <div class="profile-actions pointer-events-auto flex">
                        <vs-button to="/profile-settings" icon-pack="feather" radius icon="icon-edit-2"></vs-button>
                        <vs-button icon-pack="feather" radius icon="icon-settings" class="ml-2 lg:ml-4"></vs-button>
                    </div> -->
                </div>
            </div>
            <div class="flex items-center justify-end flex-wrap profile-header-nav p-6">

                <div class="block sm:hidden">
                    <feather-icon @click="isNavOpen = !isNavOpen" icon="AlignJustifyIcon" v-show="!isNavOpen" class="vx-navbar-toggler" />
                    <feather-icon icon="XIcon" v-show="isNavOpen" @click="isNavOpen = !isNavOpen" class="vx-navbar-toggler" />
                </div>
            </div>
            <!-- <vx-navbar> -->
            <!-- </vx-navbar> -->
        </div>

        <!-- COL AREA -->
        <div class="vx-row">
            <!-- COL 1 -->
            <div class="vx-col w-full lg:w-1/4">
                <!-- ABOUT CARD -->
                <vx-card title="Profile" class="mt-base">
                    <!-- ACTION SLOT -->
                    <template slot="actions">
                        <vs-button to="/profile-settings" icon-pack="feather" radius icon="icon-edit-2"></vs-button>
                    
                    </template>

                    <div class="mt-5">
                        <h6>Name:</h6>
                        <p>{{userDetails.a_name}}</p>
                    </div>
                    <!-- USER BIO -->
                    <div class="user-bio">
                        <p></p>
                    </div>

                    <!-- OTEHR DATA -->
                    <div class="mt-5">
                        <h6>Joined:</h6>
                        <p>{{userDetails.createdAt}}</p>
                    </div>

                    <div class="mt-5">
                        <h6>Lives:</h6>
                        <p>{{userDetails.a_street}}</p>
                    </div>

                    <div class="mt-5">
                        <h6>Email:</h6>
                        <p>{{ userDetails.a_email }}</p>
                    </div>

                    <div class="mt-5">
                        <h6>Phone:</h6>
                        <p>{{userDetails.a_phone}}</p>
                    </div>

                    <div class="social-links flex mt-4">
                        <feather-icon svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded" class="mr-2" icon="FacebookIcon"></feather-icon>
                        <feather-icon svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded" class="mr-2" icon="TwitterIcon"></feather-icon>
                        <feather-icon svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded" class="mr-2" icon="InstagramIcon"></feather-icon>
                    </div>
                </vx-card>

                <!-- MY SERVICES CARD -->
                <vx-card title="My Services" class="mt-base">
                    <!-- ACTION SLOT -->
                    <template slot="actions">
                        <vs-button to="#" icon-pack="feather" radius icon="icon-item"></vs-button>
                    
                    </template>

                    <div class="mt-5" >
                        <h6></h6>
                        <p>You currently have no active service</p>
                    </div>
                    <!-- USER BIO -->
                  
                
                </vx-card>
            </div>

            <!-- COL 2 -->
            <div class="vx-col w-full lg:w-3/4">
                <div v-if="allServices.length" class="vx-row"><!-- CONTENT CARD - PROGRESS BAR/GOAL -->
                    <div  v-for="service in allServices" v-bind:key="service.s_id" class="vx-col sm:w-1/2 md:w-1/2">
                        <vx-card class="mt-base">
                         <img :src="require(`@/assets/images/pages/content-img-3.jpg`)" alt="content-img" class="responsive rounded-lg">
                            <div class="my-6">
                                <h5 class="mb-2">{{ service.s_title }}</h5>
                                <p>{{ service.s_desc }}</p>
                            </div>
                            <div class="mb-4">
                                <div class="flex justify-between">
                                    <small class="font-semibold">{{ service.s_cost }}</small>
                                    <small class="text-grey"></small>
                                </div>
                                <vs-progress percent="50" class="block mt-1 shadow-md"></vs-progress>
                            </div>
                            <div class="flex justify-between flex-wrap">
                                <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC" @click="cartButtonClicked(service)">Add to Cart</vs-button>
                                <vs-button class="mt-4" type="border" color="#b9b9b9" @click="$router.push('/checkout')">Buy</vs-button>
                            </div>
                    </vx-card>
                    <div></div>
                    </div>
                     <!-- <div v-for="CardDatum in cardData" v-bind:key="CardDatum.id" class="vx-col sm:w-1/2 md:w-1/2">
                        <vx-card class="mt-base">
                            <img :src="require(`@/assets/images/pages/${CardDatum.contentImg3}`)" alt="content-img" class="responsive rounded-lg">
                            <div class="my-6">
                                <h5 class="mb-2">{{ CardDatum.title }}</h5>
                            </div>
                            <div class="mb-4">
                                <div class="flex justify-between">
                                    <small class="font-semibold">{{ CardDatum.current_progress }}</small>
                                    <small class="text-grey">{{ CardDatum.progress_goal }}</small>
                                </div>
                                <vs-progress :percent="CardDatum.progress_done_per" class="block mt-1 shadow-md"></vs-progress>
                            </div>
                            <div class="flex justify-between flex-wrap">
                                <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ CardDatum.btn_left_text }}</vs-button>
                                <vs-button class="mt-4" type="border" color="#b9b9b9">{{ CardDatum.btn_right_text }}</vs-button>
                            </div>
                        </vx-card>
                    </div> -->
                </div>
                <div v-else class="vx-row" id="loadin" @load="loadContent" >
                
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
    data() {
        return {
            cardData: [
                {
                    contentImg3: 'content-img-3.jpg',
                    title: 'Vuesax Admin',
                    progress_done_per: 75,
                    current_progress: '$ 5975',
                    progress_goal: '$ 8000',
                    btn_left_text: 'Add More',
                    btn_right_text: 'Remove'

                },
                {
                    contentImg3: 'content-img-3.jpg',
                    title: 'Vuesax Admin',
                    progress_done_per: 75,
                    current_progress: '$ 5975',
                    progress_goal: '$ 8000',
                    btn_left_text: 'Add More',
                    btn_right_text: 'Remove'

                },
                {
                    contentImg3: 'content-img-3.jpg',
                    title: 'Vuesax Admin',
                    progress_done_per: 75,
                    current_progress: '$ 5975',
                    progress_goal: '$ 8000',
                    btn_left_text: 'Add More',
                    btn_right_text: 'Remove'

                },
                {
                    contentImg3: 'content-img-3.jpg',
                    title: 'Vuesax Admin',
                    progress_done_per: 75,
                    current_progress: '$ 5975',
                    progress_goal: '$ 8000',
                    btn_left_text: 'Add More',
                    btn_right_text: 'Remove'

                },
                {
                    contentImg3: 'content-img-3.jpg',
                    title: 'Vuesax Admin',
                    progress_done_per: 75,
                    current_progress: '$ 5975',
                    progress_goal: '$ 8000',
                    btn_left_text: 'Add More',
                    btn_right_text: 'Remove'

                },
            ],
            isNavOpen: false,
            userPoll: '',
            userInfo: {
                profileImg: 'user-13.jpg',
            },
            wasSidebarOpen: null,
        }
    },
    computed: {
        ...mapState({
            userDetails: state => state.auth.userDetails,
            allServices: state => state.service.allServices
        }),

          isInCart() {
            return (serviceId) => this.$store.getters['service/isInCart'](serviceId)
        },
        mediaType() {
            return (media) => {
                if (media.img) {
                    const ext = media.img.split('.').pop();
                    if (this.mediaExtensions.img.includes(ext)) return 'image'
                } else if (media.sources && media.poster) {
                    // other validations
                    return 'video'
                }
            }
        },
        playerOptions() {
            return (media) => {
                return {
                    height: '360',
                    fluid: true,
                    autoplay: false,
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: media.sources,
                    poster: media.poster,
                }
            }
        }
    },
    methods: {
        loadContent(cont) {
            
            this.$vs.loading({
                background: this.backgroundLoading,
                color: this.colorLoading,
                container: cont,
                scale: 0.45,
                type:'radius'
            })
            setTimeout(() => {
                this.$vs.loading.close("#button-load-more-posts > .con-vs-loading")
            }, 3000);
        },
          addServiceInCart(item) {
            this.$store.dispatch('service/addServiceInCart', item)
        },
        cartButtonClicked(service) {
            if(this.isInCart(service.s_id)) this.$router.push('/checkout')
            else this.addServiceInCart(service)
        }
    },
    components: {
        videoPlayer,
    },
    mounted() {
        this.wasSidebarOpen = this.$store.state.reduceButton;
        this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
        console.log(this.allServices)
        console.log('mounted')
    },
    beforeCreate(){
    
    },
    created(){
   //GET ALL SERVICES FROM API
        this.$store.dispatch('service/fetchAllServices')
    },
    beforeDestroy() {
        if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
    },
    watch: {
     allService(newValue,oldValue){
         alert("new service is added")
     }     
    }

}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/profile.scss";

.shadow-dancer{
box-shadow: 2px 2px 1px 0px black;
}
</style>