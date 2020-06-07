<template>
  <div class="exe-03 mx-4 my-4" :key="latex">
    <span class="title">Exercise 3.</span>
    <p>
      Write out Cayley tables for groups formed by the symmetries of a rectangle and for 
      \( (\mathbb{Z}_4, +) \)
      How many elements are in each group? Are the groups the same? Why or why not?
    </p>
    <p>
      <span class="title">Solution</span>
    </p>
    <p>
      There are four symmetries of rectangle.
    </p>
    <p>
      Identity
    </p>
    <p>
      <rectangle-svg permutation="identity"></rectangle-svg>
      <arrow>\( 1 \)</arrow>
      <rectangle-svg permutation="identity"></rectangle-svg>
    </p>
    <p>
      Rotation \( 180^\circ \)
    </p>
    <p>
      <rectangle-svg permutation="identity"></rectangle-svg>
      <arrow>\( \rho \)</arrow>
      <rectangle-svg permutation="rotation"></rectangle-svg>
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import RectangleSvg from '@/components/RectangleSvg';
import Arrow from '@/components/Arrow';

export default {
  name: 'Exe03',
  components: {
    RectangleSvg, Arrow
  },
  data() {
    return {
      latex: null
    }
  },
  watch: {
    latex: function() {
      console.log("Key changed");
      this.$nextTick().then(() => {
        this.reRender();
      });
    }
  }

}
</script>
