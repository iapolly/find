<template>
  <div id="cupboard">
    <button v-on:click="show=!show">
      Toggle
    </button>

    <transition name="up">
       <div v-if="show">
         <div id="box">

         </div>
       </div>
    </transition>
  </div>
</template>

<script>
    export default {
      name: "Сupboard",
      data() {
        return {
          show: false
        }
      }
    }
</script>

<style scoped>
  #box {

    height: 430px;
    width: 700px;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    background-image: url("/static/img/capboard.png");
    background-size: cover;
  }
  .up-enter-active, .up-leave-active {
    transition: all 1s;
  }
  .up-enter, .up-leave-to{
    opacity: 0;
    transform: translateY(-100px);
  }

</style>
