<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.25</span>
        <br>
        Let \( p \) be prime and \( r \) be a positive integer. 
        How many generators does \( \mathbb{Z}_{p^r} \) have?
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        Non-generators will have \( p \) in their factorization. All of them (except zero) 
        are multipliers of \( p \). How many of them are in \( \mathbb{Z}_{p^r} \)?
        It is the question how many times <i> distance of \( p \) happens from 
        \( 1 \) until \( p^r \) </i>.
        Number \( p^r \) is \( p^{r-1} \) times \( p \).
        Earlier, distance of length \( p \) (yes, formally, \( kp \) for some \( k \in \mathbb{N} \))
        happened \( p^{r-1} - 1 \) times.
        This would be the number of non-generators if we did not have zero, 
        and with zero included, the number happily becomes \( p^{r-1} \).
        There are \( p^r - p^{r-1} \) generators then.
        <br>
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
