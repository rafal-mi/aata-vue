<template>
  <v-container fluid class="my-4">
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.5.</span>
        <br/>
          Describe the symmetries of a square and prove that the set of symmetries is a group. 
          Give a Cayley table for the symmetries. How many ways can the vertices of a square be permuted? 
          Is each permutation necessarily a symmetry of the square? 
          The symmetry group of the square is denoted by \( D_4 \).
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br>
        <a href="http://facstaff.cbu.edu/wschrein/media/M402%20Notes/M402C1.pdf" target="_blank">CBU.edu</a>
        <br/>
        <a href="http://mathonline.wikidot.com/the-group-of-symmetries-of-the-square" target="_blank">Mathonline</a>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
      Why isn't this permutation a symmetry?
      <br>
      <square-symmetry permutation="orientation" gradId="1"></square-symmetry>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Because, if this square is made from wood, and lying on a table, we cannot
        <ol>
          <li>Draw a contour around it</li>
          <li>Pick it up</li>
          <li>Possibly turn it around, or over</li>
          <li>Put it back in its original place so that it matches the sketched outline</li>
        </ol>
        <!-- <br> -->
        <span class="biblio">
          Bernard L. Johnston, Fred Richman 
          <span class="biblio-title">
            Numbers and Symmetry An Introduction to Algebra
          </span> 

        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mathJax } from '@/lib/mathjax'
import SquareSymmetry from '@/components/SquareSymmetry';

export default {
  name: 'Exe04',
  components: {
    SquareSymmetry
  },
  mounted() {
    mathJax();
  }
}
</script>

<style scoped>
.biblio {
  font-size: 80%;
  color: #9E9E9E;
}

.biblio .biblio-title {
  font-style: italic;
}
</style>