<template>
    <v-card>
<v-row>
            <v-col>
                <h1>Docs</h1>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
    export default {
        name: 'DocsPdf',
        components: {
        },
        data() {
            return {
                pageName: "Docs",
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