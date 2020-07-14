<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.26</span>
        <br />
        Let \( U(n) \) be the group of units in \( \mathbb{Z}_n \). If \( n > 2 \), 
        prove that there is an element \( k \in U(n) \) such that
        \( k^2 = 1 \) and \( k \ne 1\).

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br />
        The candidate is \( n - 1 \) 
        since (in \( \mathbb{Z} \)) \( (n - 1)^2 = n^2 -2n + 1 \) 
        and thus (in \( \mathbb{Z}_n\)) \( (n - 1)^2 \equiv 1 \pmod{n} \).
        But is \(n - 1 \) a unit? Recall units as relative prime with \( n \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div id="fact">
        <p>
        <b>FACT:</b>
        &nbsp;
        <i>For \( n > 1 \), \( n \) is relatively prime to \( n - 1 \).</i>
        </p>
        <p>
        <i>Proof.</i> It is intuitive, since for any \( d | n \), \( n - 1 \) is less than \( d \) from \( n \).
        <br>
        Let \( d|n - 1 \) and \( d|n \). It is  \( n - 1 = kd \) and \( n = ld \) for some integers \( k, l \).
        Now \( ld - kd = 1 = (l - k)d \). 
        Either both \( l - k, d \) are \( 1 \) or both are \( -1 \).
        Thus \( d = 1 \) . \(\Box \) 
        </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Now that \( n - 1 \) is a unit, we are done with \( k = n - 1\).
      </v-col> 
    </v-row>
    <v-row>
      <v-col>
        With some Python code, we can verify this for small \(n \lt 10^6 \).
        <br>
          <pre class="prettyprint">
for n in range(1, 1000000):
    G = Integers(n)
    g = G(n - 1)
    if g*g != 1:
        print('Not for %d' % n)
          </pre>
        and see the output empty.
      </v-col>
    </v-row>
  </v-container>    
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  name: 'Exe26',
  mounted() {
    runDelayed();
  }
}
</script>

<style scoped>
#fact {
  border-style: solid;
  border-width: 1px;
  border-color: darkgray;
  border-radius: 4px;
  padding: 8px;
  margin-right: 8px;
  word-spacing: 2px;
}

pre.prettyprint, code.prettyprint {
	background-color: #000;
	border-radius: 8px;
  font-size: smaller;
  margin-bottom: 0px;
}
</style>
