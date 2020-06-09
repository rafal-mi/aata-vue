<template>
  <div class="exe-03 mx-4 my-4">
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
    <div class="element-row">
      <rectangle-svg permutation="identity" gradId="1"></rectangle-svg>
      <arrow>\( 1 \)</arrow>
      <rectangle-svg permutation="identity" gradId="1"></rectangle-svg>
      <div>
      \( 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          A & B & C & D 
        \end{smallmatrix}\bigr)
      \)
      </div>
    </div>
    <p>
      Rotation \( 180^\circ \)
    </p>
    <div class="element-row">
      <rectangle-svg permutation="identity" gradId="1"></rectangle-svg>
      <arrow>\( r \)</arrow>
      <rectangle-svg permutation="rotation" gradId="2"></rectangle-svg>
      <div>
        \( 
          \bigl(\begin{smallmatrix}
            A & B & C & D \\
            C & D & B & A 
          \end{smallmatrix}\bigr)
        \)
      </div>
    </div>
    <p>
      Vertical reflection
    </p>
    <div class="element-row">
      <rectangle-svg permutation="identity" gradId="1"></rectangle-svg>
      <arrow>\( v \)</arrow>
      <rectangle-svg permutation="reflection-vertical" gradId="3"></rectangle-svg>
      <div>
        \( 
          \bigl(\begin{smallmatrix}
            A & B & C & D \\
            B & A & D & C 
          \end{smallmatrix}\bigr)
        \)
      </div>
    </div>
    <p>
      Horizontal reflection
    </p>
    <div class="element-row">
      <rectangle-svg permutation="identity" gradId="1"></rectangle-svg>
      <arrow>\( h \)</arrow>
      <rectangle-svg permutation="reflection-horizontal" gradId="4"></rectangle-svg>
      <div>
        \( 
          \bigl(\begin{smallmatrix}
            A & B & C & D \\
            D & C & B & A 
          \end{smallmatrix}\bigr)
        \)
      </div>
    </div>
    <p style="margin-top: 24px;">
      Calculation of Cayley table. 
      \[
        rv = 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          C & D & B & A 
        \end{smallmatrix}\bigr)
        \circ
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          B & A & D & C 
        \end{smallmatrix}\bigr)
        = h
      \]
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
    }
  },
  mounted() {
    window.componentExe03 = this;
    this.$nextTick(() => {
      if(window.MathJax) {
        console.log(`Typeset promise in next tick`);
        window.MathJax.typesetPromise();
        return;
      }
      console.log(`Setting timeout`);
      let this_ = this;
      setTimeout(() => {
        this_.mathJax();
      }, 100);
    });
  },
  methods: {
    mathJax() {
      if(!window.MathJax) {
        console.log(`Will reassume in next timeout`);
        let this_ = this;
        setTimeout(() => {
          this.mathJax();
        }, 100);
        return;
      }
      console.log(`Assuming in this timeout`);
      window.MathJax.typesetPromise();
    }
  },
}
</script>

<style scoped>

.element-row {
  display: flex;
  align-items: center;
}

</style>