<template>
  <div class="table-object">
    <img id="player" v-draggable v-on:dblclick="play" src="/static/img/плеер.png">
    <audio ref="audioElm" src="/static/mp3/kol.mp3"></audio>
  </div>
</template>

<script>
import { Draggable } from 'draggable-vue-directive'

export default {
  name: 'player',
  data: function () {
    return {
      playFlag: false
    }
  },
  methods: {
    play: function (e) {
      let audio = this.$refs.audioElm;
      if (!this.$data.playFlag) {
        audio.play();
        this.$data.playFlag = true;
      } else {
        audio.pause();
        this.$data.playFlag = false;
      }
    }
  },
  directives: {
    Draggable
  }
}
</script>

<style scoped>
  #player {
    width: 100px;
  }
</style>
