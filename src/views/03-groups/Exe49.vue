<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.51</span>
        <br>
        Let \( a \) and \( b \) be elements of a group \( G \). If \( a^4 b = a \) and \( a^3 = e \),
        prove that \( ab = ba \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br>
        $$
          \begin{gather*}
          ba = a^4 b = a^3ab = eab = ab
          \end{gather*}
        $$
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe38 mounted');
    runDelayed();
  }
    
}
</script>