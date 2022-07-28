<template>
    <component v-bind:is="layout">
    </component>
</template>
<script>
    import LayoutDefault from './layouts/DefaultLayout'
    import LayoutBlank from './layouts/BlankLayout'
    export default {
        components: {
            'layout-default': LayoutDefault,
            'layout-blank': LayoutBlank,
        },
        computed: {
            layout() {
                if (this.$route.path === '/homebase') {
                    return LayoutBlank;
                } else {
                    return LayoutDefault
                }
            }
        }
    }
</script>
<style>
@font-face {
  font-family: "Annabelle";
  src: local("Annabelle"),   url(./fonts/Annabelle/AnnabelleJF.ttf) format("truetype");}
</style>