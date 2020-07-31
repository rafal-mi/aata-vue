<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.31</span>
        <br>
        Let \( G \) be an abelian group. Show that the elements of finite order in \( G \)
        form a subgroup. This subgroup is called the <i><b>torsion subgroup</b></i> of \( G \).
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        Let \( |a| = m, |b| = n \). Let \( p = \text{lcm}(a, b) \). Clearly \( a^p = b^p = 1 \).
        Then, \( (a^{-1} b)^p = \underbrace{a^{-1}b \cdots a^{-1}b}_{p~\text{times}} = 
        \underbrace{a^{-1} \cdots a^{-1}}_{p~\text{times}} \cdot 
        \underbrace{b \cdots b}_{p~\text{times}} \) since \( G \) is abelian.
        This is equal to \( (a^{-1})^p b^p = (a^p)^{-1} b^p = 1 \cdot 1 = 1 \).
        So \( a^{-1} b \) is of finite order.
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

<style scoped>
.theorem {
  font-style: italic;
}

#fact {
  border-style: solid;
  border-width: 1px;
  border-color: darkgray;
  border-radius: 4px;
  padding: 8px;
  margin-right: 8px;
  word-spacing: 2px;
}

.paragraph {
  text-justify: distribute;
}

</style>