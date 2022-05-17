<template>
  <v-card class="mx-3 my-4">
    <v-row>
      <v-col cols="7">
        <v-container>
          <v-row class="mx-4">
            <v-col>
              <h1 class="primary--text">Contact us!</h1>
            </v-col>
          </v-row>
          <v-row class="mx-4">
            <v-col>
              <v-text-field label="*First Name" required outlined dense />
            </v-col>
            <v-col>
              <v-text-field label="*Last Name" required outlined dense />
            </v-col>
          </v-row>
          <v-row class="mx-4">
            <v-col>
              <v-text-field
                label="*E-mail"
                v-model="email"
                :rules="emailRules"
                required
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row class="mx-4">
            <v-col>
              <v-text-field label="*Subject" required outlined dense />
            </v-col>
          </v-row>
          <v-row class="mx-4">
            <v-col>
              <v-textarea label="*Message" :rows="6" required outlined dense />
            </v-col>
          </v-row>
          <v-row class="mx-4">
            <v-col>
              <v-btn color="secondary">Submit</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="5">
        <v-container>
          <v-row>
            <v-col>
              <v-img
                :src="require('@/../src/assets/family.jpg')"
                alt="Mermaid Family"
                max-height="110vh"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "ContactEmail",
  components: {},
  data() {
    return {
      pageName: "Contact",
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
  emailRules: [
    (v) => !!v || "E-mail is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ],
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