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
              <v-text-field label="*First Name" type='text' v-model='firstName' required outlined dense />
            </v-col>
            <v-col>
              <v-text-field label="*Last Name" type='text' v-model='lastName' required outlined dense />
            </v-col>
          </v-row>
          <v-row class="mx-4">
            <v-col>
              <v-text-field
                label="*E-mail"
                v-model="email"
                :rules="emailRules"
                type='email'
                required
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row class="mx-4">
            <v-col>
              <v-text-field label="*Subject" v-model='subject' required outlined dense />
            </v-col>
          </v-row>
          <v-row class="mx-4">
            <v-col>
              <v-textarea label="*Message" :rows="6" v-model='message' required outlined dense type='text'/>
            </v-col>
          </v-row>
          <v-row class="mx-4">
            <v-col>
              <v-btn color="secondary" type='submit'>Submit</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="5">
        <v-container>
          <v-row class='mt-10'></v-row>
          <v-row class='mt-6 mr-4'>
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
  email: '',
  firstName: '',
  lastName: '',
  subject: '',
  message: '',
  emailRules: [
    (v) => !!v || "E-mail is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ],
  computed: {},
  watch: {},
  methods: {
  },
  mounted() {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      this.getData();
    }
  }
};
</script>
<style>
</style>