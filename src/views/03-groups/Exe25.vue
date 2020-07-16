<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.25</span>
        <br>
        Let \( a \) and \( b \) be elements in a group \( G \). 
        Prove that \( ab^na^{-1} = (aba^{-1})^n \) for \( n \in \mathbb{Z} \).
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col>
        <span class="title">Solution</span>
        <br>
        The right is \( \underbrace{aba^{-1} aba^{-1} \cdot \cdots \cdot aba^{-1}}_{n~\text{times}} \).
        Each \( aa^{-1} \) dissappears and we get the left.
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe25 mounted');
    runDelayed();
  }
}
</script>
