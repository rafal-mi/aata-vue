<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.31</span>
        <br>
        Show thet if \( a^2 = e \) for all elements \( a \) in a group \( G \), then \( G \) must be abelian. 
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br>
        Each element is its own inverse: \( a = a^{-1} \). Applying the assumption to \( ab \) we get
        \( (ab)^2 = abab = 1 \). Left multiplication by \( a^{-1} \) yields \( bab = a^{-1} \). 
        Right multiplication by \( b^{-1} \) yields \( ba = a^{-1}b^{-1} = ab \).

      </v-col>
    </v-row>
  </v-container>  
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe31 mounted');
    runDelayed();
  }
    
}
</script>