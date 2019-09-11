<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/register.jpg" alt="register" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title">
                                    <h4 class="mb-4">Create Account</h4>
                                    <p>Fill the below form to create a new account.</p>
                                </div>
                                <div class="clearfix">
                                    <vs-input
                                        v-validate="'required|min:3'"
                                        data-vv-validate-on="blur"
                                        label-placeholder="Church Name"
                                        name="church_name"
                                        placeholder="Church Name"
                                        v-model="church_name"
                                        class="w-full" />
                                    <span class="text-danger text-sm">{{ errors.first('church_name') }}</span>

                                    <vs-input
                                        v-validate="'required|email'"
                                        data-vv-validate-on="blur"
                                        name="church_email"
                                        type="email"
                                        label-placeholder="Church Email"
                                        placeholder="Church Email"
                                        v-model="church_email"
                                        class="w-full mt-6" />
                                    <span class="text-danger text-sm">{{ errors.first('church_email') }}</span>

                                    <vs-input
                                        v-validate="'required|min:3'"
                                        data-vv-validate-on="blur"
                                        name="phone"
                                        type="phone"
                                        label-placeholder="Church Phone"
                                        placeholder="Church Phone"
                                        v-model="church_phone"
                                        class="w-full mt-6" />
                                    <span class="text-danger text-sm">{{ errors.first('church_phone') }}</span>

                                    <vs-input
                                        v-validate="'required|min:3'"
                                        data-vv-validate-on="blur"
                                        name="founder"
                                        label-placeholder="Founder"
                                        placeholder="Founder"
                                        v-model="founder"
                                        class="w-full mt-6" />
                                    <span class="text-danger text-sm">{{ errors.first('founder') }}</span>

                                    <vs-input
                                        v-validate="'required|alpha_dash|min:3'"
                                        data-vv-validate-on="blur"
                                        name="country"
                                        label-placeholder="Country"
                                        placeholder="Country"
                                        v-model="country"
                                        class="w-full mt-6" />
                                    <span class="text-danger text-sm">{{ errors.first('country') }}</span>
                                    <vs-row vs-w="12">
                                        <vs-col vs-type="flex"  vs-align="left" vs-w="6">
                                            <vs-input
                                                    v-validate="'required|min:3'"
                                                    data-vv-validate-on="blur"
                                                    name="state"
                                                    label-placeholder="state"
                                                    placeholder="State"
                                                    v-model="state"
                                                    class="mt-6" />
                                        </vs-col>
                                        <vs-col vs-type="flex"  vs-align="right" vs-w="6">
                                            <vs-input
                                                    v-validate="'required|min:3'"
                                                    data-vv-validate-on="blur"
                                                    name="street"
                                                    label-placeholder="state"
                                                    placeholder="Street"
                                                    v-model="street"
                                                    class="mt-6  " />
                                        </vs-col>
                                    </vs-row>
                                    <vs-input
                                        ref="password"
                                        type="password"
                                        data-vv-validate-on="blur"
                                        v-validate="'required|min:6'"
                                        name="password"
                                        label-placeholder="Password"
                                        placeholder="Password"
                                        v-model="password"
                                        class="w-full mt-6" />
                                    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                                    <vs-input
                                        type="password"
                                        v-validate="'min:6|confirmed:password'"
                                        data-vv-validate-on="blur"
                                        data-vv-as="password"
                                        name="confirm_password"
                                        label-placeholder="Confirm Password"
                                        placeholder="Confirm Password"
                                        v-model="confirm_password"
                                        class="w-full mt-6" />
                                    <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>


                                    <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6">I accept the terms & conditions.</vs-checkbox>
                                    <vs-button  type="border" to="/church/login" class="mt-6">Login</vs-button>
                                    <vs-button class="float-right mt-6 vs-con-loading__container" ref="loadableButton" id="button-with-loading"  type="relief" @click="registerUser" :disabled="!validateForm">Register</vs-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
    data() {
        return {
            church_name: '',
            church_email: '',
            church_phone: '',
            founder: '',
            country: '',
            state: '',
            street: '',
            password: '',
            confirm_password: '',
            isTermsConditionAccepted: true,
            backgroundLoading:'primary',
            colorLoading:'#fff',
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.church_name != '' && this.church_email != '' && this.password != '' && this.confirm_password != '' && this.isTermsConditionAccepted === true;
        },
        ...mapState(['msg','reg_status', 'status']),
    },
    methods: {
        ...mapActions( ['RegisterChurch'] ),


        registerUser() {
        //    if (!this.validateForm) return false
            this.startLoading();
            if(this.$store.state.auth.isUserLoggedIn()) {
              this.notifyAlreadyLogedIn();
              return
            }

            const payload = {
                name: this.church_name,
                email: this.church_email,
                phone: this.phone,
                founder: this.founder,
                password: this.password,
                country: this.country,
                state: this.state,
                street: this.street
            }
            // create church data on server
          this.RegisterChurch(payload)
                .then(() => {
                    //the registration was not successful
                    if(this.reg_status === false){
                        this.$vs.notify({
                            title: this.msg,
                            text: 'Something went wrong!',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'warning'
                        });
                    return this.stopLoading();
                    }
                    //THe registration is successful
                    this.$vs.notify({
                        title: this.msg,
                        text: 'You are successfully registered!',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        color: 'success'
                    });
                    this.$route.push('/');
                    return this.stopLoading();
                }, (error) => {
                    this.$vs.notify({
                        title: 'Error Here',
                        text: error.message,
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    });
                })

            // // update user profile. In this case add username
            // const username = this.username;
            // const loginPayload = {
            //     userDetails: {
            //         email: this.email,
            //         password: this.password
            //     },
            //     notify: this.$vs.notify
            // }
            // const store = this.$store;
            // firebase.auth().onAuthStateChanged(function(user) {
            //     if (user) {
            //         user.updateProfile({
            //             displayName: username,
            //         }).then(function() {
            //             // Profile updated successfully!
            //             // Login user
            //             store.dispatch('auth/login', loginPayload)
            //         }, function(error) {
            //             this.$vs.notify({
            //                 title: 'Error',
            //                 text: error.message,
            //                 iconPack: 'feather',
            //                 icon: 'icon-alert-circle',
            //                 color: 'danger'
            //             });
            //         });
            //
            //     }
            // });
        },
        notifyAlreadyLogedIn() {
            this.$vs.notify({
                title: 'Login Attempt',
                text: 'You are already logged in!',
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
            }) },
        stopLoading(){
             return this.$vs.loading.close("#button-with-loading > .con-vs-loading")
            }
        },

}
</script>
