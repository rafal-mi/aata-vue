<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.24</span>
        <br>
        Let \( p \) and \( q \) be distinct primes. How many generators does \( \mathbb{Z}_{pq} \) have?
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        It has \( (p - 1)(q - 1) \) generators.
        <br>
        For non-generators, we are seeking relatively non-primes to \( pq \). 
        Nothing in \( \mathbb{Z}_{pq} \) can have both \( p \) and \(q \) in factorization, 
        because first such number, \( pq \), is not in \( \mathbb{Z}_{pq} \).
        And what can have one of them in factorization?
        $$
          \begin{array}{ c c }
              kp & k = 1, \ldots \, q - 1 \\
              lq & l = 1, \ldots \, p - 1 \\
          \end{array}
        $$ 
        <!-- https://stackoverflow.com/questions/51803244/how-to-add-table-in-web-page-using-mathjax 
        -->
        May it happen that \( kp = lq = m \)? Both \( p \) and \( q \) divide \( m \) then,
        so must \( pq \) and now \( pq \le m \) and \( m \) is not in \(  \mathbb{Z}_{pq} \).
        We count \( q - 1 + p - 1 = p + q - 2 \) items here. 
        We must add up \( 0 \) as it is also not generator so there are
        \( p + q - 1 \) non-generators.
        Count of generators becomes \( pq - (p + q - 1) = pq - p - q + 1 = (p - 1)(q - 1). \) 
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe24 mounted');
    runDelayed();
  }
    
}
</script>
