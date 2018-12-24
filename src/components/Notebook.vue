<template>
  <div class="container-book">
    <div style="height: 100px"></div>
    <div id="magazine">
      <div id="first-page">
        <h1>Open me</h1>
      </div>
      <div id="second-page">
        <div class="stickers">
          <!--<img v-draggable src="https://img.icons8.com/dusk/64/000000/christmas-penguin.png">-->
          <!--<img src="https://img.icons8.com/dusk/64/000000/christmas-candy.png">-->
          <!--<img src="https://img.icons8.com/dusk/64/000000/jingle-bell.png">-->
          <!--<img src="https://img.icons8.com/dusk/64/000000/christmas-star.png">-->
          <!--<img src="https://img.icons8.com/dusk/64/000000/christmas-stocking.png">-->
          <!--<img src="https://img.icons8.com/dusk/64/000000/christmas-tree.png">-->
          <div id="snow">
            <img @dblclick="startSnow" src="https://img.icons8.com/dusk/64/000000/snowflake.png">
          </div>

        </div>
      </div>
      <div id="third-page">
        <h2>Happy New Year</h2>
      </div>
      <div id="end-page">
        <div id="note" @dblclick="goToCap">
          <img src="../../static/img/sticker.png" alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery';
  import '../lib/turn.min';
    export default {
      name: "Notebook",
      mounted () {
        $('#magazine').turn({gradients: true, acceleration: true});
        this.$cookie.set('last', 'notebook', 1);
      },
      methods: {
        startSnow: function () {
          document.body.style.backgroundImage = "url('../../static/img/snow.gif')";
        },
        goToCap: function () {
          document.body.style.backgroundImage = null;
          window.location.href="http://localhost:8080/#/cupboard";
        }
      }
    }
</script>

<style scoped>
  h1 {
    position: relative;
    text-align:  center;
  }
  .sticker img{
    height: 60px;
  }
  #magazine{
    width: 700px;
    height: 400px;
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  #magazine .turn-page{
    background-color:#ccc;
  }
  #magazine div {
    background-color: gold;
  }
  #note {
    position: relative;
    left: 20px;
    top: 30px;
  }
  .stickers {
    position: relative;
    left: 100px;
    top: 100px;
  }
</style>
