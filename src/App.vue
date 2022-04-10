<template>
    <component v-bind:is="layout"></component>
</template>
<script>
    import DefaultLayout from './layouts/DefaultLayout'
    import BlankLayout from './layouts/BlankLayout'
    export default {
        components: {
            'layout-default': DefaultLayout,
            'layout-blank': BlankLayout,
        },
        computed: {
            layout() {
                if (this.$route.path === '/') {
                    return BlankLayout;
                } else {
                    return DefaultLayout
                }
            }
        }
    }
</script>
