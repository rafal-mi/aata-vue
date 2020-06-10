<template>
  <div>
    <p>
      <slot></slot>
    </p>
    <div class="element-row">
      <rectangle-svg permutation="identity" gradId="1"></rectangle-svg>
      <arrow><slot name="name"></slot></arrow>
      <rectangle-svg :permutation="permutation" :gradId="gradId"></rectangle-svg>
      <div>
        <slot name="permutation"></slot>
      </div>
    </div>
  </div> 
</template>

<script>
import RectangleSvg from '@/components/RectangleSvg';
import Arrow from '@/components/Arrow';

export default {
  name: "rectangle-symmetry",
  props: ["permutation", "gradId"],
  components: {
    RectangleSvg, Arrow
  }
}
</script>

<style scoped>
.element-row {
  display: flex;
  align-items: center;
}
</style>
