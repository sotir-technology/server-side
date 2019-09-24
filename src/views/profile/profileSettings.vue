<template>
    <div id="profile-settings">
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

            <div class="vx-col w-full lg:w-3/4">
                <vx-card title="Account Settings" class="mt-base">
                    <div class="">
                        <form class="" @submit.prevent="submitFormData">
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full lg:w-1/2">
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                    <vs-input 
                                        class="w-full" 
                                        icon-pack="feather" 
                                        icon="icon-user" 
                                        icon-no-border 
                                        label-placeholder="Full Name" 
                                        name="accountName" 
                                        v-model="profile.name"
                                        @input="profile($event);"
                                         />
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                <vs-input type="email" 
                                    class="w-full" 
                                    icon-pack="feather" 
                                    icon="icon-mail" 
                                    icon-no-border 
                                    label-placeholder="Email"
                                     name="email"  
                                     v-model="profile.email"/>
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                    <vs-input 
                                        type="tel" 
                                        class="w-full" 
                                        icon-pack="feather" 
                                        icon="icon-smartphone" 
                                        icon-no-border
                                        label-placeholder="Mobile" 
                                        name="phone" 
                                        v-model="profile.phone" />
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                    <vs-input 
                                        type="tel" 
                                        class="w-full" 
                                        icon-pack="feather" 
                                        icon="icon-globe" 
                                        icon-no-border
                                        label-placeholder="Country" 
                                        name="country" 
                                        v-model="profile.country" />
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                    <vs-input 
                                        type="tel" 
                                        class="w-full" 
                                        icon-pack="feather" 
                                        icon="icon-globe" 
                                        icon-no-border
                                        label-placeholder="State" 
                                        name="country" 
                                        v-model="profile.state" />
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                    <vs-input 
                                        type="tel" 
                                        class="w-full" 
                                        icon-pack="feather" 
                                        icon="icon-map"
                                        icon-no-border 
                                        label-placeholder="Address" 
                                        name="address" 
                                        v-model="profile.street" />
                                </div>
                            </div>
                            <div class="vx-row">
                                <div class="vx-col w-full">
                                    <vs-button class="mr-3 mb-2 mt-2">Submit</vs-button>
                                </div>
                            </div>
                        </form>
                    </div>
                </vx-card>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            country:3,
            countries:[
                {text:'Nigeria',value:0},
                {text:'Kenya',value:1},
                {text:'Ghana',value:2},
                {text:'South Africa',value:3},
            ],
            state:3,
            states:[
                {text:'Abia',value:0},
                {text:'Adamawa',value:1},
                {text:'Akwa-ibom',value:2},
                {text:'Anambra',value:3},
            ],
            // password:'',
            // rePassword:'',
        }
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
        submitFormData: function(e){
            var formDataName = this.accountName;
            //console.log(formDataName);
        }
    },
    computed: {
        //...mapState(['userProfile']),
        profile: {
            get () {
                return this.$store.state.userProfile
            },
            set (value) {
                this.$store.commit('UPDATE_PROFILE', value)
            }
        }
        // profileDetails(){
        //     return this.$store.state.userProfile;
        // }
    },
    components: {
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
    @import "@/assets/scss/vuesax/pages/profile.scss";
</style>