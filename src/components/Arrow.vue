<template>
  <div id="svg-container">
    <div id="overlay" class="absolute"><slot></slot></div>

    <svg width="150" height="60">
      <defs>
        <marker id="arrowhead" markerWidth="20" markerHeight="14" refX="0" refY="7" orient="auto">
          <polygon points="0 0, 20 7, 0 14" fill="rgb(227, 66, 52)" />
        </marker>
      </defs>
      <line
        x1="20"
        y1="30"
        x2="110"
        y2="30"
        stroke="rgb(227, 66, 52)"
        stroke-width="1"
        marker-end="url(#arrowhead)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Arrow"
};
</script>

<style scoped>
#overlay {
  /* display: none; */
  width: 20px;
  height: 20px;
  top: 4px;
  left: 65px;
  color: rgb(227, 66, 52);
  background-color: rgba(0, 0, 0, 0); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}

div.relative {
  position: relative;
}

div.absolute {
  position: absolute;
}

#svg-container {
  width: 150px;
  height: 60px;
  position: relative;
  display: inline-block;
}
</style>
