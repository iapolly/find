<template>
  <div class="table-object">
    <img id="ball" v-on:dblclick="action" src="/static/img/мячик.png">
    <img src="/static/img/bum.png" id="bum">
  </div>
</template>

<script>

export default {
  name: 'ball',
  methods: {
    action: function (e) {
      var ball = document.getElementById("ball");
      var bum = document.getElementById("bum");
      bum.style.marginLeft = ball.offsetWidth - 400 + 'px';
      bum.style.marginTop = ball.offsetTop + 'px';
      ball.style.display = 'none';
      bum.style.display = 'block';
      setTimeout(function () {
        window.location.href = 'http://localhost:8080/#/second';
      }, 1000)
    }
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
    width: 800px;
    position: absolute;
    z-index: 100;
  }
</style>
