<template>
  <svg width="130" height="100">
    <defs>
      <linearGradient
        :id="`grad${gradId}`"
        :x1="gradient.x1"
        :y1="gradient.y1"
        :x2="gradient.x2"
        :y2="gradient.y2"
      >
        <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
        <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
      </linearGradient>
    </defs>
    <polygon points="20,50 65,16 110,50 65,80" :fill="`url(#grad${gradId})`" />
    <text x="10" y="52" font-size="16">{{ names[0] }}</text>
    <text x="65" y="8" font-size="16">{{ names[1] }}</text>
    <text x="120" y="52" font-size="16">{{ names[2] }}</text>
    <text x="65" y="92" font-size="16">{{ names[3] }}</text>

  </svg>
</template>

<script>
export default {
  name: "RectangleSVG",
  props: ["permutation", "gradId"],
  data() {
    return {

    }
  },
  computed: {
    names() {
      switch (this.permutation) {
        case "identity":
          return ['A', 'B', 'C', 'D'];
        case "rotation": // Rotation
          return ['C', 'D', 'A', 'B'];
        case "reflection-vertical": // Reflection vertical
          return ['C', 'B', 'A', 'D'];
        case "reflection-horizontal": // Reflection horizontal
          return ['A', 'D', 'C', 'B'];
      }
      return ['X', 'X', 'X', 'X'];
    },
    gradient() {
      let g = {};
      switch (this.permutation) {
        case "identity":
          g.x1 = "0%";
          g.y1 = "0%";
          g.x2 = "100%";
          g.y2 = "100%";
          return g;
        case "rotation": // Rotation
          g.x1 = "100%";
          g.y1 = "100%";
          g.x2 = "0%";
          g.y2 = "0%";
          return g;
        case "reflection-vertical": // Reflection vertical
          g.x1 = "100%";
          g.y1 = "0%";
          g.x2 = "0%";
          g.y2 = "100%";
          return g;
        case "reflection-horizontal": // Reflection horizontal
          g.x1 = "0%";
          g.y1 = "100%";
          g.x2 = "100%";
          g.y2 = "0%";
          return g;
      }
      return g;
    }
  },
};
</script>

<style scoped>
svg {
  /* border:1px solid red; */
}

text {
  text-anchor: middle;
  dominant-baseline: middle;
  fill: rgb(227, 66, 52);
}

body {
  font-family: sans-serif;
}
</style>