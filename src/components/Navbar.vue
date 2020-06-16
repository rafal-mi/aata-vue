<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>AATA</span>
        <span class="font-weight-light mx-2">Solutions</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
      ]
    };
  }
};
</script>
