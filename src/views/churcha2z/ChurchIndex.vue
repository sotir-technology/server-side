<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="dashboard-analytics">
        <div class="vx-row ">

            <!-- CARD 1: WELCOME CARD -->
            <div class="vx-col-12 w-full lg:w-2/2 mb-base ">
                <vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
                    <img src="../../assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" >
                    <img src="../../assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175">
                    <feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
                    <h1 class="mb-6 text-white ">Welcome to CHURCH A2Z,</h1>
                    <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">Enjoy the best <strong>Church</strong> Automated System.</p>
                </vx-card>
            </div>


        </div>


        <div class="vx-row">
            <div class="container">
                <div class="jumbotron text-center">
                    <!-- USER PROFILE CARD 2 - MINIMAL -->
                    <div class="vx-col m-auto w-full sm:w-1/2 md:w-1/3 mb-base">
                        <vx-card class="p-2">
                            <div class="text-center">
                                <h4>Add Branch</h4>
                                <p class="text-grey">Click to add your church branch</p>
                            </div>
                            <div class="container">
                                <router-link to="/branch">
                            <vs-button style="margin: 0px auto;" color="primary" type="gradient" icon-pack="feather" icon="icon-plus"></vs-button>
                                </router-link>
                            </div>
                        </vx-card>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'
    import StatisticsCardLine from '@/churcha2z_components/components/statistics-cards/StatisticsCardLine.vue'
    import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
    import AddNewDataSidebar from './ui-elements/data-list/AddNewDataSidebar.vue';


    export default {
        data() {
            return {

                //this is for the tag add-new-data-form
                inputInfo:[
                    {
                        type:'text',
                        name:'Name of Branch',
                        placeholder:'Branch Name',
                    },
                    {
                        type:'text',
                        name:'Branch Location',
                        placeholder:'Location'
                    }, {
                        type:'text',
                        name:'Regional Pastor',
                        placeholder:'Pastor\'s Name'
                    }
                ],
                // card 1
                card_1: {
                    contentImg1: 'content-img-1.jpg',
                    title: 'Branch Name',
                    subtitle: 'Location: country, city',
                    subtitle_2: 'Regional Pastor Name',
                },
                isImp: false,
                navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
                show: false,
                items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                nextNum: 10,
                'tableList': [
                    'vs-th: Component',
                    'vs-tr: Component',
                    'vs-td: Component',
                    'thread: Slot',
                    'tbody: Slot',
                    'header: Slot'
                ],
                users: [{
                    "orderNo": 879985,
                    "status": "Moving",
                    "statusColor": "success",
                    "operator": "Cinar Knowles",
                    "operatorImg": "avatar-s-2.png",
                    usersLiked: [
                        { name: 'Vennie Mostowy', img: 'avatar-s-5.png' },
                        { name: 'Elicia Rieske', img: 'avatar-s-7.png' },
                        { name: 'Julee Rossignol', img: 'avatar-s-10.png' },
                        { name: 'Darcey Nooner', img: 'avatar-s-8.png' }
                    ],
                    "location": "Anniston, Alabama",
                    "distance": "130 km",
                    "distPercent": 80,
                    "startDate": "14:58 26/07/2018",
                    "estDelDate": "28/07/2018"
                },
                    {
                        "orderNo": 156897,
                        "status": "Pending",
                        "statusColor": "warning",
                        "operator": "Britany Ryder",
                        "operatorImg": "avatar-s-4.png",
                        usersLiked: [
                            { name: 'Trina Lynes', img: 'avatar-s-1.png' },
                            { name: 'Lilian Nenez', img: 'avatar-s-2.png' },
                            { name: 'Alberto Glotzbach', img: 'avatar-s-3.png' }
                        ],
                        "location": "Cordova, Alaska",
                        "distance": "234 km",
                        "distPercent": 60,
                        "startDate": "14:58 26/07/2018",
                        "estDelDate": "28/07/2018"
                    },
                    {
                        "orderNo": 568975,
                        "status": "Moving",
                        "statusColor": "success",
                        "operator": "Kishan Ashton",
                        "operatorImg": "avatar-s-1.png",
                        usersLiked: [
                            { name: 'Lai Lewandowski', img: 'avatar-s-6.png' },
                            { name: 'Elicia Rieske', img: 'avatar-s-7.png' },
                            { name: 'Darcey Nooner', img: 'avatar-s-8.png' },
                            { name: 'Julee Rossignol', img: 'avatar-s-10.png' },
                            { name: 'Jeffrey Gerondale', img: 'avatar-s-9.png' },
                        ],
                        "location": "Florence, Alabama",
                        "distance": "168 km",
                        "distPercent": 70,
                        "startDate": "14:58 26/07/2018",
                        "estDelDate": "28/07/2018"
                    },
                    {
                        "orderNo": 245689,
                        "status": "Canceled",
                        "statusColor": "danger",
                        "operator": "Anabella Elliott",
                        "operatorImg": "avatar-s-6.png",
                        usersLiked: [
                            { name: 'Vennie Mostowy', img: 'avatar-s-5.png' },
                            { name: 'Elicia Rieske', img: 'avatar-s-7.png' }
                        ],
                        "location": "Clifton, Arizona",
                        "distance": "125 km",
                        "distPercent": 95,
                        "startDate": "14:58 26/07/2018",
                        "estDelDate": "28/07/2018"
                    }

                ],
                selected: [],
                itemsPerPage: 4,
                isMounted: false,
                addNewDataSidebar: false,
            }
        },
        components: {
            AddNewDataSidebar,
            VueApexCharts,
            StatisticsCardLine,
            ChangeTimeDurationDropdown

        },
        computed: {
        },
        methods: {
            getOrderStatusColor(status) {
                if(status == 'on hold') return "warning"
                if(status == 'delivered') return "success"
                if(status == 'canceled') return "danger"
                return "primary"
            },
            getPopularityColor(num) {
                if(num > 90) return "success"
                if(num >70) return "primary"
                if(num >= 50) return "warning"
                if(num < 50) return "danger"
                return "primary"
            },
            formatData(data) {
                // formats data received from API
                let formattedData = data.map((item) => {
                    const fields = item.fields
                    let obj = {}
                    for (const key of Object.keys(fields)) {
                        obj[key] = fields[key].stringValue || fields[key].integerValue || fields[key].doubleValue;
                    }
                    return obj
                });
                return formattedData
            }
        },
        created() {
            const thisIns = this;
            this.$http.get('https://firestore.googleapis.com/v1/projects/vuesax-admin/databases/(default)/documents/products/?pageSize=100')
                .then(function (response) {
                    thisIns.users = thisIns.formatData(response.data.documents)
                })
                .catch(function (error) {
                    thisIns.$vs.notify({
                        title:'Error',
                        text: error,
                        color:'danger',
                        iconPack: 'feather',
                        icon:'icon-alert-circle'})
                });
        },
        mounted() {
            this.isMounted = true;
        }

    }
