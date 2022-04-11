<template>
    <v-card class="mx-3 mt-4">
<v-row>
            <v-col>
                <h1>Psychic</h1>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
    export default {
        name: 'PsychicMer',
        components: {
        },
        data() {
            return {
                pageName: "Psychic",
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