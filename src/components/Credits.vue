<template>
  <div>
    <div class="header text-center">
      <h1>CREDITS:</h1>
      <h2>
        Your last location: {{last}}
      </h2>
      <div v-if="last === 'table'"><router-link to="/first" ><h3>GO</h3></router-link></div>
      <div v-if="last === 'notebook'"><router-link to="/second" ><h3>GO</h3></router-link></div>
      <div v-if="last === 'cupboard'"><router-link to="/cupboard" ><h3>GO</h3></router-link></div>
      <div v-if="last === 'shirt'"><router-link to="/shirt" ><h3>GO</h3></router-link></div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Credits",
      data() {
        return {
          last: this.$cookie.get('last')
        }
      },
      computed: {
        url: function () {

        }
      }
    }
</script>

<style scoped>

</style>
