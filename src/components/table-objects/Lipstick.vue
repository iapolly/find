<template>
  <div class="table-object">
    <img id="lipstick" v-on:dblclick="action" src="/static/img/Помада.png">
    <!--<img id="kiss" src="/static/img/kiss.png" >-->
  </div>
</template>

<script>
  export default {
    name: 'lipstick',
    methods: {
      action: function (e) {
        let kiss = document.getElementById("kiss");
        let lipstick = document.getElementById("lipstick");

        kiss.style.top = lipstick.offsetTop + 10 + 'px';
        kiss.style.left = lipstick.offsetLeft  + 'px';
        var w = 0;
        var timeout = setInterval(function (){
          if (w<100){
            w+=2;
            kiss.style.width = w + "px";
          }  else {
            setTimeout(function () {
              kiss.style.width = 0 + 'px';
              clearTimeout(timeout);
            }, 500);
          }}, 25);
      }
    }
  }
</script>

<style scoped>
  #lipstick {
    width: 60px;
    position: absolute;
  }


</style>
