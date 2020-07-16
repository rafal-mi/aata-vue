<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h3>Underbrace</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <a href="https://tex.stackexchange.com/questions/63250/typesetting-144-4-with-n-times-under-the-4s-is-easy-but-what-about-sqrt1">
          Typesetting 144…4 with “n times” under the 4's is easy, but what about \sqrt{144…4}?

        </a>
        <br>
        \(  \sqrt{144\ldots4\smash{\llap{\underbrace{\phantom{44\ldots4}}_{\text{$n$ times}}}}}
    \vphantom{1\underbrace{44\ldots4}_{\text{$n$ times}}} \)
        
      </v-col>
    </v-row>    
  </v-container>
</template>
<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Underbrace mounted');
    runDelayed();
  }
}
</script>