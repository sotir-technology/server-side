<!-- =========================================================================================
    File Name: LoadingDefault.vue
    Description: Add default loading to your application
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>
        
        <p>To add a loading in any part of your application we have the global function <code>$vs.loading()</code>, and then when you want to remove it we have <code>$vs.loading.close()</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>For the examples, the request or the delay is simulated with <code>setTimeout</code></p>
        </vs-alert>

        <div class="mt-5">
            <vs-button @click="openLoading" type="filled" color="primary">Loading Default</vs-button>
        </div>

        <template slot="codeContainer">
<template>
  <div class="demo-alignment">
    <vs-button @click="openLoading" type="filled" color="primary">Loading Default</vs-button>
  </div>
</template>

<script>
export default {
  methods:{
    openLoading(){
      this.$vs.loading()
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 2000);
    },
  }
}
</script>
        </template>

    </vx-card>
</template>

<script>
export default {
    methods: {
        openLoading() {
            this.$vs.loading();
            setTimeout(() => {
                this.$vs.loading.close()
            }, 2000);
        },
    }
}
</script>