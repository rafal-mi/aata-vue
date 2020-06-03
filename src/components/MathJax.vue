<template>
  <div :key="latex">
    When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are
    \[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]
  </div>
</template>

<script>
export default {
  name: 'MathJax',
  watch: {
    latex: function() {
      console.log('Key changed');
      this.$nextTick().then(()=>{
        this.reRender();
      });
    }
  }
  
}
</script>