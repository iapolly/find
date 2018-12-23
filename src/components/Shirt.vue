<template>
  <div id="shirt" v-on:mousemove="act">
    <div class="fe" id="fe1" v-on:click="goToSec"></div>
    <div class="fe" id="fe2" v-on:click="goToThird"></div>
    <div class="fe" id="fe3" v-on:click="goToForth"></div>
    <img src="/static/img/shirt4.png" id="first" class="a">
    <img src="/static/img/shirt3.png" id="second"  class="a">
    <img src="/static/img/shirt2.png" id="third"  class="a">
    <img src="/static/img/shirt0.png" id="forth"  class="a">
  </div>
</template>

<script>
    export default {
        name: "Shirt",
      methods: {
        act: function () {
          document.getElementById("shirt").style.marginLeft =
            document.documentElement.offsetWidth/2-350 + 'px';
        },
        goToSec: function () {
          document.getElementById("first").style.display = 'none';
          document.getElementById("second").style.display = 'block';
          document.getElementById("fe1").style.display = 'none';
          document.getElementById("fe2").style.display = 'block';
        },
        goToThird: function () {
          document.getElementById("second").style.display = 'none';
          document.getElementById("third").style.display = 'block';
          document.getElementById("fe2").style.display = 'none';
          document.getElementById("fe3").style.display = 'block';
        },
        goToForth: function () {
          document.getElementById("third").style.display = 'none';
          document.getElementById("forth").style.display = 'block';
          document.getElementById("fe3").style.display = 'none';
        }
      }
    }

</script>

<style scoped>
#shirt{
position: absolute;
}
  .a{
    width: 700px ;
  }
  .fe{
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 10;
  }
  #fe1{
    padding-left: 350px;
    padding-top: 220px;
  }
  #fe2{
    padding-left: 270px;
    padding-top: 300px;
    display: none;
  }
  #fe3{
    padding-left: 390px;
    padding-top: 590px;
    display: none;
  }
  #first{

  }
  #second{
    display: none;
  }
  #third{
    display: none;
  }
  #forth{
    display: none;
  }
</style>
