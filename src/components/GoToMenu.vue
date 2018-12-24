<template>
    <div id="goToMenu" v-on:click="goBack">

    </div>
</template>

<script>
    export default {
        name: "GoToMenu",
      methods: {
          goBack: function () {
            window.location.href="http://localhost:8080/#/menu";
          }
      }
    }

</script>

<style scoped>
#goToMenu{
  width: 50px;
  height: 50px;
  background-image: url("/static/img/home.png");
  background-size: cover;
  /*background-color: brown;*/
  top: 90%;
  left: 90%;
  position: fixed;
}
</style>
