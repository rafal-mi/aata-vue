<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.29</span>
        <br>
        Prove that \( \mathbb{Z}_n \) has even number of generators for \( n \gt 2 \). 
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        Generators are relatively primes. But if \( (k, n) = 1 \), then \( (n - k, n) = 1 \):
        let \( d | n-k \) and \( d | n\); for some \(a, b \), \( n-k = da \) and \( n = db \);
        then \( k = n - da = db - da = d(b - a) \) and \(d | k \); 
        as a divisor of relatively prime \( k \) and \( n \),
        \( d = 1 \).
        <br>
        So generators happen symmetrically from \( 0 \) up and from \( n \) down.
        <br>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe29 mounted');
    runDelayed();
  }
    
}
</script>

<style scoped>
.theorem {
  font-style: italic;
}

#fact {
  border-style: solid;
  border-width: 1px;
  border-color: darkgray;
  border-radius: 4px;
  padding: 8px;
  margin-right: 8px;
  word-spacing: 2px;
}

.paragraph {
  text-justify: distribute;
}

</style>