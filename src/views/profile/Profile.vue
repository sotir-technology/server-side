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
                <div class="cover-container rounded-t-lg">
                    <img :src="require(`@/assets/images/profile/user-uploads/${userCoverImg}`)" alt="user-profile-cover" class="responsive block">
                </div>
                <div class="profile-img-container pointer-events-none">
                    <div>
                        <vs-avatar class="user-profile-img" :src="require(`@/assets/images/profile/user-uploads/${userInfo.profileImg}`)" size="85px" />
                    </div>
                    <div class="profile-actions pointer-events-auto flex">
                        <vs-button icon-pack="feather" radius icon="icon-edit-2"></vs-button>
                        <vs-button icon-pack="feather" radius icon="icon-settings" class="ml-2 lg:ml-4"></vs-button>
                    </div>
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
                <vx-card title="About" class="mt-base">
                    <!-- ACTION SLOT -->
                    <template slot="actions">
                        <feather-icon icon="MoreHorizontalIcon"></feather-icon>
                    </template>

                    <!-- USER BIO -->
                    <div class="user-bio">
                        <p>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer.</p>
                    </div>

                    <!-- OTEHR DATA -->
                    <div class="mt-5">
                        <h6>Joined:</h6>
                        <p>November 15, 2015</p>
                    </div>

                    <div class="mt-5">
                        <h6>Lives:</h6>
                        <p>New York, USA</p>
                    </div>

                    <div class="mt-5">
                        <h6>Email:</h6>
                        <p>bucketful@fiendhead.org</p>
                    </div>

                    <div class="mt-5">
                        <h6>Website:</h6>
                        <p>www.pixinvent.com</p>
                    </div>

                    <div class="social-links flex mt-4">
                        <feather-icon svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded" class="mr-2" icon="FacebookIcon"></feather-icon>
                        <feather-icon svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded" class="mr-2" icon="TwitterIcon"></feather-icon>
                        <feather-icon svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded" class="mr-2" icon="InstagramIcon"></feather-icon>
                    </div>
                </vx-card>
            </div>

            <!-- COL 2 -->
            <div class="vx-col w-full lg:w-3/4">
                <div class="vx-row"><!-- CONTENT CARD - PROGRESS BAR/GOAL -->
            <div class="vx-col sm:w-1/2 md:w-1/2">
                <vx-card class="mt-base">
                    <img :src="require(`@/assets/images/pages/${card_3.contentImg3}`)" alt="content-img" class="responsive rounded-lg">
                    <div class="my-6">
                        <h5 class="mb-2">{{ card_3.title }}</h5>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-between">
                            <small class="font-semibold">{{ card_3.current_progress }}</small>
                            <small class="text-grey">{{ card_3.progress_goal }}</small>
                        </div>
                        <vs-progress :percent="card_3.progress_done_per" class="block mt-1 shadow-md"></vs-progress>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ card_3.btn_left_text }}</vs-button>
                        <vs-button class="mt-4" type="border" color="#b9b9b9">{{ card_3.btn_right_text }}</vs-button>
                    </div>
                </vx-card>
            </div><div class="vx-col sm:w-1/2 md:w-1/2">
                <vx-card class="mt-base">
                    <img :src="require(`@/assets/images/pages/${card_3.contentImg3}`)" alt="content-img" class="responsive rounded-lg">
                    <div class="my-6">
                        <h5 class="mb-2">{{ card_3.title }}</h5>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-between">
                            <small class="font-semibold">{{ card_3.current_progress }}</small>
                            <small class="text-grey">{{ card_3.progress_goal }}</small>
                        </div>
                        <vs-progress :percent="card_3.progress_done_per" class="block mt-1 shadow-md"></vs-progress>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ card_3.btn_left_text }}</vs-button>
                        <vs-button class="mt-4" type="border" color="#b9b9b9">{{ card_3.btn_right_text }}</vs-button>
                    </div>
                </vx-card>
            </div><div class="vx-col sm:w-1/2 md:w-1/2">
                <vx-card class="mt-base">
                    <img :src="require(`@/assets/images/pages/${card_3.contentImg3}`)" alt="content-img" class="responsive rounded-lg">
                    <div class="my-6">
                        <h5 class="mb-2">{{ card_3.title }}</h5>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-between">
                            <small class="font-semibold">{{ card_3.current_progress }}</small>
                            <small class="text-grey">{{ card_3.progress_goal }}</small>
                        </div>
                        <vs-progress :percent="card_3.progress_done_per" class="block mt-1 shadow-md"></vs-progress>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ card_3.btn_left_text }}</vs-button>
                        <vs-button class="mt-4" type="border" color="#b9b9b9">{{ card_3.btn_right_text }}</vs-button>
                    </div>
                </vx-card>
            </div><div class="vx-col sm:w-1/2 md:w-1/2">
                <vx-card class="mt-base">
                    <img :src="require(`@/assets/images/pages/${card_3.contentImg3}`)" alt="content-img" class="responsive rounded-lg">
                    <div class="my-6">
                        <h5 class="mb-2">{{ card_3.title }}</h5>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-between">
                            <small class="font-semibold">{{ card_3.current_progress }}</small>
                            <small class="text-grey">{{ card_3.progress_goal }}</small>
                        </div>
                        <vs-progress :percent="card_3.progress_done_per" class="block mt-1 shadow-md"></vs-progress>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ card_3.btn_left_text }}</vs-button>
                        <vs-button class="mt-4" type="border" color="#b9b9b9">{{ card_3.btn_right_text }}</vs-button>
                    </div>
                </vx-card>
            </div></div>
            </div>

        </div>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
    components: {
    },
    data() {
        return {          
            // card 3
            card_3: {
                contentImg3: 'content-img-3.jpg',
                title: 'Vuesax Admin',
                progress_done_per: 75,
                current_progress: '$ 5975',
                progress_goal: '$ 8000',
                btn_left_text: 'Add More',
                btn_right_text: 'Remove'

            },
            isNavOpen: false,
            userInfo: {
                profileImg: 'user-13.jpg',
            },
            mediaExtensions: { img: ['jpg', 'jpeg', 'png', 'bmp', 'gif', 'exif', 'tiff'], video: ['avi', 'flv', 'wmv', 'mov', 'mp4', '3gp'] },
            userCoverImg: 'cover.jpg',
            wasSidebarOpen: null,
        }
    },
    computed: {
                       
    },
    methods: {
        handleWindowResize(event) {
            this.windowWidth = event.currentTarget.innerWidth;
            this.setSidebarWidth();
        },
        setSidebarWidth() {
            if(this.windowWidth < 992) {
                this.isFilterSidebarActive = this.clickNotClose = false;
            }else {
                this.isFilterSidebarActive = this.clickNotClose = true;
            }
        },        
        loadContent() {
            this.$vs.loading({
                background: this.backgroundLoading,
                color: this.colorLoading,
                container: "#button-load-more-posts",
                scale: 0.45
            })
            setTimeout(() => {
                this.$vs.loading.close("#button-load-more-posts > .con-vs-loading")
            }, 3000);
        },
    },
    components: {
        videoPlayer,
    },
    mounted() {
        this.wasSidebarOpen = this.$store.state.reduceButton;
        this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
    },
    beforeDestroy() {
        if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/profile.scss";#demo-basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }
    
    .chat-card-log {
        height: 360px;

        .chat-sent-msg {
            background-color: #f2f4f7 !important;
        }
    }

    }
</style>