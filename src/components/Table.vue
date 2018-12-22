<template>
    <div id="table" ref="bounder">
      <ball v-bind:style="position" style="position: fixed" v-draggable="draggableValue"></ball>
      <player v-bind:style="position" style="position: fixed" v-draggable="draggableValue"></player>
      <laptop v-bind:style="position" style="position: fixed" v-draggable="draggableValue"></laptop>
      <lipstick style="position: fixed; top: 250px; left: 500px;" v-draggable="draggableValue"></lipstick>
      <paper v-draggable="draggableValue"></paper>
      <can v-draggable="draggableValue"></can>
    </div>
</template>

<script>
  import $ from 'jquery'
  import { Draggable } from 'draggable-vue-directive'
import ball from '../components/table-objects/Ball'
import player from '../components/table-objects/Player'
import  laptop from './table-objects/Laptop'
import lipstick from './table-objects/Lipstick'
import paper from './table-objects/Paper'
  import can from './table-objects/TrashCan'

export default {
  name: 'table',
  components: {
    ball,
    player,
    laptop,
    lipstick,
    paper,
    can
  },
  directives: {
    Draggable
  },
  computed: {
    position: function(){
      return {
        left: this.randomLeft + 'px',
        top: this.randomTop + 'px'
      }
  }

  },
  methods: {
    randomLeft: function () {
      let table = $('#table');
      let min = parseInt(table.css('margin-left'), 10);
      alert(min);
      let max = min + 500;
      var rand = min - 0.5 + Math.random() * (max - min + 1);
      rand = Math.round(rand);
      return rand;
    },
    randomTop: function () {
      let table = $('#table');
      let min = parseInt(table.css('margin-top'), 10);
      alert(table.css('margin-top'));
      let max = min + 300;
      var rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
      return rand;
    }
  },
  created() {

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
  @import '../../static/css/style.css';
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
