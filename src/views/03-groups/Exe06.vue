<template>
  <v-container fluid class="my-4">
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.6</span>
        <br/>
          Give a multiplication table for the group \( U(12) \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br/>
        Units are \( 1, 5, 7, \) and \( 11 \) that are relatively prime with \( 12 \).
        <br/>
          <pre class="prettyprint">
Z12 = Integers(12)
Z12.addition_table(names='elements')</pre>
          <div class="pre-container">
          <pre class="output">
 *   0  1  2  3  4  5  6  7  8  9 10 11
  +------------------------------------
 0|  0  0  0  0  0  0  0  0  0  0  0  0
 1|  0  1  2  3  4  5  6  7  8  9 10 11
 2|  0  2  4  6  8 10  0  2  4  6  8 10
 3|  0  3  6  9  0  3  6  9  0  3  6  9
 4|  0  4  8  0  4  8  0  4  8  0  4  8
 5|  0  5 10  3  8  1  6 11  4  9  2  7
 6|  0  6  0  6  0  6  0  6  0  6  0  6
 7|  0  7  2  9  4 11  6  1  8  3 10  5
 8|  0  8  4  0  8  4  0  8  4  0  8  4
 9|  0  9  6  3  0  9  6  3  0  9  6  3
10|  0 10  8  6  4  2  0 10  8  6  4  2
11|  0 11 10  9  8  7  6  5  4  3  2  1            
          </pre>
          </div>
          <br/>
            $$$$
              \[
              \begin{array}{ c|c c c c}
                \circ &  1 &  5 &  7 & 11 \\
                \hline
                1     &  1 &  5 &  7 & 11 \\
                5     &  5 &  1 & 11 &  7 \\
                7     &  7 & 11 &  1 &  5 \\
               11     & 11 &  7 &  5 &  1 \\
              \end{array}
              \]
            $$$$
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  name: 'Exe06',
  components: {
    
  },
  mounted() {
    console.log(`Component Exe06 mounted`);
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