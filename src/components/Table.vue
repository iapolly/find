<template>
    <div id="table" ref="bounder">
      <ball v-bind:style="{left: '100px', top: '30px'}" v-draggable="draggableValue"></ball>
      <player v-bind:style="{left: '100px', top: '300px'}" v-draggable="draggableValue"></player>
      <laptop v-bind:style="{left: '76px', top: '40px'}" v-draggable="draggableValue"></laptop>
      <lipstick v-bind:style="{left: '250px', top: '250px'}" v-draggable="draggableValue"></lipstick>
      <paper v-bind:style="{left: 10 + 'px', top: randomTopVal + 'px'}" v-draggable="draggableValue"></paper>
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
  methods: {
    randomLeft: function () {
    let min = 0;
    let max = 560;
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
    },
    randomTop: function () {
    let min = 0;
    let max = 300;
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
    }
  },
  data() {
    return {
      draggableValue: {
        boundingElement: undefined
      },
      randomTopVal: this.randomTop
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
  .table-object {
    position: absolute;
  }
</style>
