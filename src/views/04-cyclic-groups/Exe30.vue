<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.30</span>
        <br>
        Suppose that \( G \) is a group and \( a, b \in G \).
        Prove that if \( |a| = m \) and \( b = n \) with \( \text{gcd}( m, n ) = 1 \),
        then \( \langle a \rangle \cap \langle b \rangle = \{1\} \)
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        Let \( x \in \langle a \rangle \cap \langle b \rangle \).
        $$
          \begin{align*}
            x &= a^k &\implies  |x| &= m / (m, k) \\
            x &= a^l &\implies  |x| &= n / (n, l)
          \end{align*}
        $$
        Order of \( x \) divides both relatively prime \( m \) and \( n \),
        so it is equal to \( 1 \) and \( x = 1 \). 
        <br>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe30 mounted');
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