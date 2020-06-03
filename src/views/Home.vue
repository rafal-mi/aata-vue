<template>
  <div class="home">
    <math-jax></math-jax>
  </div>
</template>

<script>
// @ is an alias to /src
import MathJax from '@/components/MathJax.vue'

export default {
  name: 'Home',
  components: {
    MathJax
  },
}
</script>
