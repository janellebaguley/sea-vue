<template>
  <v-card class="mx-3 my-4">
    <v-row class='mx-1'>
      <v-col>
        <h1 class='primary--text'>FAQ</h1>
      </v-col>
    </v-row>
    <v-row class='mx-3'>
        <v-col>
            <p>Do you offer services for non profit organizations? Yes we do! If you are a non-profit organization please reach out to us for further information. We love giving back to our community! <br/><br/>
            How are you an “inclusive” company? The Sea Goddess Grotto is run by an LGBTQ+ couple. We are both women of color, body positive, and Calypso is disabled (you can sometimes catch a few pictures of her service dog on Instagram!). We want everyone to feel comfortable and represented with our organization and do everything possible to make sure that goal is achieved.<br/><br/>
            What is a professional mermaid and how do I become one? Professional mermaids are licensed businesses that operate like any other party or event company. We specialize in creating unique magical experiences for our customers. It’s a real full time job! If you are interested in becoming a professional yourself, please become one of our Patrons. We offer lots of tutorials and Q&A sessions to Patrons to help them on their journeys.
            <br/><br/>
            Can you really swim in that tail? Yes! Calypso is fully trained in the use of her tail (and other costuming) with over a decade of professional mermaid experience. She is able to glide through the water just like a fish and can free-dive up to 15 feet.
            <br/><br/>Where do I get a mermaid tail? We offer custom tails via <v-btn color='secondary' class='ma-0 pa-0' @click='contact' text dense>Contact</v-btn> only, or there are lots of online resources for purchasing a tail.
             <br/><br/>
             You mentioned that you're disabled. What's your disability and does it affect your ability to perform? Calypso/Lei Loni is a Type 1 Diabetic with Degenerative Disc Disease and some neurological issues we're looking into. However, her disability does not affect her ability to perform and provide a wonderful experience for you and your guests. Since most events are fairly short in nature (rarely being longer than a half day) I can usually tend to my medical needs and after, so it won't interfere with your mermaid magic. There is a rare chance that she may have an emergency, but in over a decade of performing this has not happened.
             <br/><br/>
             Does your service dog come with you to events? Typically, no. For private events we bring a 'service human' who is trained in meeting medical needs, should one arise. If you are interested in having the service dog attend for visibility purposes(especially if you have a disabled individual at your event and would like for them to feel more included) we are happy to do so based on the event type and location.
             <br/><br/>
             Wait! You have a service dog? If you've seen us at some public appearances or around town, you'll notice that Calypso/Lei Loni has a service dog to assist her with managing her medical conditions. His name is Baymax and he's a wonderful help! We are open to questions and conversations, but please remember he is a medical device and although he's adorable, do not interact with him or distract him.
            </p>
        </v-col>
    </v-row>
  </v-card>
</template>
<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default {
  name: "FrequentlyAsked",
  components: {},
  data() {
    return {
      pageName: "FAQ",
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
  methods: {
    contact(){
      this.$router.push({
        name: "ContactEmail",
      });
    },
  },
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