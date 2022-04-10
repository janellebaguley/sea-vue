<template>
    <v-card>
<v-row>
            <v-col>
                <h1>MER-chandise</h1>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
    export default {
        name: 'ShopMer',
        components: {
        },
        data() {
            return {
                pageName: "Shop",
                search: '',
                loading: true,
                // form fields
                form: {
                    id: 0,
                },
                menu: false,
                rows: [],
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
        },
        created() {},
        mounted() {
            if (localStorage.getItem('token')) {
                console.log(localStorage.getItem('token'));
                this.getData();
            }
        }
    };
</script>
<style>
</style>