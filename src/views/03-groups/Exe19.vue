<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.19</span>
        <br />
        Show that
        $$
          0 + a \equiv a + 0 \equiv a \pmod{n}
        $$
        for all \( a \in \mathbb{Z}_n \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br>
        That \( n \) divides \( 0 + a - a \) ? Trivial.
        <br />
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
