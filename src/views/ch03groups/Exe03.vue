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
      \( 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          A & B & C & D 
        \end{smallmatrix}\bigr)
      \)
    </p>
    <p>
      <rectangle-svg permutation="identity" gradId="1"></rectangle-svg>
      <arrow>\( 1 \)</arrow>
      <rectangle-svg permutation="identity" gradId="1"></rectangle-svg>
    </p>
    <p>
      Rotation \( 180^\circ \)
      \( 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          C & D & B & A 
        \end{smallmatrix}\bigr)
      \)
    </p>
    <p>
      <rectangle-svg permutation="identity" gradId="1"></rectangle-svg>
      <arrow>\( r \)</arrow>
      <rectangle-svg permutation="rotation" gradId="2"></rectangle-svg>
    </p>
    <p>
      Vertical reflection
      \( 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          B & A & D & C 
        \end{smallmatrix}\bigr)
      \)
    </p>
    <p>
      <rectangle-svg permutation="identity" gradId="1"></rectangle-svg>
      <arrow>\( v \)</arrow>
      <rectangle-svg permutation="reflection-vertical" gradId="3"></rectangle-svg>
    </p>
    <p>
      Horizontal reflection
      \( 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          D & C & B & A 
        \end{smallmatrix}\bigr)
      \)
    </p>
    <p>
      <rectangle-svg permutation="identity" gradId="1"></rectangle-svg>
      <arrow>\( h \)</arrow>
      <rectangle-svg permutation="reflection-horizontal" gradId="4"></rectangle-svg>
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
