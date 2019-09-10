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
                        <form class="">
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full lg:w-1/2"></div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="First Name" v-model="input21" />
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                <vs-input type="email" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="Email" v-model="input22" />
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                <vs-input class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border label-placeholder="Mobile" v-model="input23" />
                                </div>
                            </div>
                            <div class="vx-row mb-6">
                                <div class="vx-col w-full">
                                <vs-input type="password" class="w-full" icon-pack="feather" icon="icon-lock" icon-no-border label-placeholder="Password" v-model="input24" />
                                </div>
                            </div>
                            <div class="vx-row mb-6">
                                <div class="vx-col w-full">
                                <vs-checkbox class="inline-flex" v-model="check6">Remember Me</vs-checkbox>
                                </div>
                            </div>
                            <div class="vx-row">
                                <div class="vx-col w-full">
                                <vs-button class="mr-3 mb-2">Submit</vs-button>
                                <vs-button color="warning" type="border" class="mb-2" @click="input21 = input22 = input23 = input24 = ''; check6 = false;">Reset</vs-button>
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
export default {
    data() {
        return {
            // isNavOpen: false,
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
        }
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