</script>

<style lang="scss">
                      #data-list-thumb-view {
                          .vs-con-table {

                              .vs-table--header {
                                  display: flex;
                                  flex-wrap: wrap-reverse;
                                  margin-left: 1.5rem;
                                  margin-right: 1.5rem;
                                  > span {
                                      display: flex;
                                      flex-grow: 1;
                                  }

                                  .vs-table--search{
                                      padding-top: 0;

                                      .vs-table--search-input {
                                          padding: 0.9rem 2.5rem;
                                          font-size: 1rem;

                                          &+i {
                                              left: 1rem;
                                          }

                                          &:focus+i {
                                              left: 1rem;
                                          }
                                      }
                                  }
                              }

                              .vs-table {
                                  border-collapse: separate;
                                  border-spacing: 0 1.3rem;
                                  padding: 0 1rem;


                                  tr{
                                      box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
                                      td{
                                          padding: 10px;
                                          &:first-child{
                                              border-top-left-radius: .5rem;
                                              border-bottom-left-radius: .5rem;
                                          }
                                          &:last-child{
                                              border-top-right-radius: .5rem;
                                              border-bottom-right-radius: .5rem;
                                          }
                                          &.img-container {
                                              // width: 1rem;
                                              // background: #fff;

                                              span {
                                                  display: flex;
                                                  justify-content: center;
                                              }

                                              .product-img {
                                                  height: 110px;
                                              }
                                          }
                                      }
                                      td.td-check{
                                          padding: 20px !important;
                                      }
                                  }
                              }

                              .vs-table--thead{
                                  th {
                                      padding-top: 0;
                                      padding-bottom: 0;

                                      .vs-table-text{
                                          text-transform: uppercase;
                                          font-weight: 600;
                                      }
                                  }
                                  th.td-check{
                                      padding: 0 15px !important;
                                  }
                                  tr{
                                      background: none;
                                      box-shadow: none;
                                  }
                              }

                              .vs-table--pagination {
                                  justify-content: center;
                              }
                          }
                      }
#dashboard-analytics {
        .greet-user{
            position: relative;
            .decore-left{
                position: absolute;
                left:0;
                top: 0;
            }
            .decore-right{
                position: absolute;
                right:0;
                top: 0;
            }
        }

        @media(max-width: 576px) {
            .decore-left, .decore-right{
                width: 140px;
            }
        }
    }
</style>
