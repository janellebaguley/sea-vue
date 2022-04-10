<template>
    <v-app>
        <v-main>
            <router-view :key="$route.fullPath"></router-view>
        </v-main>
    </v-app>
</template>
<style scoped>
    #app {
        background: #ffffff !important;
        background-color: #ffffff !important;

    }

    a.links {
        text-decoration: none;
        color: #3C7FBA;
    }

    a.links:hover {
        text-decoration: underline;
    }

    .v-toolbar__title {
        font-size: 1rem;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .v-toolbar__content {
        max-width: 1770px;
        margin-right: auto;
        margin-left: auto;
    }
</style>