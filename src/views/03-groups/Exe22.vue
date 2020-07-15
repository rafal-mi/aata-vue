<template>
  <v-container fluid>
    <v-row>
      <v-col class="mr-2">
        <span class="title">Exercise 3.4.22</span>
        <br />
        Show that addition and multiplication mod \( n \) are well defined operations. 
        That is, show that the operations do not depend on the choice of the representative from the equivalence classes mod \( n \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br>
        Let \( b \equiv b' \) i.e. \( n | b - b' \). We show that \( a + b \equiv a + b' \). 
        This is equvalent to \( n | a + b - (a + b') \Longleftrightarrow n | b - b' \) which is our assumption.
        <br>
        Now we show that \( ab \equiv ab' \Longleftrightarrow n | ab - ab' \) 
        \( \Longleftrightarrow n | a(b - b') \) which is true from \( n | b - b' \).
        <br>
      </v-col>
    </v-row>
  </v-container>
    
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    runDelayed();
  }
}
</script>
