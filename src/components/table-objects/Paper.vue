<template>
  <div class="table-object">
    <img class="paper" src="/static/img/Paper.png" v-on:dblclick="paperAction" id="paper">
  </div>
</template>

<script>
  export default {
    name: "Paper",
    methods: {
      paperAction: function (el) {
        let can = document.getElementById("trash_can");
        let paper = document.getElementById("paper");
        can.style.display = "block";
        can.style.top = paper.offsetTop  + can.getBoundingClientRect().height/3*2+ 'px';
        can.style.left = paper.offsetLeft - 20+ 'px';

        var i = 1;
        setInterval(function () {
          if (i>=0){
            paper.style.opacity = i;
            paper.style.marginTop = paper.style.marginTop + 15 + 'px';
            i = i- 0.1;
          } else {
            can.style.display = 'none';
            paper.style.display = 'none';
          }
        }, 300);
      }
    }
  }

</script>

<style scoped>
  .paper {
    width: 70px;
    z-index: 2;
    opacity: 1;
  }
</style>
