<template>
  <div>
    <div id="table" ref="bounder">
      <ball v-draggable="draggableValue"></ball>
      <player v-draggable="draggableValue"></player>
      <laptop v-draggable="draggableValue"></laptop>
      <lipstick v-draggable="draggableValue"></lipstick>
      <paper v-draggable="draggableValue"></paper>
      <can v-draggable="draggableValue"></can>
      <wallet v-draggable="draggableValue"></wallet>
      <money v-draggable="draggableValue"></money>
    </div>
    <img src="/static/img/tornado.png" id="uragan" >
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

  // methods: {
  //   randomLeft: function () {
  //   let min = 0;
  //   let max = 560;
  //   var rand = min - 0.5 + Math.random() * (max - min + 1);
  //   rand = Math.round(rand);
  //   return rand;
  //   },
  //   randomTop: function () {
  //   let min = 0;
  //   let max = 300;
  //   var rand = min - 0.5 + Math.random() * (max - min + 1);
  //   rand = Math.round(rand);
  //   return rand;
  //   }
  // },
  created() {

  },
  data() {
    return {
      draggableValue: {
        boundingElement: $('#table'),
        // resetInitialPos: {
        //   top: '100px',
        //   left: '100px'
        // }

      }
  }
  },
  mounted() {
    this.draggableValue.boundingElement = this.$refs.bounder;
    // $('#table').each(function(o){
    //   $(o).css({
    //     position: 'relative'
    //   });
    //   alert("jkjkj");
    // var ball = $('#ball');
    // ball.offset({top:300, left:200});
    //
    // });
    // $('#ball').offsetLeft = Math.round(0.5 + Math.random() * (301)) + 'px';
    // $('#ball').offsetTop = Math.round(0.5 + Math.random() * (561)) + 'px'
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
  #uragan{
    width: 30px;
  }
</style>
