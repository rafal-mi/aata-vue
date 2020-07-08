<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.8</span>
        <br/>
        Give an example of two elements \( A \) and \( B \) in \( GL_2(\mathbb{R}) \) with \( AB \ne BA \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br/>
          <pre class="prettyprint">
A = Matrix([[1, 1], [0, 1]])
B = Matrix([[1, 0], [1, 1]])
print(A*B)
print(B*A)</pre>
          <div class="pre-container">
            <pre class="output">
[2 1]
[1 1]
[1 1]
[1 2]
            </pre>
          </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { runDelayed } from '@/lib/delayed'

export default {
  name: 'Exe08',
  mounted() {
    console.log(`Component Exe08 mounted`);
    runDelayed();
  }

};
</script>