<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.51</span>
        <br>
        If \( xy = x^{-1}y^{-1} \) for all \( x \) and \( y \) in \( G \), prove that \( G \) 
        must be abelian.
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        \( x^2 y^2 = 1 \), and for \( y = 1, x^2 = 1 \). 
        And we already proved in 3.4.32 that group with each square unity, is abelian.
        <br>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe51 mounted');
    runDelayed();
  }
    
}
</script>