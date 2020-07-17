<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.38</span>
        <br>
        Let \( n = 0, 1, 2, \ldots \) and \( n\mathbb{Z} = \{ nk: k \in \mathbb{Z} \} \). 
        Prove that \( n\mathbb{Z} \) is a subgroup of \( \mathbb{Z} \).
        Show that these subgroups are the only subgroups of \( \mathbb{Z} \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br>
        The first part reduces to simple verification of group axioms. In the second part, let \( G \)
        be a subgroup of \( \mathbb{Z} \). Assume \( G \) non-trivial and let \( n \gt 0 \)
        be the minimal positive integer in \( G \). That \( G \) contains positives - and negatives
        - is obvious, as they are mutual inverses in non-trivial subgroup \( G \).
        We show that \( G = n \mathbb{Z} \). It is clear that \( n \mathbb{Z} \subseteq G \).
        How it is with the opposite inclusion? Assume \( k \in \mathbb{Z}, a \in G \) 
        and \( kn \lt a \lt (k + 1)n \). After subtracting \(n \) from all sides, it is 
        \( 0 \lt a - kn \lt n \). 
        Both \( a, kn \) are in \( G \) so must their difference. But it is less than minimal \( n \).
        A contradiction. So there is no element of \( G \setminus n\mathbb{Z}\). 
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