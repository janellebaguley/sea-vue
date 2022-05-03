<template>
  <v-card class="mx-3 my-4">
    <v-row class="mx-3">
      <v-col>
        <h1 class="primary--text">MER-chandise</h1>
      </v-col>
      <v-col>
        <v-card-actions style="float: right">
          <v-btn color="primary" @click="shoppingCart(item)"
            >Cart ({{ item.totalItems }})</v-btn
          >
        </v-card-actions>
      </v-col>
    </v-row>
    <v-card class="ma-4">
      <v-row class="mx-3">
        <v-col>
          <h2 class="primary--text">Goddess Skirts Starting at $250</h2>
        </v-col>
      </v-row>
      <v-row class="mx-3">
        <v-col cols="3">
          <v-container>
            <v-row class="mx-3">
              <v-col>
                <img alt="Skirt" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-row class="mx-1">
            <v-col cols="4">
              <v-text-field
                label="Qty"
                v-model="item.skirtLong"
                type="number"
                outlined
                dense
                min="1"
              />

              <v-btn class="secondary" @click="addToCart(item)" dense
                >Add to Cart</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels color="white" dense flat>
            <v-expansion-panel>
              <v-expansion-panel-header
                color="#EB5998"
                class="white--text ma-0 pa-0"
                dense
              >
                <template v-slot:default="{ open }">
                  <v-row class="mx-1 mt-1">
                    <v-col>
                      <h3 class="white--text">Description</h3>
                    </v-col>
                    <v-col>
                      <v-card-actions style="float: right">
                        <span
                          v-if="!open"
                          key="0"
                          class="overline text--disabled"
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
                <v-row class="mx-1 mt-2">
                  <v-col>
                    <p>
                      These gorgeous custom mermaid skirts will make you look
                      and feel like a goddess! Each skirt is lovingly cut and
                      sewn to your measurements. The skirts are twirl worthy,
                      and perfect for a special occasion or just wearing for a
                      day outing. They are comfortable and cool and made in your
                      choice of iridescent colors (limited to what is in stock).
                      All our skirts are made with high quality spandex They
                      have a gorgeous trumpet style skirt that is flattering to
                      any shape and have a matching, elastic free waistband for
                      comfort. We’ve designed our goddess skirts to be sturdy
                      and durable and to withstand playing at the beach or the
                      park. With proper care (our skirts need to be rinsed after
                      a visit to a beach or pool to maintain their shine) our
                      skirts will bring you joy for many years. We think they
                      are comfortable enough to wear as pajamas! The bottom hem
                      is more than 270” around, skirts can vary in length. Our
                      model is 5’8” and the skirt is 43” in length but can be
                      shortened upon request. All our skirts come with a
                      coordinating mask or pouch.
                      <br /><br />
                      Want something in a different fabric or multiple colors or
                      need a custom size? We can do that too, please contact us
                      for custom inquiries!
                      <br /><br />
                      Upon check out please give us your waist measurement,
                      length from natural waist to floor, mask/pouch preference,
                      and color preference. We will contact you with the
                      available spandex colors that match your preferences
                      before starting your creation.
                      <br /><br />
                      Please note that these are custom crafted and ordered.
                      Production time can take up to 4 weeks (but we always try
                      to get them done quicker!).
                    </p>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="ma-4">
      <v-row class="mx-3">
        <v-col>
          <h2 class="primary--text">Mini-Goddess Skirt Starting at $150</h2>
        </v-col>
      </v-row>
      <v-row class="mx-3">
        <v-col cols="3">
          <v-container>
            <v-row class="mx-3">
              <v-col>
                <img alt="Skirt" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-row class="mx-1">
            <v-col cols="4">
              <v-text-field
                label="Qty"
                v-model="item.skirtShort"
                type="number"
                outlined
                dense
                min="1"
              />
              <v-btn class="secondary" @click="addToCart(item)" dense
                >Add to Cart</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels flat dense>
            <v-expansion-panel>
              <v-expansion-panel-header
                color="#EB5998"
                class="white--text ma-0 pa-0"
                dense
              >
                <template v-slot:default="{ open }">
                  <v-row class="mx-1 mt-1">
                    <v-col>
                      <h3 class="white--text">Description</h3>
                    </v-col>
                    <v-col>
                      <v-card-actions style="float: right">
                        <span
                          v-if="!open"
                          key="0"
                          class="overline text--disabled"
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
                <v-row class="mx-1 mt-2">
                  <v-col>
                    <p>
                      Our Mini-Goddess skirts are knee length circle skirts that
                      are perfect for twirling! They are also wonderfully
                      whimsical and comfortable for wearing to events, out on
                      the town, or to a theme park. We recommend pairing them
                      with a crinoline for a full look, but they are adorable
                      without one as well! They can be made in either spandex or
                      cotton in your choice of one color/print (color
                      availability is based on what our fabric partners have in
                      stock). You can choose a coordinating spandex waistband
                      (spandex skirts only), a sparkling elastic waistband, or a
                      plain elastic waistband. Length from waistband to hem is
                      26” (model is 5’8” for reference). Skirts can be
                      shortened. For longer skirts, additional colors/prints,
                      custom prints, or sizes over a US 28 please contact us for
                      more information before ordering as they may incur
                      additional costs.
                      <br /><br />
                      Upon check out please give us your waist measurement,
                      length from natural waist to floor, mask/pouch preference,
                      and color preference. We will contact you with the
                      available spandex colors that match your preferences
                      before starting your creation.
                      <br /><br />
                      Please note that these are custom crafted and ordered.
                      Production time can take up to 3 weeks (but we always try
                      to get them done quicker!).
                    </p>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="ma-4">
      <v-row class="mx-3">
        <v-col>
          <h2 class="primary--text">
            Custom Kraken Resin Necklaces Starting at $75
          </h2>
        </v-col>
      </v-row>
      <v-row class="mx-3">
        <v-col cols="3">
          <v-container>
            <v-row class="mx-3">
              <v-col>
                <img alt="Kraken" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-row class="mx-1">
            <v-col cols="4">
              <v-text-field
                label="Qty"
                v-model="item.kraken"
                type="number"
                outlined
                dense
                min="1"
              />
              <v-btn class="secondary" @click="addToCart(item)" dense
                >Add to Cart</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels flat dense>
            <v-expansion-panel>
              <v-expansion-panel-header
                color="#EB5998"
                class="white--text ma-0 pa-0"
                dense
              >
                <template v-slot:default="{ open }">
                  <v-row class="mx-1 mt-1">
                    <v-col>
                      <h3 class="white--text">Description</h3>
                    </v-col>
                    <v-col>
                      <v-card-actions style="float: right">
                        <span
                          v-if="!open"
                          key="0"
                          class="overline text--disabled"
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
                <v-row class="mx-1 mt-2">
                  <v-col>
                    <p>
                      Handmade by Calypso herself these necklaces are imbued
                      with mermaid magic and made with real crystals, shells,
                      and pearls. Each kraken is a unique resin pour in your
                      choice of colors and can be made with color shifting
                      pigments or matte pigments. Glitter added at no extra
                      charge. To be ocean friendly all glitter is completely
                      encapsulated inside the resin. We only use hypoallergenic
                      silver plated findings. We will match crystals and beads
                      to your specified colors. The kraken will also be adorned
                      with a few small crystals and beads to match your
                      necklace.
                      <br /><br />
                      Please note that some crystals may be unavailable or incur
                      an additional fee if they are extremely rare or difficult
                      to find. If you have a specific crystal, shell, or bead
                      that must be included in the design please reach out to us
                      before ordering to ensure we have it available or can
                      obtain it for you and that it will work with your design!
                      Some crystals are toxic in water or are water soluble or
                      may incur an additional fee. Each kraken necklace also
                      comes with a surprise coordinating hair comb or clip!
                      <br /><br />
                      Upon check out please specify preferred colors, crystals,
                      and glitter. Please note that some crystals may be
                      unavailable or rare, but we will do our best to match them
                      as best we can! If you have images of your tail, costume,
                      etc. please email them to us so we can use them for
                      reference and color match.
                      <br /><br />
                      Please note that these are custom crafted and ordered.
                      Production time can take up to 2 weeks (but we always try
                      to get them done quicker!).
                    </p>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="ma-4">
      <v-row class="mx-3">
        <v-col>
          <h2 class="primary--text">Sea Goddess Purses (Standard Size) $75</h2>
        </v-col>
      </v-row>
      <v-row class="mx-3">
        <v-col cols="3">
          <v-container>
            <v-row class="mx-3">
              <v-col>
                <img alt="Standard Purse" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-row class="mx-1">
            <v-col cols="4">
              <v-text-field
                label="Qty"
                v-model="item.standardPurse"
                type="number"
                outlined
                dense
                min="1"
              />
              <v-btn class="secondary" @click="addToCart(item)" dense
                >Add to Cart</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels flat dense>
            <v-expansion-panel>
              <v-expansion-panel-header
                color="#EB5998"
                class="white--text ma-0 pa-0"
                dense
              >
                <template v-slot:default="{ open }">
                  <v-row class="mx-1 mt-1">
                    <v-col>
                      <h3 class="white--text">Description</h3>
                    </v-col>
                    <v-col>
                      <v-card-actions style="float: right">
                        <span
                          v-if="!open"
                          key="0"
                          class="overline text--disabled"
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
                <v-row class="mx-1 mt-2">
                  <v-col>
                    <p>
                      These lovely purses are made from duck cloth, which allows
                      them to also be washable. The lining is also washable, I
                      would recommend laying them flat to dry, however. Each
                      purse is hand made by Sea Goddess Sapphire, with love.
                      They are cross body at 52 in. in strap length. Purse
                      fabric patterns/colors are limited and are made to order.
                    </p>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="ma-4">
      <v-row class="mx-3">
        <v-col>
          <h2 class="primary--text">Sea Goddess Small Purse $50</h2>
        </v-col>
      </v-row>
      <v-row class="mx-3">
        <v-col cols="3">
          <v-container>
            <v-row class="mx-3">
              <v-col>
                <img alt="Small Purse" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-row class="mx-1">
            <v-col cols="4">
              <v-text-field
                label="Qty"
                v-model="item.smallPurse"
                type="number"
                outlined
                dense
                min="1"
              />
              <v-btn class="secondary" @click="addToCart(item)" dense
                >Add to Cart</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels flat dense>
            <v-expansion-panel>
              <v-expansion-panel-header
                color="#EB5998"
                class="white--text ma-0 pa-0"
                dense
              >
                <template v-slot:default="{ open }">
                  <v-row class="mx-1 mt-1">
                    <v-col>
                      <h3 class="white--text">Description</h3>
                    </v-col>
                    <v-col>
                      <v-card-actions style="float: right">
                        <span
                          v-if="!open"
                          key="0"
                          class="overline text--disabled"
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
                <v-row class="mx-1 mt-2">
                  <v-col>
                    <p>
                      These lovely purses are made from duck cloth, which allows
                      them to also be washable. The lining is also washable, I
                      would recommend laying them flat to dry, however. Each
                      purse is hand made by Sea Goddess Sapphire, with love.
                      They are cross body at 52 in. in strap length. Purse
                      fabric patterns/colors are limited and are made to order.
                    </p>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="ma-4">
      <v-row class="mx-3">
        <v-col>
          <h2 class="primary--text">Sea Goddess Change Purse $15</h2>
        </v-col>
      </v-row>
      <v-row class="mx-3">
        <v-col cols="3">
          <v-container>
            <v-row class="mx-3">
              <v-col>
                <img alt="Change Purse" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-row class="mx-1">
            <v-col cols="4">
              <v-text-field
                label="Qty"
                v-model="item.changePurse"
                type="number"
                outlined
                dense
                min="1"
              />
              <v-btn class="secondary" @click="addToCart(item)" dense
                >Add to Cart</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels flat dense>
            <v-expansion-panel>
              <v-expansion-panel-header
                color="#EB5998"
                class="white--text ma-0 pa-0"
                dense
              >
                <template v-slot:default="{ open }">
                  <v-row class="mx-1 mt-1">
                    <v-col>
                      <h3 class="white--text">Description</h3>
                    </v-col>
                    <v-col>
                      <v-card-actions style="float: right">
                        <span
                          v-if="!open"
                          key="0"
                          class="overline text--disabled"
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
                <v-row class="mx-1 mt-2">
                  <v-col>
                    <p>
                      These lovely change purses are made from duck cloth, which
                      allows them to also be washable. The lining is also
                      washable, I would recommend laying them flat to dry,
                      however. Each purse is hand made by Sea Goddess Sapphire,
                      with love. They fit great inside your current purse or in
                      one of our handmade Standard and Small purses. Purse
                      fabric patterns/colors are limited and are made to order.
                    </p>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-card>
    <v-row class="mx-3">
      <v-col>
        <b
          >**Shipping within the United States is included with the cost of all
          our items.</b
        >
      </v-col>
    </v-row>
    <v-row class="mx-3">
      <v-col>
        <b
          >**For international orders, please contact us before purchase as
          shipping/production time and cost will vary.</b
        >
      </v-col>
    </v-row>
    <v-row class="mx-3">
      <v-col>
        <p>
          We also make Mermaid tiaras, tops, and tails upon request. Please
          contact us if you would like to inquire about ordering something
          unique for your event or special day!
        </p>
      </v-col>
    </v-row>
    <!-- Cart popup-->
    <v-dialog v-model="dialogCreate" width="800">
      <v-card>
        <v-row class="mx-1 mt-1">
          <v-col>
            <h2 class="primary--text">Cart</h2>
          </v-col>
        </v-row>
        <form @submit.prevent="">
          <v-layout>
            <v-flex>
              <v-card elevation="0">
                <v-row class="mx-1 mt-4">
                  <v-col>
                    <v-data-table
                      :headers="headers"
                      :items="rows"
                      hide-default-footer
                    >
                      <template v-slot:[`item.quantity`]="{ item }">
                        <v-card-actions>
                          <v-col col="1">
                            <v-text-field
                              label="Qty"
                              v-model="item.skirtLong"
                              type="number"
                              outlined
                              dense
                              min="1"
                            ></v-text-field>
                          </v-col>
                        </v-card-actions>
                      </template>
                      <template v-slot:[`item.actions`]="{ item }">
                        <v-card-actions>
                          <v-btn
                            text
                            color="#EB5998"
                            dense
                            slot="activator"
                            @click="openDelete(item)"
                            small
                            >Delete</v-btn
                          >
                        </v-card-actions>
                      </template>
                    </v-data-table>
                  </v-col>
                </v-row>
              </v-card>
              <v-row class="mx-3 my-3">
                <v-col>
                  <v-btn color="primary" class="mr-5" dense>Submit</v-btn>

                  <v-btn
                    color="#EB5998"
                    class="white--text"
                    dense
                    @click="dialogCreate = false"
                    >Close</v-btn
                  >
                </v-col>
                <v-col cols="6"></v-col>
              </v-row>
            </v-flex>
          </v-layout>
        </form>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default {
  name: "ShopMer",
  components: {},
  props: ["items"],
  data() {
    return {
      pageName: "Shop",
      search: "",
      loading: true,
      dialogCreate: false,
      // form fields
      form: {
        id: 0,
      },
      item: {
        totalItems: 0,
        skirtLong: 1,
        skirtShort: 1,
        kraken: 1,
        standardPurse: 1,
        smallPurse: 1,
        changePurse: 1,
      },
      menu: false,
      rows: [{ name: "" }],
      headers: [
        {
          text: "Item",
          value: "item",
          sortable: false,
          active: true,
          width: "50%",
        },
        {
          text: "Qty",
          value: "quantity",
          sortable: false,
          active: true,
        },
        {
          text: "Price",
          value: "price",
          sortable: false,
          active: true,
        },
        {
          text: "",
          value: "actions",
          sortable: false,
          active: true,
        },
      ],
    };
  },
  computed: {
    Total() {
      let total = 0;
      this.items.forEach((item) => {
        total += item.price * item.qty;
      });
      return total;
    },
    totalItems() {
			return this.cartItems.reduce((accumulator , item) => {
				return accumulator  + item.qty;
			}, 0);
		}
  },
  watch: {},
  methods: {
    shoppingCart() {
      this.dialogCreate = true;
    },
    // Add Items to cart
    addToCart(itemToAdd) {
      // let found = false;

      // Add the item or increase qty
      let itemInCart = this.cartItems.filter(
        (item) => item.id === itemToAdd.id
      );
      let isItemInCart = itemInCart.length > 0;

      if (isItemInCart === false) {
        this.cartItems.push(Vue.util.extend({}, itemToAdd));
      } else {
        itemInCart[0].qty += itemToAdd.qty;
      }

      itemToAdd.qty = 1;
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
.v-expansion-panel-header {
  color: white;
}
.v-btn {
  text-transform: none;
}
</style>