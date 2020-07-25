<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.26</span>
        <br>
        Prove that \( \mathbb{Z}_p \) has no non-trivial subgroups if \( p \) is prime.
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        Let \( H \) be a subgroup. By Theorem 4.10 \( H \) is cyclic and has generator \( h \).
        Clearly \( h = k\cdot 1 \) for some natural \( k \). By Theorem 4.13,
        \( | h | = p/d \) where \( d = \text{gcd}(k, p) = 1 \). 
        Then \( | h | = p \) and \( H = \langle h \rangle = \mathbb{Z}_p \).
        <br>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe01e mounted');
    runDelayed();
  }
    
}
</script>
