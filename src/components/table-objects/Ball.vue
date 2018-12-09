<template>
    <div class="table-object">
      <img id="ball" v-draggable v-on:dblclick="action" src="/static/img/мячик.png">
    </div>
</template>

<script>
import { Draggable } from 'draggable-vue-directive'

export default {
  name: 'ball',
  methods: {
    action: function (e) {
      alert('работает')
    }
  },
  directives: {
    Draggable
  }
}
</script>

<style scoped>
  /*надо либо изменить размеры всех картинок, для всех один шаблон*/
  #ball {
    width: 100px;
  }
</style>
