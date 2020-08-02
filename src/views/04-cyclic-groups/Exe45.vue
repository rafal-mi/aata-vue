<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.45</span>
        <br>
        Let \( \alpha \in \mathbb{T} \). Prove that \( \alpha^m = 1 \) and \( \alpha^i = 1 \)
        if and only if \( \alpha^d = 1 \) for \( d = \text{gcd}(m, n) \).
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        Radius decreases or increases intdefinitely.
        <br>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe32 mounted');
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