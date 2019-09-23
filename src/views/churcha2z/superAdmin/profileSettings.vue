<template>
    <div id="profile-settings">
         <!-- COL AREA -->
        <div class="vx-row">
            <!-- COL 1 -->
           <div class="vx-col w-full lg:w-1/4">
                <!-- ABOUT CARD -->
                 <!-- USER PROFILE CARD 2 - MINIMAL -->
                <vx-card class="p-2">
                    <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require(`@/assets/images/portrait/small/avatar-s-24.png`)" />
                    <div class="text-center">
                        <h4>{{ userDetails.a_name }}</h4>
                        <p class="text-grey">{{ userDetails.a_email }}</p>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-4" type="border" color="#b9b9b9" to="/">Dashboard</vs-button>
                        <vs-button @click="password_view = !password_view" class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{buttonText}}</vs-button>
            
                    </div>
                
                </vx-card>
            


                <vx-card title="About" class="mt-base">
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
            </div>

            <div class="vx-col w-full lg:w-3/4">
                <vx-card title="Account Settings" class="mt-base">
                    <div class="">
                        <form v-if="!password_view" class="clearfix">
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full lg:w-1/2">
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                         <vs-input
                                        v-validate="'required|min:3'"
                                        data-vv-validate-on="blur"
                                        label-placeholder="Full Name"
                                        name="name"
                                        :placeholder="userDetails.a_name"
                                        v-model="name"
                                        class="w-full"
                                        icon-pack="feather" 
                                        icon="icon-user"
                                         icon-no-border />
                                    <span class="text-danger text-sm">{{ errors.first('name') }}</span>
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                    
                                    <vs-input
                                        v-validate="'required|email'"
                                        data-vv-validate-on="blur"
                                        name="email"
                                        type="email"
                                        label-placeholder=" Email"
                                        :placeholder="userDetails.a_email"
                                        v-model="email"
                                        class="w-full mt-6"
                                        icon-pack="feather" icon="icon-mail" icon-no-border />
                                    <span class="text-danger text-sm">{{ errors.first('email') }}</span>
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                               
                                    <vs-input
                                        v-validate="'required|min:3'"
                                        data-vv-validate-on="blur"
                                        name="phone"
                                        type="phone"
                                        label-placeholder=" Phone"
                                        :placeholder="userDetails.a_phone"
                                        v-model="phone"
                                        class="w-full mt-6"
                                        icon-pack="feather" icon="icon-smartphone" icon-no-border />
                                    <span class="text-danger text-sm">{{ errors.first('phone') }}</span>

                                </div>
                            </div>
                            <div class="vx-row mb-6">
                                <div class="vx-col w-full">
                                <vs-input
                                        v-validate="'required|alpha_dash|min:3'"
                                        data-vv-validate-on="blur"
                                        name="country"
                                        label-placeholder="Country"
                                        :placeholder="userDetails.a_country"
                                        v-model="country"
                                        class="w-full mt-6" />
                                    <span class="text-danger text-sm">{{ errors.first('country') }}</span>
                                             <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                                </div>
                            </div>
                            <div class="vx-row mb-6">
                                <div class="vx-col w-full">
                                        <vs-row vs-w="12">
                                        <vs-col vs-type="flex"  vs-align="left" vs-w="6">
                                            <vs-input
                                                    v-validate="'required|min:3'"
                                                    data-vv-validate-on="blur"
                                                    name="state"
                                                    label-placeholder="state"
                                                    :placeholder="userDetails.a_state"
                                                    v-model="state"
                                                    class="mt-6" />
                                        </vs-col>
                                        <vs-col vs-type="flex"  vs-align="right" vs-w="6">
                                            <vs-input
                                                    v-validate="'required|min:3'"
                                                    data-vv-validate-on="blur"
                                                    name="street"
                                                    label-placeholder="street"
                                                    :placeholder="userDetails.a_street"
                                                    v-model="street"
                                                    class="mt-6  " />
                                        </vs-col>
                                    </vs-row>

                                </div>
                                </div>
                         
                            <div class="vx-row">
                                <div class="vx-col w-full">
                                 <vs-button class="mr-3 mb-2 vs-con-loading__container" ref="loadableButton" id="button-with-loading"  type="relief" @click="updateUser()" :disabled="!validateForm">Submit</vs-button>
                                <vs-button color="warning" type="border" class="mb-2" @click="name =  phone = country = state = street = ''; check6 = false;">Reset</vs-button>
                                </div>
                            </div>

                        </form>
                        <form v-else class="clearfix">
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full lg:w-1/2">
                                </div>
                            </div>
                            <div class="vx-row mb-2">
                                <div class="vx-col w-full">
                                    
                                   <vs-input
                                        ref="password"
                                        type="password"
                                        data-vv-validate-on="blur"
                                        v-validate="'required|min:6'"
                                        name="old_password"
                                        label-placeholder="Old Password"
                                        placeholder="Old Password"
                                        v-model="old_password"
                                        class="w-full mt-6"
                                         icon-pack="feather" icon="icon-lock" icon-no-border/>
                                    <span class="text-danger text-sm">{{ errors.first('password') }}</span>
                                 </div>
               <div class="vx-col w-full">
                                  
                       <vs-input
                                        type="password"
                                        v-validate="'min:6|confirmed:password'"
                                        data-vv-validate-on="blur"
                                        data-vv-as="password"
                                        name="new_password"
                                        label-placeholder="New Password"
                                        placeholder="New Password"
                                        v-model="new_password"
                                        class="w-full mt-6" />
                                    <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>


               </div>
                 
        
                            </div>
              
                        <div class="vx-row">
                                <div class="vx-col w-full">
                                 <vs-button class="mr-3 mb-2 vs-con-loading__container" ref="loadableButton" id="button-with-loading"  type="relief" @click="changePassword()" :disabled="!validateForm">Submit</vs-button>
                                <vs-button color="warning" type="border" class="mb-2" @click="new_password =  old_password  = ''; check6 = false;">Reset</vs-button>
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
import {mapState} from 'vuex'
export default {
    data() {
        return {
            //userDetails
            name:'',
            phone:'',
            country:'',
            state:'',
            street:'',
            // isNavOpen: false,
            password_view: false,
            buttonText:'Account Security',
              // card 4
        
        }
    },
    methods: {
         validateForm() {
            return !this.errors.any() && this.name != '' && this.phone != '' && this.country!='';
        }, 
        validatePForm() {
            return !this.errors.any() && this.old_password != '' && this.new_password != '';
        },
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
           updaterUser() {
        //    if (!this.validateForm) return false
            //The button loader starts showing
            this.startLoading();
            /** the userdetails, notify object and loading objeect is passed as a parameter object down to moduleAuthActions **/
            const payload =
                {
                userDetails:{   
                name: this.name,
                phone: this.phone,
                country: this.country,
                state: this.state,
                street: this.street
            },
                 notify: this.$vs.notify,
                stopLoading: this.$vs.loading
                }

            /** create data on server by sending payload as parameter**/
            this.$store.dispatch('auth/updateUser', payload)
            .then(result=>{
                this.notifyProfileUpdated(result);
            })


        },
        changePassword(){
            const payload = {
                token: localStorage.getItem('token'),
                old_password: this.old_password,
                new_password: this.new_password
            }
            this.$store.dispatch('auth/changePassword',payload)
            .then(res => {
                this.notifyProfileUpdated(res)
                })
        },
        notifyProfileUpdated(result) {
            this.$vs.notify({
                title: 'Profile Updated',
                text: result,
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'warning'
            });
        },
        startLoading(){
      return  this.$vs.loading({
                background: this.backgroundLoading,
                color: this.colorLoading,
                container: "#button-with-loading",
                scale: 0.45
            }) 
            },
        stopLoading(){
             return this.$vs.loading.close("#button-with-loading > .con-vs-loading")
            },
       
    },
    components: {
    },
    computed:{
  ...mapState({
            userDetails: state => state.auth.userDetails
        }),
    },
    mounted() {
        
        this.wasSidebarOpen = this.$store.state.reduceButton;
        this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
    },
    beforeDestroy() {
        if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
    },
    watch:{
        password_view(oldValue,newValue){
           if(newValue === true)
           { this.buttonText = 'Account Security'
               
           console.log(newValue)
           }
        else{           
           this.buttonText = 'Personal Profile'
           }
              }
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/vuesax/pages/profile.scss";
</style>