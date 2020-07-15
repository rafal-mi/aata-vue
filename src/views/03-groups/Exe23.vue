<template>
  <v-container fluid>
    <v-row>
      <v-col class="mr-2">
        <span class="title">Exercise 3.4.23</span>
        <br />
        Show that addition and multiplication mod \( n \) are associative operations. 
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mr-2">
        <span class="title">Solution</span>
        <br>
          \( (a +_n b) +_n c \) is the rest from division by \( n \) of the sum of 
          (the rest from division of \(a + b \) by \( n \)) and \( c \) .
          $$
          \begin{align*}
            a + b & = q_1 n + r_1 \\
            r_1 + c & = q'_1 + r'_1
          \end{align*} 
          $$
        and \( r'_1 = (a +_n b) +_n c \).
        <br>
        <br>
          \( a +_n (b +_n c) \) is the rest from division by \( n \) of sum of \( a \) and
          (the rest from division by \( n \) of \(b + c \) ).
          $$
          \begin{align*}
            b + c & = q_2 n + r_2 \\
            a + r_2 & = q'_2 + r'_2
          \end{align*} 
          $$
        and \( r'_2 = a +_n (b +_n c) \). We show that \( r'_1 = r'_2 \).
        $$
          \begin{align*}
          r'_1 & = r_1 + c - q'_1 n & = a + b - q_1 n + c - q'_1 n \\
          r'_2 & = a + r_2 - q'_2 n & = a + b + c  - q_2 n - q'_2 n
          \end{align*}
        $$
        $$  
          \begin{align*}
          r'_2 - r'_1 & = -q_2 n - q'_2 n + q_1 n + q'_1 n \\
                      & = kn 
          \end{align*}
        $$
        $$  
          \begin{alignat*}{2}
          0 &\le r'_1 &\lt n \\
          -n &\lt -r'_1 &\le 0 \\
          0 &\le r'_2 &\lt n \\
          -n &\lt r'_2 - r'_1 &\le n \\
          -n &\lt kn &\le n \\
          -1 &\lt k &\le 1 \\
          \end{alignat*}
        $$
        And \( k = 0 \lor k = 1 \). Can \( k \) be \( 1 \)? 
        $$
          \begin{align*}
          r'_2 - r'_1 &= n \\
          r'_1 &= r'_2 - n
          \end{align*}
        $$
        $$  
          \begin{alignat*}{2}
          0 &\le r'_2 &\lt n \\
          -n &\le r'_2 - n &\lt 0 \\
          -n &\le r'_1 &\lt 0
          \end{alignat*}
        $$
        This is contradictory so \( k \) must be \(1 \) and \( r'_2 = r'_1 \).
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mr-2">
        \((a \cdot_n b) \cdot_n c \) is the rest from division by \( n \) of the product of
        (the rest from division by \( n \) of the product of \( a \) and \( b \)) and \( c \).
        $$
          \begin{align*}
            ab &= q_1 n + r_1 \\
            r_1 c &= q_2 n + r_2
          \end{align*}
        $$
        and \( r_2 = (a \cdot_n b) \cdot_n c \).
        <br>
        <br>
        \(a \cdot_n (b \cdot_n c) \) is the rest from division by \( n \) of \( a \) and 
        (the rest from division by \( n \) of the product of \( b \) and \( c \)).
        $$
          \begin{align*}
            bc &= q'_1 n + r'_1 \\
            a r'_1 &= q'_2 n + r'_2
          \end{align*}
        $$
        and \( r'_2 = a \cdot_n (b \cdot_n c) \). We show that \( r_2 = r'_2 \).
        $$
          \begin{align*}
            r_2 &= r_1 c - q_2 n &= (ab - q_1 n)c - q_2 n &= abc - q_1 cn - q_2 n \\
            r'_2 &= a r'_1 - q'_2 n &= a(bc - q'_1) - q'_2 n &= abc - q'_1 an - q'_2 n
          \end{align*}
        $$
        We have \( r'_2 - r_2 = kn \) and \( 0 \le r_2, r'_2 \lt n \). As before for sum, 
        it follows that \( k = 0 \), then \( r_2 = r'_2 \).
      </v-col>
    </v-row>
  </v-container>
    
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe23 mounted');
    runDelayed();
  }
}
</script>
