<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 4.4.1 d)</span>
        <br>
        A group with a finite number of subgroups is finite.
      </v-col>
    </v-row>
    <v-row class="mr-2">
      <v-col cols="12">
        <span class="title mr-2">Answer</span>
        <br>
        No. Example is \( \mathbb{Z}_2 \times \mathbb{Z}_2 \)
        <br>
        <a href="https://math.stackexchange.com/questions/996755/if-all-subgroups-are-cyclic-is-group-cylic">
          If all Subgroups are Cyclic, is group Cylic? [duplicate]
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe01d mounted');
    runDelayed();
  }
    
}
</script>