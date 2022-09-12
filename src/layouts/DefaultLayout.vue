<template>
 <v-app>
    <v-card style='height:100px;' color='#8627E0'>
      <v-row class='mx-1'>
        <v-col cols=''>
          <v-container>
              <img
            src="@/../src/assets/oshun.jpeg"
            height='80px'
            alt="Logo"
            style="cursor: pointer"
          />
          </v-container>
        </v-col>
        <v-col class='mx-1 mt-16' cols='3'>
          <h2 style="color: #ffffff">The Sea Goddess Grotto</h2>
        </v-col>
        <v-col class='ml-2 mt-16'>
          <v-btn class='ma-0 pa-0' color='white' @click='home' text dense> Home</v-btn>
        </v-col>
        <v-col class='mt-16'>
          <v-btn class='ma-0 pa-0' color='white' @click='merchandise' text dense> Mer-chandise</v-btn>
        </v-col>
        <v-col class='mt-16'>
          <v-btn class='ma-0 pa-0' color='white' @click='performance' text dense> Performances and Events</v-btn>
        </v-col>
        <v-col class='mt-16'>
          <v-btn class='ma-0 pa-0' color='white' @click='meet' text dense> Meet Mer</v-btn>
        </v-col>
        <v-col class='mt-16'>
          <v-btn class='ma-0 pa-0' color='white' @click='psychic' text dense> Psychic</v-btn>
        </v-col>
        <v-col class='mt-16'>
          <v-btn class='ma-0 pa-0' color='white' @click='gallery' text dense>Gallery</v-btn>
        </v-col>
        <v-col class='mt-16'>
          <v-btn class='ma-0 pa-0' color='white' @click='contact' text dense>Contact Us</v-btn>
        </v-col>
        <v-col class='mt-16'>
          <v-btn class='ma-0 pa-0' color='white' @click='faq' text dense>FAQ</v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-main >
      <v-container id="con">
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <keep-alive include="">
                <router-view :key="$route.fullPath"></router-view>
              </keep-alive>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default {
  data() {
    return {
    }
  },
  
  computed: {
  },
  watch: {
  },
  methods: {
    
    home(){
      this.$router.push({
        name: "HomeBase",
      });
    },
     merchandise(){
      this.$router.push({
        name: "ShopMer",
      });
    },
     performance(){
      this.$router.push({
        name: "EventsPricing",
      });
    },
    meet(){
      this.$router.push({
        name: "MeetMer",
      });
    },
   psychic(){
      this.$router.push({
        name: "PsychicMer",
      });
    },
     gallery(){
      this.$router.push({
        name: "GalleryMer",
      });
    },
       contact(){
      this.$router.push({
        name: "ContactEmail",
      });
    },
    faq(){
      this.$router.push({
        name: "FrequentlyAsked",
      });
    },
  }
};
</script>
<style>
.v-dialog {
  background-color: #ffffff !important;
}

.v-dialog > .v-card > .v-card__text {
  padding: 0 20px 1px 24px !important;
}

.v-input.dg-page-size {
  font-size: 14px !important;
  font-family: "Annabelle";
}

.v-main__wrap {
  width: 100%;
  background-color: #4889e0 !important;
}
.v-main {
  width: 100%;
  background-color: #4889e0 !important;
}

.v-list-item__title {
  align-self: center;
  font-size: 1rem !important;
  font-family: "Annabelle";
  margin-top: 2px !important;
}
h1 {
  font-family: "Annabelle";
}

h2 {
  font-family: "Annabelle";
}

h3 {
  font-family: "Annabelle";
}

.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  color: white !important;
  font-size: 0.85em;
  font-family: "Annabelle";
}

html {
  font-size: 14px !important;
  font-family: "Annabelle";
  text-rendering: opti mizeLegibility;
}

h1.dashtitle {
  color: #8627e0 !important;
  font-size: 1.75em;
  font-family: "Annabelle";
}

.v-data-table-header tr {
  background-color: #4889e0 !important;
  color: #8627e0 !important;
}

.theme--light.v-data-table .v-data-table-header th.sortable,
.theme--light.v-data-table .v-data-table-header th.sortable.active {
  color: #8627e0 !important;
}

.theme--light.v-data-table .v-data-table-header th.sortable:hover,
.theme--light.v-data-table .v-data-table-header th.sortable.active {
  color: #8627e0 !important;
}

.theme--light.v-data-table
  .v-data-table-header
  th.sortable.active
  .v-data-table-header__icon {
  color: white !important;
}

.v-navigation-drawer
  .v-list-item--active.v-list-item.v-list-item--link.theme--dark {
  color: #ffffff !important;
  caret-color: #ffffff !important;
}

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 24px !important;
}

.v-card__title.headline.primary {
  color: #ffffff !important;
}

.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 64px !important;
}

