<template>
  <v-card class="mx-3 my-4">
    <v-row class="mx-1">
      <v-col>
        <h1 class="primary--text">Mystical Mermaid Oracle Readings</h1>
      </v-col>
    </v-row>
    <v-row class="mx-3">
      <v-col>
        <p>
          Sea Goddess Calypso also offers tarot and other psychic services! She
          has been an active psychic reader for 18 years and help you reach the
          clarity you need. She specializes in tarot, medium work, past life
          regressions, and channeling spirit guides. Calypso can do readings in
          person or Readings can be done in person, over the phone, or through
          video calls. <br /><br />
          Psychic services and tarot readings start at $60 an hour with a 1 hour
          minimum. Some services may incur an additional fee including medium
          work and channeling. Please contact us for more information.
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "PsychicMer",
  components: {},
  data() {
    return {
      pageName: "Psychic",
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