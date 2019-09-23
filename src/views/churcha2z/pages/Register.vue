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
                                        label-placeholder="Full Name"
                                        name="name"
                                        placeholder="Full Name"
                                        v-model="name"
                                        class="w-full"
                                          icon-pack="feather" 
                                        icon="icon-user"
                                         icon-no-border />
                                    <span class="text-danger text-sm">{{ errors.first('name') }}</span>

                                    <vs-input
                                        v-validate="'required|email'"
                                        data-vv-validate-on="blur"
                                        name="email"
                                        type="email"
                                        label-placeholder=" Email"
                                        placeholder=" Email"
                                        v-model="email"
                                        class="w-full mt-6"
                                         icon-pack="feather" icon="icon-mail" icon-no-border />
                                    <span class="text-danger text-sm">{{ errors.first('email') }}</span>

                                    <vs-input
                                        v-validate="'required|min:3'"
                                        data-vv-validate-on="blur"
                                        name="phone"
                                        type="phone"
                                        label-placeholder=" Phone"
                                        placeholder=" Phone"
                                        v-model="phone"
                                        class="w-full mt-6"
                                        icon-pack="feather" icon="icon-smartphone" icon-no-border />
                                    <span class="text-danger text-sm">{{ errors.first('phone') }}</span>

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
                                        class="w-full mt-6"
                                         icon-pack="feather" icon="icon-lock" icon-no-border/>
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
                                    <vs-button  type="border" @click="login" class="mt-6">Login</vs-button>
                                    <vs-button class="float-right mt-6 vs-con-loading__container" ref="loadableButton" id="button-with-loading"  type="relief" @click="registerUser()" :disabled="!validateForm">Register</vs-button>
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
            name: 'Account Name',
            email: 'name@churcha2x.com',
            phone: '08123456788',
            country: 'Account Location/Country',
            state: 'State',
            street: 'address/home',
            password: '12345',
            confirm_password: '',
            isTermsConditionAccepted: true,
            backgroundLoading:'primary',
            colorLoading:'#fff',
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.name != '' && this.email != '' && this.password != '' && this.confirmpassword != '' && this.isTermsConditionAccepted === true;
        },
        ...mapState(['auth/isUserLoggedIn','msg','reg_status', 'status']),
        ...mapActions( ['auth/registerAttempt'] ),
    },
    methods: {



        registerUser() {
        //    if (!this.validateForm) return false
            //The button loader starts showing
            this.startLoading();
            if(this.isUserLoggedIn) {
              this.notifyAlreadyLogedIn();
              return
            }
            /** the userdetails, notify object and loading objeect is passed as a parameter object down to moduleAuthActions **/
            const payload =
                {
                userDetails:{   name: this.name,
                email: this.email,
                phone: this.phone,
                founder: this.founder,
                password: this.password,
                country: this.country,
                state: this.state,
                street: this.street
            },
                 notify: this.$vs.notify,
                stopLoading: this.$vs.loading
                }

            /** create data on server by sending payload as parameter**/
            this.$store.dispatch('auth/registerAttempt', payload);


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
            },
        login(){
            return this.$router.push('/login')
        }
        },

}
</script>
