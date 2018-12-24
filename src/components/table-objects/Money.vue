<template>
  <div class="table-object">
    <img src="/static/img/монетка.png" class="money" v-on:dblclick="del" >
  </div>

</template>

<script>

  export default {
    name: 'money',
    methods:{
      del: function (e) {

        var money = document.getElementsByClassName("money");
        for (let i = money.length-1; i>0; i--){
            console.log(money[i].className);
            money[i].parentElement.remove();


        }
      }
    }
  }

</script>

<style scoped>
  .money{
    width: 40px;
    transition: all 1s ease-out 1s;
  }
.money:hover{
  -moz-transform: rotate(80deg); /* Для Firefox */
  -ms-transform: rotate(80deg); /* Для IE */
  -webkit-transform: rotate(80deg); /* Для Safari, Chrome, iOS */
  -o-transform: rotate(80deg); /* Для Opera */
  transform: rotate(80deg);
  transition: all 1s ease-out ;
}
</style>
