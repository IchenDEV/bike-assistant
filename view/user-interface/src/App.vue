<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon>mdi-bicycle</v-icon> Smart Bike ASSISTANT
      </div>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <div v-if="$store.state.showWindow" class="warl">
      注意⚠️
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
.anchorBL {
  display: none;
}
html {
  overflow-y: scroll;
}
.warl {
  margin: 1rem;
  z-index: 999999;
  position: fixed;
  height: 30vh;
  background-color: red;
  width: 90vw;
  text-align: center;
  color: white;
  padding-top: calc((30vh - 25vw)/2);
  font-size: 25vw;
  border-radius: 2rem;
  line-height: 1;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
</style>
