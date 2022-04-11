<template>
    <v-card class="mx-3 mt-4">
<v-row>
            <v-col>
                <h1>Policies</h1>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
    export default {
        name: 'PoliciesMer',
        components: {
        },
        data() {
            return {
                pageName: "Policies",
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