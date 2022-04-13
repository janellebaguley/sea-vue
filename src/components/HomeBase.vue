<template>
  <v-card class="mx-3 my-4">
    <v-row class='mx-1'>
      <v-col>
        <h1 class='primary--text'>San Diego's first inclusive mermaid performance company proving anyone can achieve their dream. Come create some magic with us!</h1>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "HomeBase",
  components: {},
  data() {
    return {
      pageName: "Home",
      search: "",
      loading: true,
      // form fields
      form: {
        id: 0,
      },
      menu: false,
      rows: [],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      this.getData();
    }
  },
};
</script>
<style>
</style>