<template>
  <div id="jsxgraph-box" class="jxgbox" style="width:400px; height:400px;">
  </div>
</template>

<script>
export default {
  name: 'MathJax',
  mounted() {
    var board = window.JXG.JSXGraph.initBoard('jsxgraph-box', {boundingbox: [-2, 4, 6, -4], axis:true, grid:true});
  },
}
</script>