.v-navigation-drawer__content
  > .v-list-group__items
  > .v-list-item
  > .v-list-item__title {
  color: #e0b993 !important;
}

.v-list-item__icon.v-list-group__header__append-icon {
  color: white !important;
}

.v-list-item.v-list-group__header {
  padding-left: 0;
}

.v-navigation-drawer__content > .v-list-item__title {
  color: #ffffff;
}

.container {
  width: 100%;
  padding: 12px;
  margin-right: 200px;
  margin-left: 200px;
}

.theme--light.v-label {
  color: rgba(0, 0, 0, 0.6);
}

.nobr {
  white-space: nowrap;
}

.v-btn.search-toolbuttons.active {
  background: #39b54a;
  background-color: #39b54a !important;
  border-color: #39b54a;
  color: #ffffff;
}

.v-btn.search-toolbuttons {
  margin-left: 5px;
  background-color: #ffffff;
  border-color: #006fba;
  border-width: 1px;
  color: #006fba;
  margin-bottom: 5px;
}

.v-input {
  color: #ffffff;
}

.v-dialog {
  color: #ffffff;
}

.v-pagination {
  display: inline-flex;
  list-style-type: none;
  justify-content: right !important;
  margin: 0;
  max-width: 100%;
  width: 100%;
}

.nav-sublink .v-list-group__items .v-list-item__title {
  color: #d2d2d2 !important;
}

.theme--light.v-pagination .v-pagination__item--active {
  color: #8627e0 !important;
}

@media (min-width: 960px) {
  .container {
    max-width: 1100px !important;
  }
}

@media (min-width: 1264px) {
  .container {
    max-width: none !important;
  }
}

@media (min-width: 1904px) {
  .container {
    max-width: none !important;
  }
}

.topbar-text {
  font-size: 1rem;
  font-family: "Annabelle";
  padding: 0;
}

.tiny {
  font-size: 0.7rem;
  font-family: "Annabelle";
}

.v-toolbar__content {
  max-width: none !important;
}

.container .nopadd {
  padding: 0 0;
  /* padding-left: 1rem; */
}

footer.theme--light.v-footer {
  background-color: #1d2c39;
  color: #ffffff;
}

div.no-gutters .footerlinks-wrapper {
  padding-top: 0.7rem;
}

.v-application a.footerlinks {
  color: #ffffff;
  text-decoration: underline;
  font-size: 0.75rem;
  font-family: "Annabelle";
}

.v-application a.footerlinks:hover {
  color: #ffffff;
}

.v-btn--contained::after {
  box-shadow: 0;
}

@media (max-width: 960px) {
  .topbar-text {
    display: none;
  }

  .topbar-search {
    display: none;
  }
}

/* mac hack to fix overlay issue */
.v-overlay {
  align-items: center;
  border-radius: inherit;
  display: none !important;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: none !important;
}

.theme--dark.v-overlay {
  color: transparent !important;
}

/* mac hack to fix overlay issue END */
</style>

 <!-- <v-app>
    <vue-confirm-dialog></vue-confirm-dialog>
    <v-navigation-drawer
      v-model="sidebarMenu"
      app
      floating
      color="#8627E0"
      :mini-variant.sync="mini"
      :permanent="sidebarMenu"
      :width="290"
    >
      <v-list-item class="px-1">
        <v-list-item-avatar rounded="0">
          <img
            @click.stop="mini = !mini"
            src="@/../src/assets/oshun.jpeg"
            alt="Logo"
            style="cursor: pointer"
          />
        </v-list-item-avatar>
        <v-list-item-title>
          <h3 style="color: #ffffff">The Sea Goddess Grotto</h3>
        </v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon color="white">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, index) in activeItems"
          :key="index"
          :to="item.link"
          :href="item.href"
          :target="item.target"
          @click="eventTrigger(item.click)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title
            ><span>{{ item.title }}</span></v-list-item-title
          >
        </v-list-item>
      </v-list>
      <v-list v-for="navLink in navLinks" :key="navLink.title" dense dark>
        <v-list-group no-action v-if="navLink.subLinks" class="nav-sublink">
          <v-list-item
            slot="activator"
            :to="navLink.link"
            :href="navLink.href"
            :target="navLink.target"
            @click="eventTrigger(navLink.click)"
          >
            <v-list-item-icon>
              <v-icon>{{ navLink.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ navLink.title }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-for="sub in navLink.subLinks"
            :key="sub.title"
            :to="sub.link"
            :href="navLink.href"
            :target="sub.target"
          >
            <v-list-item-title>{{ sub.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-else
          :to="navLink.link"
          :href="navLink.href"
          :target="navLink.target"
          @click="eventTrigger(navLink.click)"
        >
          <v-list-item-icon>
            <v-icon>{{ navLink.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ navLink.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container id="con">
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <keep-alive include="users">
                <router-view :key="$route.fullPath"></router-view>
              </keep-alive>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app> -->