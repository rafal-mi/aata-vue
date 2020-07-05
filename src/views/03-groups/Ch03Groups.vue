<template>
  <v-container fluid class="mx-4">
    <v-row>
      <h2>03 Groups</h2>
    </v-row>
    <v-row>
      <router-view></router-view>
    </v-row>

  </v-container>
    
</template>
<script>
export default {
  mounted() {
    this.$router.push('/03-groups/index')
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