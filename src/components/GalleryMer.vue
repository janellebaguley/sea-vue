<template>
  <v-card class="mx-3 my-4">
    <v-row>
    <v-col cols='3'>
      <v-container>
        <v-card elevation='0'>
          <v-row>
            <v-col>
              <v-img :src="require('@/../src/assets/happy_loni.jpg')"/>
            </v-col>
            <v-col>
              <v-img :src="require('@/../src/assets/la_jolla.jpg')"/>
            </v-col>
            <v-col>
              <v-img :src="require('@/../src/assets/seasters.jpg')"/>
            </v-col>
            <v-col>
              <v-img :src="require('@/../src/assets/seasters_2.jpg')"/>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-col>
    <v-col cols='3'>
      <v-container>
        <v-card  elevation='0'>
          <v-row>
            <v-col>
              <v-img :src="require('@/../src/assets/sleepy_loni.jpg')"/>
            </v-col>
            <v-col>
              <v-img :src="require('@/../src/assets/tide_pools.jpg')"/>
            </v-col>
            <v-col>
              <v-img :src="require('@/../src/assets/bay_view.jpg')"/>
            </v-col>
            <v-col>
              <v-img :src="require('@/../src/assets/cannibal_2.jpg')"/>
            </v-col>
            <v-col>
              <v-img :src="require('@/../src/assets/waters_edge.jpg')"/>
            </v-col>
          </v-row> 
        </v-card>
      </v-container>
    </v-col>
    <v-col cols='3'>
      <v-container>
        <v-card  elevation='0'>
          <v-row>
            <v-col>
              <v-img contain :src="require('@/../src/assets/family.jpg')"/>
            </v-col>
            <v-col>
              <v-img :src="require('@/../src/assets/cannibal.jpg')"/>
            </v-col>
            <v-col>
              <v-img :src="require('@/../src/assets/jealous_much.jpg')"/>
            </v-col>
            <v-col>
              <v-img :src="require('@/../src/assets/cannibal_3.jpg')"/>
            </v-col>
            <v-col>
              <v-img :src="require('@/../src/assets/true_love.jpg')"/>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-col>
    <v-col cols='3'>
      <v-container>
        <v-card  elevation='0'>
          <v-row>
            <v-col>
               <v-img :src="require('@/../src/assets/marriott_marina.jpg')"/>
            </v-col>
            <v-col>
               <v-img :src="require('@/../src/assets/seasters_3.jpg')"/>
            </v-col>
            <v-col>
               <v-img :src="require('@/../src/assets/tails_up.jpg')"/>
            </v-col>
            <v-col>
               <v-img :src="require('@/../src/assets/treasure_hunt.jpg')"/>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
  </v-card>
</template>

<script>
export default {
  name: "GalleryMer",
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