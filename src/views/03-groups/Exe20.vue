<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.20</span>
        <br />
        Prove that there is a multiplicative identity for the integers modulo \( n \): 
        $$
          a \cdot 1 \equiv a \pmod{n}
        $$
        for all \( a \in \mathbb{Z}_n \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br>
        \( a \cdot 1 - a = 0 \) which is divided by \( n \). So \( 1 \in \mathbb{Z} \) is the indentity.
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
