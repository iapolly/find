<template>
  <div class="table-object" id="walletDiv">
    <img src="/static/img/Кошелек.png" id="wallet" v-on:dblclick="walletPlay" >
    <audio ref="audioElmWallet" src="/static/mp3/momoney.mp3"></audio>
  </div>

</template>

<script>
  export default {
    name: 'wallet',
    methods: {
      walletPlay: function (e) {
        let audio = this.$refs.audioElmWallet;
        audio.play();
      }
    }
  }

</script>

<style scoped>
#wallet{
  width: 130px;
}
</style>
