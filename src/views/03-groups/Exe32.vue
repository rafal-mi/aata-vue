<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.32</span>
        <br>
        Show that if \( G \) is a finite group of even order, then there is \( a \in G \) 
        such that \( a \) is not the identity and \( a^2 = e \). 
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br>
        Identity is its own inverse. There remains odd number of elements that are inverses between them.
        Inverses exist in pairs that is, \( a \) being the inverse of \( b \), \( b \) must be the inverse of \( a \).
        One element from the odd-powered set must be its own inverse. And it is not the identity.
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