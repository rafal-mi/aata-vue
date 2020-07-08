<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.7</span>
        <br/>
        Let \( S = \mathbb{R} \setminus \{ -1 \} \) and define binary operation on \( S \) by \( a \star b = a + b + ab \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        First, the assiociativity
        <div class="mx-4"> 
          $$
            \begin{align*}
            (a \star b) \star c & = (a \star b) + c + (a \star b)c \\
                                & = a + b + ab + c + (a + b + ab)c \\
                                & = a + b + ab + c + ac + bc + abc \tag{*} \\
            a \star (b \star c) & = a + (b \star c) + a(b \star c) \\
                                & = a + b + c + bc + a(b + c + bc) \\
                                & = a + b + c + bc + ab + ac + abc \tag{**}

            \end{align*}
          $$
        </div>
        We see that \( (*) = (**) \) so the associativity holds.
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Before seeking the neutral element, we observe that the operation is commutative: 
        \( a \star b = a + b + ab = b + a + ba = b \star a \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        What is the neutral element \( e \)? It should hold \( a \star e = a + e + ae = a \). 
        Real zero is the neutral element: \( e = 0 \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        For \( b \) being the inverse of \( a \) it should hold         
        <div class="mx-4">
          $$
            \begin{align*}
              a + b + ab & = 0 \\
              a + (1 + a) b & = 0 \\
              (1 + a)b & = -a \\
              b & = \frac{-a}{1 + a}
            \end{align*}
          $$

        </div>
        Thus \( a^{-1} = -a/(1 + a) \).
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  name: 'Exe07',
  components: {
    
  },
  mounted() {
    console.log(`Component Exe07 mounted`);
    runDelayed();
  }
}
</script>

<style scoped>
pre.prettyprint, code.prettyprint {
	background-color: #000;
	border-radius: 8px;
  font-size: smaller;
  margin-bottom: 0px;
}

.output {
  font-size: smaller;
}

.pre-container {
  text-align: center;
  margin: auto;
  width: 50%;
}

.pre-container pre {
  display: inline-block;
  text-align: left;

}

</style>