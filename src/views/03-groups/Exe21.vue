<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.21</span>
        <br />
        For each \( a \in \mathbb{Z}_n \) find an element \( b \in \mathbb{Z}_n \) such than 
        $$
          a + b \equiv b + a \equiv 0 \pmod{n} .
        $$
        
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br>
        Let \( b = n - a \); it is the inverse because \( a + b = a + n - a = n \) is divided by \( n \).
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
