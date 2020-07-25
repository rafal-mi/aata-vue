<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.27</span>
        <br>
        If \( g \) and \( h \) have orders 15 and 16 respectively in a group \( G \),
        what is the order of \( \langle g \rangle  \cap  \langle h \rangle \)?
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        Both \( \langle g \rangle \) and \( \langle h \rangle \) are cyclic. 
        Let \( a \in \langle g \rangle  \cup  \langle h \rangle \).
        Order of \( a \) divides both \(15\) and \(16\). But \(\text{gcd}(15, 16) = 1\).
        Order of \(a\) is \(1\). 
        Thus order of \( \langle g \rangle  \cap  \langle h \rangle \) is \(1\).
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe01e mounted');
    runDelayed();
  }
    
}
</script>
