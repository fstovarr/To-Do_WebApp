<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">Bunny Studios</div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <MainPage />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MainPage from "./components/MainPage.vue";

export default Vue.extend({
  name: "App",
  components: {
    MainPage
  },
  data: () => ({
    //
  })
});
</script>
