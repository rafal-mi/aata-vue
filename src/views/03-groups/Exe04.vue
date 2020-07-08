<template>
  <div class="exe-03 my-4">
    <span class="title">Exercise 3.4.4.</span>
    <p>
      Describe the symmetries of a rhombus and prove that the set of symmetries forms a group. 
      Give Cayley tables for both the symmetries of a rectangle and the symmetries of a rhombus. 
      Are the symmetries of a rectangle and those of a rhombus the same?
    </p>
    <p>
      <span class="title">Solution</span>
    </p>
    <p>
      There are four symmetries of rhombus.
    </p>
    <p>
      Identity
    </p>
    <div class="element-row">
      <rhombus-svg permutation="identity" gradId="1"></rhombus-svg>
      <arrow>\( 1 \)</arrow>
      <rhombus-svg permutation="identity" gradId="1"></rhombus-svg>
    </div>
    <p>
      Rotation \( 180^\circ \)
    </p>
    <div class="element-row">
      <rhombus-svg permutation="identity" gradId="1"></rhombus-svg>
      <arrow>\( r \)</arrow>
      <rhombus-svg permutation="rotation" gradId="2"></rhombus-svg>
    </div>
    <p>
      Vertical reflection
    </p>
    <div class="element-row">
      <rhombus-svg permutation="identity" gradId="1"></rhombus-svg>
      <arrow>\( v \)</arrow>
      <rhombus-svg permutation="reflection-vertical" gradId="2"></rhombus-svg>
    </div>
    <p>
      Horizontal reflection
    </p>
    <div class="element-row">
      <rhombus-svg permutation="identity" gradId="1"></rhombus-svg>
      <arrow>\( h \)</arrow>
      <rhombus-svg permutation="reflection-horizontal" gradId="2"></rhombus-svg>
    </div>
    <p>
      Notice that \( r^2 = v^2 = h^2 = 1\) and \( vh = hv = r\). Then, 
    </p>
    <p>
      $$
        vr = vvh = v^2h = 1 \cdot h = h 
      $$
      $$
        rv = hvv = hv^2 = h \cdot 1 = h 
      $$
      $$
        hr = hhv = h^2v = 1 \cdot v = v 
      $$
      $$
        hr = hhv = h^2v = 1 \cdot v = v 
      $$
    </p>
    <p>
      The Cayley table of symmetries of a rhombus is
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
    <p>It is the same as for rectangle. The groups are the same.</p>
  </div>
</template>

<script>
import Vue from 'vue'
import RhombusSvg from '@/components/RhombusSvg';
import Arrow from '@/components/Arrow';
import RectangleSymmetry from '@/components/RectangleSymmetry';
import { runDelayed } from '@/lib/delayed'

export default {
  name: 'Exe04',
  components: {
    RhombusSvg, Arrow, RectangleSymmetry
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log(`Component Exe04 mounted`);
    runDelayed();
  },
  methods: {
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

/* code {
  display: block;
  white-space: pre-wrap   
} */

/* pre.prettyprint {
  border: none !important;
} */

pre.prettyprint, code.prettyprint {
	background-color: #000;
	border-radius: 8px;
  font-size: smaller;
  margin-bottom: 0px;
}

.output {
  font-size: smaller;
}

</style>