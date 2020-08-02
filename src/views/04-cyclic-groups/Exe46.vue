<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.46</span>
        <br>
        Let \( z = \cos \theta + i \sin \theta \) be in \( \mathbb{T} \) 
        where \( \theta \in \mathbb{Q} \). Prove that the order of \( z \)
        is infinite.
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Solution</span>
        <br>
        No integer multiple of rational angle will ever give irrational \( 2k \pi \),
        for any integer \(k\).
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