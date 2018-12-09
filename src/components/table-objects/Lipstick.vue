<template>
  <div class="table-object">
    <img id="lipstick" v-draggable v-on:click="action" src="/static/img/Помада.png">
    <img id="kiss" src="/static/img/kiss.png" hidden>
  </div>
</template>

<script>
  import { Draggable } from 'draggable-vue-directive'

  export default {
    name: 'lipstick',
    methods: {
      action: function (e) {
        //у меня какая-то фигня
        let kiss = document.getElementById("kiss");
        kiss.style.marginLeft = document.getElementById("lipstick").offsetWidth + 'px';
        kiss.style.marginTop = document.getElementById("lipstick").offsetTop + 'px';
        kiss.hidden = !kiss.hidden;
        setTimeout(function (){kiss.hidden = !kiss.hidden}, 1000);
      }
    },
    directives: {
      Draggable
    }

  }
</script>

<style scoped>
  #lipstick {
    width: 100px;
  }
  #kiss {
    width: 100px;
  }

</style>
