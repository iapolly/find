<template>
  <div id="cupboard">
    <button @click="setBound" v-on:click="show=!show">
      Toggle
    </button>
    <div id="bor" ref="border">
    </div>
    <transition name="up">
      <div v-if="show">
        <div id="box">
          <ball></ball>
          <div style="position: absolute;" v-bind:style="randomPosition" v-draggable="draggableValue">
            <img src="../../static/img/монетка.png" alt="">
          </div>
          <div style="position: absolute;" v-bind:style="randomPosition" v-draggable="draggableValue">
            <img src="../../static/img/монетка.png" alt="">
          </div>
         </div>
       </div>
    </transition>
  </div>
</template>

<script>
  import $ from 'jquery'
  import ball from '../components/table-objects/Ball'
  import player from '../components/table-objects/Player'
  import { Draggable } from 'draggable-vue-directive'
    export default {
    components: {
      ball,
      player
    },
      name: "Сupboard",
      data() {
        return {
          show: false,
          draggableValue: {
            boundingElement: this.$refs.border
          }
        }
      },
      directives: {
        Draggable
      },
      // computed: {
      //   randomPosition: function () {
      //     return {
      //       left: this.randomLeft() + 'px',
      //       top: this.randomTop() + 'px'
      //     }
      //   }
      // },
      methods: {
        setBound: function () {
          this.draggableValue.boundingElement = this.$refs.border;
        },
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
          alert('назначает');
          return rand;
        }
      },
      created: function () {
        $('#box').сhildren('div').each(function () {
          alert("ddd");
        });
      }
    }
</script>

<style scoped>
  button {
    position: absolute;
  }
  img {
    width: 40px;
  }
  #box {
    background-color: darkred;
    position: relative;
    height: 300px;
    width: 700px;
    right: 0;
    left: 0;
    margin: auto;
  }
  /*прослойка для драга*/
  #bor {
    /*background-color: indianred;*/
    height: 300px;
    width: 700px;
    position: fixed;
    right: 0;
    left: 0;
    margin: auto;
  }
  .up-enter-active, .up-leave-active {
    transition: all 1s;
  }
  .up-enter, .up-leave-to{
    opacity: 0;
    transform: translateY(-100px);
  }

</style>
