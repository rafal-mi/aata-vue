<template>
  <v-container fluid class="mx-4">
    <v-row class="grey darken-4">
      <v-col>
        <h2>Tricks</h2>
      </v-col>
    </v-row>
    <v-row>
      <router-view></router-view>
    </v-row>
  </v-container>
</template>
<script>
export default {
  mounted() {
    console.log(`Component Tricks mounted`);
  }
};
</script>
