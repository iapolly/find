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
        can.parentElement.style.top = paper.parentElement.getBoundingClientRect().top +80 + 'px';
        can.parentElement.style.left = paper.parentElement.getBoundingClientRect().left -12 + 'px';

        var i = 1;
        setInterval(function () {
          if (i>=0){
            paper.style.opacity = i;
            paper.parentElement.style.top = paper.parentElement.getBoundingClientRect().top + 1 + 'px';
            i = i- 0.01;
          } else {
            can.style.display = 'none';
            paper.style.display = 'none';
          }
        }, 30);
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
