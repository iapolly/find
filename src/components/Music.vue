<template>
    <div>
      <img id="player" v-on:dblclick="play" src="https://img.icons8.com/ios/50/000000/speaker.png">
      <audio ref="audioElm" src="/static/mp3/piano.mp3"></audio>
    </div>
</template>

<script>
    export default {
        name: "music",
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
      }
    }
</script>

<style scoped>
  #player {
    position: fixed;
  }

</style>
