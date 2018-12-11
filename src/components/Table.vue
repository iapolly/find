<template>
    <div id="table" ref="bounder">
      <ball v-draggable="draggableValue"></ball>
      <player v-draggable="draggableValue"></player>
      <laptop v-draggable="draggableValue"></laptop>
      <lipstick v-draggable="draggableValue"></lipstick>
      <paper v-draggable="draggableValue"></paper>
    </div>
</template>

<script>
  import { Draggable } from 'draggable-vue-directive'
import ball from '../components/table-objects/Ball'
import player from '../components/table-objects/Player'
import  laptop from './table-objects/Laptop'
import lipstick from './table-objects/Lipstick'
import paper from './table-objects/Paper'

export default {
  name: 'table',
  components: {
    ball,
    player,
    laptop,
    lipstick,
    paper
  },
  directives: {
    Draggable
  },
  data() {
    return {
      draggableValue: {
        boundingElement: undefined
      }
  }
  },
  mounted() {
    this.draggableValue.boundingElement = this.$refs.bounder;
  }
}
</script>

<style scoped>
  #table {
    width: 600px;
    height: 400px;
    background-color: rgba(255, 0, 0, 0.58);
    border-radius: 10%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
</style>
