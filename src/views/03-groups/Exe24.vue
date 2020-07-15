<template>
  <v-container fluid>
    <v-row>
      <v-col class="mr-2">
        <span class="title">Exercise 3.4.24</span>
        <br />
        Show that multiplication distributes over addition modulo \( n \):
        $$
          a(b + c) \equiv ab + ac \pmod{n}
        $$ 
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col>
        <span class="title">Solution</span>
        <br>
        $$
          \begin{align*}
            b + c &= q_1 n + r_1    &    ab &= q'_1 n + r'_1 \\
            a r_1 &= q_2 n + r_2    &    ac &= q'_2 n + r'_2 \\
                                    &&    r'_1 + r'_2 &= q'_3 + r'_3
          \end{align*}
        $$
        We show that \( r_2 = r'_3 \).
        $$
          \begin{align*}
            r_2   &= a r_1 - q_2 n \\
                  &= a(b + c - q_1 n) - q_2 n \\
                  &= a(b + c) - q_1 an - q_2 n \\
            r'_3  &= r'_1 + r'_2 - q'_3 n \\
                  &= ab - q'_1 n + ac - q'_2 n - q'_3 n \\
                  &= a(b + c) - q'_1 n - q'_2 n - q'_3 n 

          \end{align*}
        $$
        \( r'_3 - r_2 = kn \) and \( 0 \le r_2, r'_3 \le n \). Then \( r_2 = r'_3 \) by argument 
        in Exercise 23. 
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
