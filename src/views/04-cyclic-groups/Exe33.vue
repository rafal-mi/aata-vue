<template>
  <v-container fluid>
    <v-row class="mr-2">
      <v-col>
        <span class="title">Exercise 4.4.33</span>
        <br>
        If \( G \) an abelian group that contains a pair of cyclic subgroups of order \( 2 \),
        show that \( G \) must contain a subgroup of order \(4\).
        Does this subgroup have to be cyclic?
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        Let \(a^2 = b^2 = 1, a \ne b, a, b \ne 1 \). 
        <br>
        \( ab \ne a \), otherwise \( b = 1 \) by cancellation.
        <br>
        \( ab \ne b \), otherwise \( a = 1 \) by cancellation.
        <br>
        Let \( H = \{ 1, a, b, ab \} \). It is immediate to verify that \( H \) closes over group operation.
        Is \( H \) cyclic? No element has order \(4\), so it is not.
        \(\Box\)
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