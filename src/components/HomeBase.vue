<template>
  <v-card class="mx-3 my-4">
    <v-row class='mx-1'>
      <v-col>
        <h1 class='primary--text'>Come explore San Diego with us and let us help you bring out your inner sea goddess!</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img :src="require('@/../src/assets/family.jpg')" alt='Mermaid Family' max-height='110vh'/>
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