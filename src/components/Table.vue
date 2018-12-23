<template>
    <div id="table" @click="changePos" ref="bounder">
      <ball v-bind:style="randomPosition" v-draggable="draggableValue"></ball>
      <player v-bind:style="randomPosition" v-draggable="draggableValue"></player>
      <laptop v-bind:style="randomPosition" v-draggable="draggableValue"></laptop>
      <lipstick v-bind:style="randomPosition" v-draggable="draggableValue"></lipstick>
      <paper v-bind:style="randomPosition" v-draggable="draggableValue"></paper>
      <can v-bind:style="randomPosition" v-draggable="draggableValue"></can>
      <wallet v-bind:style="randomPosition" v-draggable="draggableValue"></wallet>
      <money v-bind:style="randomPosition" v-draggable="draggableValue"></money>
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
  import wallet from './table-objects/Wallet'
  import money from './table-objects/Money'

export default {
  name: 'table',
  components: {
    ball,
    player,
    laptop,
    lipstick,
    paper,
    can,
    wallet,
    money
  },
  directives: {
    Draggable
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
  methods: {
    changePos: function () {
      var randXY = function(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min + 'px';
      };
      //граница
      let box = document.getElementById("table");
      $("#table").children().each(function () {
        let h = $(this)[0].firstChild.clientHeight;
        let w = $(this)[0].firstChild.clientHeight;
        let top = randXY(-120,box.offsetHeight - h - 110);
        let left = randXY(-220,box.offsetWidth - w - 220);
        $(this).find("*").css({'top': top,'left': left, 'position': 'absolute'});
      })
    }
  },
  computed: {
    randomPosition: function () {
      return {
        left: '220px',
        top: '120px',
        position: 'absolute'
      }
    }
  },
  mounted() {
    this.draggableValue.boundingElement = this.$refs.bounder;
    this.$cookie.set('last', 'table', 1);
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
