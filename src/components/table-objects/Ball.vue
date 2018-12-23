<template>
  <div class="table-object">
    <img id="ball" v-on:dblclick="action" src="/static/img/мячик.png">
    <img src="/static/img/buum.png" id="bum">
  </div>
</template>

<script>
  import { Draggable } from 'draggable-vue-directive'

export default {
  name: 'ball',
  methods: {
    action: function (e) {
      var ball = document.getElementById("ball");
      var bum = document.getElementById("bum");
      bum.style.marginLeft = ball.offsetWidth -300 + 'px';
      bum.style.marginTop = ball.offsetTop -100 + 'px';
      ball.style.display = 'none';
      bum.style.display = 'block';
      setTimeout(function () {
        window.location.href = 'http://localhost:8080/#/second';
      }, 1000)

    }
  },
  directives: {
    Draggable
  }
}
</script>

<style scoped>
  /*надо либо изменить размеры всех картинок, для всех один шаблон*/
  #ball {
    width: 100px;
  }
  #bum {
    display: none;
    width: 500px;
  }
</style>
