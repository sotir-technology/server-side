<!-- =========================================================================================
	File Name: LoadingType.vue
	Description: Change the type of the animation
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<vx-card title="Type" code-toggler>
		
		<p>You can change the type of animation with the type property and the animations so far are:</p>

		<div class="demo-alignment">

			<div class="fill-row-loading">
				<div
					:class="{'activeLoading':activeLoading}"
					@click="openLoading(type)"
					v-for="type in types"
					:key="type"
					:id="[`loading-${type}`]"
					class="vs-con-loading__container loading-example">
				</div>
			</div>
		</div>

		<template slot="codeContainer">
<template lang="html">
  <div class="demo-alignment">
      <div class="fill-row-loading">
        <div :class="{&apos;activeLoading&apos;:activeLoading}" @click="openLoading(type)" v-for="type in types" :id="[`loading-${type}`]" class="vs-con-loading__container loading-example">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    types:[
      &apos;default&apos;,
      &apos;point&apos;,
      &apos;radius&apos;,
      &apos;corners&apos;,
      &apos;border&apos;,
      &apos;sound&apos;,
      &apos;material&apos;,
    ],
    activeLoading:false,
  }),
  mounted(){
    this.types.forEach((type)=>{
      this.$vs.loading({
        container: `#loading-${type}`,
        type,
        text:type
      })
    })
  },
  methods:{
    openLoading(type){
      this.activeLoading = true
      this.$vs.loading({
        type:type,
      })
      setTimeout( ()=> {
        this.activeLoading = false
        this.$vs.loading.close()
      }, 3000);
    },
  }
}
</script>

<style lang="scss">
.fill-row-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .loading-example {
    width: 120px;
    float: left;
    height: 120px;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    &amp;:hover {
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
      transform: translate(0, 4px);
    }
    h4 {
      z-index: 40000;
      position: relative;
      text-align: center;
      padding: 10px;
    }
    &amp;.activeLoading {
      opacity: 0 !important;
      transform: scale(0.5);
    }
  }
}
</style>
		</template>

	</vx-card>
</template>

<script>
export default {
  data:()=>({
    types:[
      'default',
      'point',
      'radius',
      'corners',
      'border',
      'sound',
      'material',
    ],
    activeLoading:false,
  }),
  mounted(){
    this.types.forEach((type)=>{
      this.$vs.loading({
        container: `#loading-${type}`,
        type,
        text:type
      })
    })
  },
  methods:{
    openLoading(type){
      this.activeLoading = true
      this.$vs.loading({
        type:type,
      })
      setTimeout( ()=> {
        this.activeLoading = false
        this.$vs.loading.close()
      }, 3000);
    },
  }
}
</script>