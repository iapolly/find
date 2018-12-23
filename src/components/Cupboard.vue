<template>
  <div id="cupboard">
    <button @click="setBound" v-on:click="show=!show" id="button">
      Toggle
    </button>
    <img src="/static/img/tornado.png" width="30px" @click="changePos" id="tornado" >
    <div id="bor" ref="border">
    </div>
    <transition name="up">
      <div v-if="show">
        <div  id="box">
          <ball v-bind:style="randomPosition" v-draggable="draggableValue"></ball>
          <div v-bind:style="randomPosition" v-draggable="draggableValue">
            <img src="../../static/img/монетка.png" alt="">
          </div>
          <div v-bind:style="randomPosition" v-draggable="draggableValue">
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
      computed: {
        randomPosition: function () {
          return {
            left: '300px',
            top: '100px',
            position: 'absolute'
          }
        }
      },
      methods: {
        setBound: function () {
          this.draggableValue.boundingElement = this.$refs.border;
          document.getElementById("button").remove();
          document.getElementById("tornado").style.display = "block"
        },
        changePos: function () {
          var randXY = function(min,max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min + 'px';
          };
          //граница
          let box = document.getElementById("box");
          $("#box").children().each(function () {
            let h = $(this)[0].firstChild.clientHeight;
            let w = $(this)[0].firstChild.clientHeight;
            let top = randXY(-100,box.offsetHeight - h -100);
            let left = randXY(-300,box.offsetWidth - w - 300);
            $(this).find("*").css({'top': top,'left': left, 'position': 'absolute'});
          })
        }
      },
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
  #tornado{
    display: none;
    position: absolute;
    z-index: 10;
  }

</style>
