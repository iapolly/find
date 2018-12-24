<template>
  <div>
    <div id="table" ref="bounder">
      <ball></ball>
      <player></player>
      <laptop></laptop>
      <lipstick ></lipstick>
      <kiss></kiss>
      <paper ></paper>
      <can></can>
      <wallet></wallet>
      <money></money>
    </div>
    <img src="/static/img/tornado.png" width="30px" @click="changePos">
  </div>
</template>

<script>
  import $ from 'jquery'
import ball from '../components/table-objects/Ball'
import player from '../components/table-objects/Player'
import  laptop from './table-objects/Laptop'
import lipstick from './table-objects/Lipstick'
import paper from './table-objects/Paper'
  import can from './table-objects/TrashCan'
  import wallet from './table-objects/Wallet'
  import money from './table-objects/Money'
  import kiss from '../components/table-objects/Kiss'

export default {
  name: 'table',
  components: {
    ball,
    player,
    laptop,
    lipstick,
    kiss,
    paper,
    can,
    wallet,
    money
  },
  created() {
  },
  data() {
    return {
    }
  },
  methods: {
    changePos: function () {
      document.getElementById("trash_can").style.display = 'none';
      var randXY = function(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min + 'px';
      };
      //граница
      let box = document.getElementById("table");
      $("#table").children().each(function () {
        let h = $(this)[0].firstChild.clientHeight;
        let w = $(this)[0].firstChild.clientWidth;
        let top = randXY(0,box.offsetHeight - h);
        let left = randXY(0,box.offsetWidth - w);
        $(this).find("*").css({'top': top,'left': left});
        $(this).find("*").addClass('draggable ui-widget-content');
        $(this).find("*").draggable({ containment: "#table", scroll: false });
      });
    }
  },
  mounted() {
    this.$cookie.set('last', 'table', 1);
  }
}
</script>

<style scoped>
  #table {
    width: 600px;
    height: 400px;
    background-color: rgba(255, 0, 0, 0.58);
    border-radius: 10%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .table-object {
    position: absolute;
  }
</style>
