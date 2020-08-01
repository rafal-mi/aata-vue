<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.32 *</span>
        <br>
        Let \( G \) an abelian group of order \( pq \) where \( \text{gcd}(p, q) = 1\). 
        If \( G \) contains elements \(a\) and \(b\) of order \(p\) and \(q\) respectively,
        then show that \(G\) is cyclic.
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        Suppose \( (ab)^k = a^kb^k = 1 \).
        Element \( a^k = b^{-k} \) is a power of \( b^{-1} \). By <b>Theorem 4.13</b>
        it has order \( q / \text{gcd}(q, k) \) as orders of \(b\) and \(b^{-1}\) are equal .
        Element \( a^k \) is also a power of \( a \), 
        then it has order \( p / \text{gcd}(p, k) \). 
        Now we have equality \( p / \text{gcd}(p, k) = q / \text{gcd}(q, k) \).
        <br>
        <br>
        
        Can it ever happen that \( a^i = b^j \) for \( i \lt p, j \lt q \)?
        Order of \( a^i \) would be \( p / \text{gcd}(p, i) = q / \text{gcd}(q, j) \),
        which is not possible for relatively prime \(p\) and \(q\). 
        <br>
        <br>
        
        Now safely assuming \(p, q \le k \) we see that
        \( \text{gcd}(p, k) = p \) and \( \text{gcd}(q, k) = k \),
        that is, both \(p\) and \(q\) divide \(k\).
        Since they are relatively prime, it follows that \(pq | k \).
        We have shown that order of \( ab \) is \(pq\), the number of elements of \(G\).
        \(\Box \)
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