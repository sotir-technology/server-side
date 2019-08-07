<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: W&C Console
      Author: Revelation
    Author URL: http://rscbyte.com
========================================================================================== -->


<template>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>&copy; Copyright {{ new Date().getFullYear() }} <a href="http://workandconnect.net" target="_blank" rel="nofollow">W&C Dev</a>, All rights Reserved</span>
        <span class="md:flex hidden items-center">
            <span>RSC Byte Limited</span>
        </span>
    </footer>
</template>

<script>
export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    }
}
</script>
