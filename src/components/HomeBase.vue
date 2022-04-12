<template>
  <v-card class="mx-3 my-4">
    <v-row>
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