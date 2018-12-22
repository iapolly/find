<template>
  <div class="table-object">
    <img class="trash_can" src="/static/img/trash_can_PNG18476.png" id="trash_can" v-on:dblclick="canAction">
  </div>
</template>

<script>
  import { Draggable } from 'draggable-vue-directive'
  export default {
    name: "TrashCan",
    methods: {
      canAction: function (el) {
        document.getElementById("trash_can").style.display = 'none';
      }
    },
    directives: {
      Draggable
    }
  }

</script>

<style scoped>
  .trash_can{
    width: 100px;
  }
</style>
