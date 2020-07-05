<template>
  <div>
    <p>
      <slot></slot>
    </p>
    <div class="element-row">
      <square-svg permutation="identity" gradId="1"></square-svg>
      <arrow><slot name="name"></slot></arrow>
      <square-svg :permutation="permutation" :gradId="gradId"></square-svg>
      <div>
        <slot name="permutation"></slot>
      </div>
    </div>
  </div> 
</template>

<script>
import SquareSvg from '@/components/SquareSvg';
import Arrow from '@/components/Arrow';

export default {
  name: "square-symmetry",
  props: ["permutation", "gradId"],
  components: {
    SquareSvg, Arrow
  }
}
</script>

<style scoped>
.element-row {
  display: flex;
  align-items: center;
}
</style>
