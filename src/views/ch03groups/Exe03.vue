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
    <p class="spacer"></p>
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
            C & D & A & B 
          \end{smallmatrix}\bigr)
        \)
      </div>
    </div>
    <p class="spacer"></p>
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
    <p class="spacer"></p>
    <rectangle-symmetry permutation="reflection-horizontal" gradId="4">
      Horizontal reflection

      <template v-slot:name>
        \( h \)
      </template>

      <template v-slot:permutation>
        \( 
          \bigl(\begin{smallmatrix}
            A & B & C & D \\
            D & C & B & A 
          \end{smallmatrix}\bigr)
        \)
      </template>
    </rectangle-symmetry>
    <p style="margin-top: 24px;">
      Calculation of Cayley table. It is obvious that each square is the identity.
      \[
        rv = 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          C & D & A & B 
        \end{smallmatrix}\bigr)
        \circ
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          B & A & D & C 
        \end{smallmatrix}\bigr)
        =
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          D & C & B & A 
        \end{smallmatrix}\bigr)
        = h
      \]
      \[
        vr = 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          B & A & D & C 
        \end{smallmatrix}\bigr)
        \circ
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          C & D & A & B 
        \end{smallmatrix}\bigr)
        =
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          D & C & B & A 
        \end{smallmatrix}\bigr)
        = h
      \]
      \[
        rh = 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          C & D & A & B 
        \end{smallmatrix}\bigr)
        \circ
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          D & C & B & A 
        \end{smallmatrix}\bigr)
        =
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          B & A & D & C 
        \end{smallmatrix}\bigr)
        = v
      \]
      \[
        hr = 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          D & C & B & A 
        \end{smallmatrix}\bigr)
        \circ
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          C & D & A & B 
        \end{smallmatrix}\bigr)
        =
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          B & A & D & C 
        \end{smallmatrix}\bigr)
        = v
      \]
      \[
        vh = 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          B & A & D & C 
        \end{smallmatrix}\bigr)
        \circ
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          D & C & B & A 
        \end{smallmatrix}\bigr)
        =
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          C & D & A & B 
        \end{smallmatrix}\bigr)
        = r
      \]
      \[
        hv = 
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          D & C & B & A 
        \end{smallmatrix}\bigr)
        \circ
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          B & A & D & C 
        \end{smallmatrix}\bigr)
        =
        \bigl(\begin{smallmatrix}
          A & B & C & D \\
          C & D & A & B 
        \end{smallmatrix}\bigr)
        = r
      \]
    </p>
    <p>
      The Cayley table of symmetries of square is
      $$$$
        \[
        \begin{array}{ c|c c c c}
          \circ & 1 & r & v & h \\
          \hline
          1     & 1 & r & v & h \\
          r     & r & 1 & h & v \\
          v     & v & h & 1 & r \\
          h     & h & v & r & 1 \\
        \end{array}
        \]
        $$$$
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import RectangleSvg from '@/components/RectangleSvg';
import Arrow from '@/components/Arrow';
import RectangleSymmetry from '@/components/RectangleSymmetry';

export default {
  name: 'Exe03',
  components: {
    RectangleSvg, Arrow, RectangleSymmetry
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

.spacer {
  height: 12px;
}

.element-row {
  display: flex;
  align-items: center;
}

</style>