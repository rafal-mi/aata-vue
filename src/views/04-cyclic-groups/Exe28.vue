<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.28 *</span>
        <br>
        Let \( a \) be an element in a group \( G \). What is a generator for the subgroup
         \( \langle a^m \rangle  \cap  \langle a^n \rangle \) ?
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        Example with concrete \( m, n \) is on Math Exchange:
        <br>
        <a href="https://math.stackexchange.com/questions/2097209/generator-for-langle-a21-rangle-cap-langle-a10-rangle">
          Generator for \( \langle a^{21} \rangle  \cap  \langle a^{10} \rangle \)
        </a>
        <br>
        <br>
        Let \( N \) be the order of \( a \).
        The generator is \( a^{\text{lcm}( N / \text{gcd}(N, m), N / \text{gcd}(N, n))} \).
        We need some augmentation of Theorem 4.13: 
        \( a^d \) will generate \( \langle a^k \rangle \) there. 
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col>
        <div id="fact">
          <p>
          <b>FACT:</b>
          &nbsp;
          <span class="theorem">
            Let \( G \) be a cyclic group of order \( n \) and suppose that \( a \in G \) 
            is a generator of the group. If \( b = a^k \), then the order of \( b \) is
            \( n/d \), where \( d = \text{gcd}(k, n) \). 
            Moreover, \( \langle a^k \rangle = \langle a^d \rangle \).
          </span>
          </p>
          <p>
          <i>Proof.</i>
          We only prove the last statement. 
          Obviously \( d|k \). Each power of \( a^k \) is then a power of \( a^d \).
          Also, \( a^d \) is a power of \( a^k \), since there exist integers \( r, s \)
          such that 
          $$ 
            \begin{align*}
            rk + sn = \text{gcd}(k, n) &= d \\
            a^{rk + sn} = a^{rk}a^{sn} = (a^k)^r &= a^d
            \end{align*}
          $$  
          And our last statement is true.
          Call the number \( d \) a <i>least generator</i>.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="mr-2 paragraph">
      <v-col>
        Let's denote by \( \overline{k} \) the least generator from the Fact, i.e. 
        \( \overline{k} = n / \text{lcm} (n, k) \) with symbols there. 
        First element of intersection happens where multiplies of 
        \( \overline{m} \) and \( \overline{n} \) first meet. 
        Both \( \overline{m} \) and \( \overline{n} \) divide \( N \)
        so this must happen farthest there. If this is the case, 
        there are no common elements of groups 
        \( \langle a^m \rangle \) and \( \langle a^n \rangle \)
        other than \( a^N = 0\), the intersection is trivial subgroup 
        and our statement is true with lcm equal \( N = 0 \pmod{N} \).
        Otherwise, there is a common multiple of \( \overline{m} \) and \( \overline{n} \)
        that is less than \( N \). And their least common multiple \( L \) is less than \( N \).

        Clearly \( a^L \) is in the intersection as \( L \) 
        is a multiple of both \( \overline{m}, \overline{n} \).

        Any element of the intersection is \( a^l \) with \( l \) a multiple of both,
        and since least common multiple divides any multiple, \( L | l \).
        With \( l = Ld \) for some \( d \), \( a^l = a^{Ld} = (a^L)^d \)
        is a power of \(a^L \).
      </v-col>
      
    </v-row>

  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe28 mounted');
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