<template>
  <v-card>
    <v-row class='mx-1 text-center'>
      <v-col>
        <h1>San Diego's first inclusive Mermaid Performance Company. Proving anyone can achieve their dreams. Come create some magic with us!</h1>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "Home",
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