<template>
  <v-card class="mx-3 my-4">
    <v-row class="mx-1">
      <v-col>
        <h1 class="primary--text">Performances and Events</h1>
      </v-col>
    </v-row>
    <v-row class="mx-3">
      <v-col>
        <h3>
          We love creating unique magical events custom tailored to your wishes!
          Our performance packages can be custom tailored to your needs by
          adding our ala carte event extras!
        </h3>
      </v-col>
    </v-row>
    <v-row class="mx-2">
      <v-col>
        <h2 class="primary--text">Parties and Events</h2>
      </v-col>
    </v-row>
    <v-row class="mx-2">
      <v-col>
        <h3>Starting at $350</h3>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col>
        <p>
          Calypso will delight guests of all ages with her performance and your
          choice of activities. This package includes a 2 hour mermaid
          appearance either swimming, on dry land, or at a beach or park of your
          choice*. Appearance includes a handmade mermaid gift for the birthday
          person or guest of honor, and mermaid themed trinkets for up to 12
          guests. Mermaid appearances also include a costumed mermaid assistant
          or “mertender” to both entertain and assist Calypso. In a public
          setting the mertender will also ensure that curious strangers do not
          interfere with your event. When booking please let us know your
          preferred activities and performances for your event.
        </p>
      </v-col>
    </v-row>
    <v-row class="mx-1">
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header
              color="#EB5998"
              class="white--text ma-0 pa-0"
              dense
            >
              <template v-slot:default="{ open }">
                <v-row class="mx-1 mt-1">
                  <v-col>
                    <h3 class="white--text">
                      Party and Event Activities Included
                    </h3>
                  </v-col>
                  <v-col>
                    <v-card-actions style="float: right">
                      <span v-if="!open" key="0" class="overline text--disabled"
                        ><h4 class="white--text">Show Details</h4></span
                      >
                      <span v-else key="1" class="overline text--disabled"
                        ><h4 class="white--text">Hide Details</h4></span
                      >
                    </v-card-actions>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row class="mx-1 my-2">
                <v-col>
                  <h3>
                    (Please note that not all activities can be done in 2 hours)
                  </h3>
                </v-col>
              </v-row>
              <v-row class="mx-1 mt-2">
                <v-col>
                  <ol>
                    <li>
                      Mermaid Meet and Greet: Calypso will talk with your guests
                      about mermaid life and answer questions.
                    </li>
                    <li>Photography sessions (photographer not included)</li>
                    <li>
                      Water activities and games such as Mermaid Polo or
                      Treasure Diving
                    </li>
                    <li>
                      Swimming Performances: Calypso will delight your guests
                      with tail flips, underwater tricks and dance, and more!
                    </li>
                    <li>
                      Dry land games such as Mermaid Says, Mermaid Scavenger
                      Hunt, Octopus Octopus Squid!, Mermaid May I?, and
                      Shellphone
                    </li>
                    <li>Mermaid Story Time with Puppets</li>
                    <li>
                      Ocean Conservation Education: Calypso will prepare a brief
                      lesson in how to protect the oceans and what you can do to
                      help!
                    </li>
                    <li>
                      Inclusive Education: Calypso will teach your guests about
                      the importance of inclusivity and how we’re all different,
                      but still magical!
                    </li>
                    <li>Sea Shanty Sing Along</li>
                    <li>
                      Mermaid Princess Coronation for Guest of Honor: The
                      handmade gift Calypso brings will be a mermaid crown if
                      this activity is chosen.
                    </li>
                    <li>
                      Autographs (Prints of Calypso can be added for a nominal
                      additional fee, or she can sign invitations, cards, etc.)
                    </li>
                    <li>
                      Cake/Happy Birthday Sing Along/Present Time: Calypso will
                      initiate that it’s cake/present time and join in on the
                      fun with singing! (Cake/gifts not included.)
                    </li>
                  </ol>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row class="mx-2">
      <v-col>
        <h2 class="primary--text">Private Mermaid Appearances</h2>
      </v-col>
    </v-row>
    <v-row class="mx-2">
      <v-col>
        <h3>Starting at $200</h3>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col>
        <p>
          Calypso will surprise you and your guests with a coordinated mermaid
          meet and greet at a location of your choosing! We will coordinate a
          location and arrive early to surprise your guests with a live mermaid
          anywhere you choose*! The mermaid will also provide a special handmade
          gift for your birthday person or guest of honor, and include small
          trinkets (seashells or seaglass) for the rest of the guests. This is a
          great opportunity to surprise your family or loved ones with a beach
          experience they will never forget! Private appearances also include a
          costumed mertender. Please note that these events are done in public
          spaces or at the beach. So that our team knows your group, please let
          us know beforehand what you will be wearing so that we can
          differentiate you from curious strangers so that we can ensure your
          visit is unique and magical to you. During your meet and greet
          session, regardless of location, our mertender will ensure that other
          curious individuals do not interfere with your booking. Please note
          that meet and greets do not include activities or performances.
        </p>
      </v-col>
    </v-row>
    <v-row class="mx-2">
      <v-col>
        <h2 class="primary--text">Mystical Mermaid Adult Events and Parties</h2>
      </v-col>
    </v-row>
    <v-row class="mx-2">
      <v-col>
        <h3>Starting at $400</h3>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col>
        <p>
          Let Calypso bring out her salty siren for a more grown-up experience!
          Includes a 2 hour event for up to 12 adults (18+) at a location of
          your choosing*. This party is perfect for those wanting a more
          adult-themed party. Calypso will sing drinking songs, answer questions
          about mermaid life and being a professional mermaid, and more! Calypso
          will provide a unique piece of handmade jewelry for your guest of
          honor as well as your choice of “pearl” necklaces, flower leis, or
          shell necklaces, and shells or sea glass for your guests. Great for
          bachelorette parties, adult birthday parties, weddings, showers, and
          more!
        </p>
      </v-col>
    </v-row>
    <v-row class="mx-1">
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header
              color="#EB5998"
              class="white--text ma-0 pa-0"
              dense
            >
              <template v-slot:default="{ open }">
                <v-row class="mx-1 mt-1">
                  <v-col>
                    <h3 class="white--text">Included Activities</h3>
                  </v-col>
                  <v-col>
                    <v-card-actions style="float: right">
                      <span v-if="!open" key="0" class="overline text--disabled"
                        ><h4 class="white--text">Show Details</h4></span
                      >
                      <span v-else key="1" class="overline text--disabled"
                        ><h4 class="white--text">Hide Details</h4></span
                      >
                    </v-card-actions>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row class="mx-1 my-2">
                <v-col>
                  <ol>
                    <li>
                      Mermaid Meet and Greet: Calypso will talk with your guests
                      about mermaid life, being a professional mermaid, and
                      answer questions.
                    </li>
                    <li>Photography Sessions (photographer not included)</li>
                    <li>Swimming Performances</li>
                    <li>
                      Diving for Treasures: Calypso will sink your included
                      party gifts to the pool bottom and retrieve them for your
                      guests!
                    </li>
                    <li>
                      Sea Shanty Sing Along: Calypso will ensnare your guests
                      with singing and drinking songs.
                    </li>
                    <li>
                      Drinking Games: Calypso will initiate mermaid themed
                      drinking games. (Please note Calypso does not drink at
                      events, but is happy to initiate and play along! Drinks
                      not included.)
                    </li>
                    <li>
                      Grown Up Mermaid Stories: Calypso will enchant your guests
                      with tales of the deep. She will tell mermaid stories and
                      folklore with a siren twist. She will tell tales of sea
                      witches, drowned sailors, and the monsters of the deep.
                    </li>
                    <li>
                      Ocean Conservation or Inclusivity and Diversity Education:
                      A more grown up approach and discussion about inclusivity
                      and diversity or ocean conservation. Calypso will provide
                      a brief presentation or be available for Q&A’s.
                    </li>
                  </ol>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col>
        <b
          >Parties and events can be customized upon request! Have an idea in
          mind or want something completely unique, we are happy to help you
          create something magical! Please contact us with any event or
          appearance inquiries and we would be happy to make your dreams come
          true.</b
        >
      </v-col>
    </v-row>
    <v-row class="mx-1">
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header
              color="#EB5998"
              class="white--text ma-0 pa-0"
              dense
            >
              <template v-slot:default="{ open }">
                <v-row class="mx-1 mt-1">
                  <v-col>
                    <h3 class="white--text">
                      Ala Carte Add Ons to Any Booking
                    </h3>
                  </v-col>
                  <v-col>
                    <v-card-actions style="float: right">
                      <span v-if="!open" key="0" class="overline text--disabled"
                        ><h4 class="white--text">Show Details</h4></span
                      >
                      <span v-else key="1" class="overline text--disabled"
                        ><h4 class="white--text">Hide Details</h4></span
                      >
                    </v-card-actions>
                  </v-col>
                </v-row>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row class="mx-1 my-2">
                <v-col>
                  <ol>
                    <li>Additional appearance hours: $80 per hour</li>
                    <li>
                      Additional mermaids: $50 per hour (both mermaids must be
                      booked for the same duration of time)
                    </li>
                    <li>
                      Additional shell or sea glass trinkets for guests: $10 per
                      dozen
                    </li>
                    <li>
                      Additional Trinkets for grown-up guests (“pearl” necklaces
                      or leis and shells): $25 per dozen
                    </li>
                    <li>
                      10 ft by 6 ft photobooth backdrop rental (please allow an
                      additional 90 minutes for set up and take down before and
                      after the event): $200
                    </li>
                    <li>
                      Handmade mermaid gifts (hair clips, pendants, or tinsel
                      crowns): $5 each
                    </li>
                    <li>Handcrafted resin jewelry or hair clips: $30 each</li>
                    <li>
                      Mermaid games with prizes (Your Choice of fishing for
                      prizes, diving games and toys, or adding prizes to any of
                      the included games or activities): $30 per 12 guests
                    </li>
                    <li>
                      Mermaid party favors for children (includes a mix of
                      seashells, mermaid treasure, candy, mermaid toys,
                      stickers, play makeup, etc. and can be customized): $75+
                      per dozen
                    </li>
                    <li>
                      Mermaid party favors for adults (includes a mix of candy,
                      home goods, accessories, makeup, trinkets, etc. and can be
                      customized): $150+ per dozen.
                    </li>
                    <li>
                      Mermaid crafts for adults: Your choice of shell tiaras
                      $35, crystal tiaras $50, necklaces: $30, earrings $10.
                      (Please note cost is per person and craft time takes up at
                      least an hour.)
                    </li>
                    <li>
                      Mermaid crafts for kids: your choice of necklaces $5,
                      coloring or painting activities $5, hanging paper
                      jellyfish $5, foam mermaid tails or tiaras $6, colored
                      sand bottles $6, sensory ocean bottles $10. (Please note
                      cost is per person and craft time takes at least an hour.)
                    </li>
                    <li>
                      Mermaid glitter face paint for up to 12 guests: $50
                      (Glitter is biodegradable and skin safe!)
                    </li>
                    <li>Photo Prints or Stickers of Calypso: $6 per dozen</li>
                    <li>
                      Mystic Mermaid Oracle Readings or Tarot: $60-$120+ (based
                      on time and number of guests)
                    </li>
                    <li>Mermaid Costumes: Price Varies</li>
                    <ul>
                      <li>
                        We are trained artists and seamstresses and can create a
                        custom unique mermaid outfit for you or your guest(s) of
                        honor for an additional fee. We make mermaid tops,
                        necklaces, hair pieces, tiaras, swimmable mermaid tails,
                        shimmering skirts, among other things. Prices are based
                        on the number of requested custom pieces, type of
                        pieces, etc. Custom pieces must be paid for in full
                        before production begins and need to be ordered at least
                        3 weeks in advance as they take time to produce. Please
                        check our Instagram or Gallery page and contact us with
                        inquiries and for a price quote!
                      </li>
                    </ul>
                  </ol>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col>
        <p>
          *Any add on items will be done DURING the 2 hour event time in place
          of stories, swimming, or performances unless additional time is added
          to the event.
        </p>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col>
        <p>
          *Please note for events outside of San Diego County additional travel
          fees may apply.
        </p>
      </v-col>
    </v-row>
    <v-row class="mx-2">
      <v-col>
        <h3 class="primary--text">For all appearances and events</h3>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col>
        <p>
          50% non-refundable deposit is required to book your appearance or
          event. The remainder of the balance is due 24 hours prior to the
          performance and can be paid through Venmo. Any cancellations must be
          made at least 24 hours in advance in order to be able to apply your
          balance to a future event.
        </p>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col>
        <p>
          Please note that the mermaid and mertender will need approximately 20
          minutes (included in your booking) for set up/take down and mermaid
          transformations either AWAY from your guests or before and after your
          event to maintain the magic of the performance.
        </p>
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col>
        <b
          >The mermaid and mertender are not responsible for the care of
          children, especially while swimming, and a parent or guardian must be
          present at all times. When swimming or at the beach parents/guardians
          must be able to assist children as needed.</b
        >
      </v-col>
    </v-row>
    <v-row class="mx-4">
      <v-col>
        <p>
          All bookings will require a signed policies and procedures form and a
          liability release.
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "EventsPricing",
  components: {},
  data() {
    return {
      pageName: "Events",
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