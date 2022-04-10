<template>
  <v-card>
    <!-- <v-row>
    <v-col cols='3'>
      <v-container>
        <v-card>
          <v-row>
            <v-col>
              <v-img :src="require('@/../src/assets/happy_loni.jpg')"/>
            </v-col>
          </v-row> -->
          <!-- <v-row>
            <v-col>
              <v-img :src="require('@/../src/assets/la_jolla.jpg')"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-img :src="require('@/../src/assets/seasters.jpg')"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-img :src="require('@/../src/assets/seasters_2.jpg')"/>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-col>
    <v-col cols='3'>
      <v-container>
        <v-card>
          <v-row>
            <v-col>
              <v-img :src="require('@/../src/assets/sleepy_loni.jpg')"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-img :src="require('@/../src/assets/tide_pools.jpg')"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-img :src="require('@/../src/assets/bay_view.jpg')"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-img :src="require('@/../src/assets/cannibal_2.jpg')"/>
            </v-col>
          </v-row> -->
        <!-- </v-card>
      </v-container>
    </v-col>
  </v-row> -->
  </v-card>
</template>

<script>
export default {
  name: "Gallery",
  components: {},
  data() {
    return {
      pageName: "Gallery",
      search: "",
      loading: true,
      // form fields
      form: {
        id: 0,
      },
      menu: false,
      rows: [],
      items: [
       
        // {
        //   src: require("@/../src/assets/family.jpg"),
        // },
        // {
        //   src: require("@/../src/assets/cannibal.jpg"),
        // },
        // {
        //   src: require("@/../src/assets/jealous_much.jpg"),
        // },
        // {
        //   src: require("@/../src/assets/cannibal_3.jpg"),
        // },
        // {
        //   src: require("@/../src/assets/marriott_marina.jpg"),
        // },
        // {
        //   src: require("@/../src/assets/seasters_3.jpg"),
        //   height: '50%',
        //   width: '50%'
        // },
        // {
        //   src: require("@/../src/assets/tails_up.jpg"),
        //   height: '50%',
        //   width: '50%'
        // },
        // {
        //   src: require("@/../src/assets/treasure_hunt.jpg"),
        //   height: '50%',
        //   width: '50%'
        // },
        // {
        //   src: require("@/../src/assets/true_love.jpg"),
        //   height: '50%',
        //   width: '50%'
        // },
        // {
        //   src: require("@/../src/assets/waters_edge.jpg"),
        //   height: '50%',
        //   width: '50%'
        // },
      ],
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