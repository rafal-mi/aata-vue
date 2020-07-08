<template>
  <v-container fluid class="mx-4">
    <v-row class="grey darken-4">
      <v-col>
      <h2>03 Groups</h2>
      </v-col>
    </v-row>
    <v-row>
      <!-- <v-col> -->
      <router-view></router-view>
      <!-- </v-col> -->
    </v-row>

  </v-container>
    
</template>
<script>
export default {
  mounted() {
  },
  watch: {
    '$route' (to, from) {
      console.log(`From ${from} to ${to}`);
    }
  }
    
}
</script>
<style scoped>

</style>