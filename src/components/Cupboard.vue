<template>
  <div id="cupboard">
    <button @click="setBound" v-on:click="show=!show" id="button">
      <img src="https://img.icons8.com/ios/50/000000/open-sign.png" alt="">
    </button>
    <img src="/static/img/tornado.png" width="30px" @click="changePos" id="tornado" >
    <div id="bor" ref="border">
    </div>
    <transition name="up">
      <div v-if="show">
        <div id="box" >
          <div id="littleShirt" class="cupboard-object">
            <img src="/static/img/ittleShirtForCupboard.png" >
          </div>
          <sock1 v-for="n in 10"></sock1>
          <sock2 v-for="n in 50"></sock2>
          <switer v-for="n in 30"></switer>
          <sock1 v-for="n in 40"></sock1>
          <sock2 v-for="n in 10"></sock2>
          <switer v-for="n in 20"></switer>
        </div>
       </div>
    </transition>

  </div>
</template>

<script>
  import $ from 'jquery'
  import sock1 from '../components/cupboard_obj/sock1'
  import sock2 from '../components/cupboard_obj/sock2'
  import switer from '../components/cupboard_obj/Switer'
    export default {
    components: {
      sock1,
      sock2,
      switer
    },
      name: "Сupboard",
      data() {
        return {
          show: false
        }
      },
      methods: {
        setBound: function () {
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
            let top = randXY(0,box.offsetHeight - h - 130);
            let left = randXY(0,box.offsetWidth - w - 130);
            $(this).find("*").css({'top': top,'left': left, 'position': 'absolute'});
            $(this).find("*").addClass('draggable ui-widget-content');
            $(this).find("*").draggable({ containment: "#bor", scroll: false });
          })

        }
      },
      mounted() {
        this.$cookie.set('last', 'cupboard', 1);
      }
    }
</script>

<style scoped>
  button {
    position: absolute;
  }
  img {
    width: 50px;
  }
  #box {
    background-image: url("../../static/img/capboard.png");
    background-size: cover;
    position: relative;
    height: 450px;
    width: 720px;
    right: 0;
    left: 0;
    margin: auto;
  }
  /*прослойка для драга*/
  #bor {
    /*background-color: indianred;*/
    height: 450px;
    width: 720px;
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

  .cupboard-object {
    left: 50px;
    top: 50px;
    position: absolute;
  }

</style>
