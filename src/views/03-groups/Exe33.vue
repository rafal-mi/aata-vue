<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.33</span>
        <br>
        Let \( G \) be a group and suppose that 
        \( (ab)^2 = a^2b^2 \) for all \( a \) and \( b \) in \( G \). 
        Prove that \( G \) is an abelian group. 
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br>
        Multiplication of \( abab = aabb \) by \( a^{-1} \) from the left gives \( bab = abb \). 
        Multiplication by \( b^{-1} \) from the right gives \( ba = ab \).
      </v-col>
    </v-row>
  </v-container>  
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe33 mounted');
    runDelayed();
  }
    
}
</script>