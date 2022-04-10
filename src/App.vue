<template>
    <component v-bind:is="layout"></component>
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
                if (this.$route.path === '/') {
                    return LayoutBlank;
                } else {
                    return LayoutDefault
                }
            }
        }
    }
</script>
