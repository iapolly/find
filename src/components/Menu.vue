<template>
  <div class="header">
    <h1>WELCOME TO THE FIND GAME!</h1>
    <br>
    <br>
    <ul>
      <li><h3>START</h3></li>
      <li><router-link to="/rules"><div id="rules"><h3>RULES</h3></div></router-link></li>
      <li><router-link to="/credits"><div id="credits"><h3>CREDITS</h3></div></router-link></li>
      <li><router-link to="/settings"><div id="settings"><h3>SETTINGS</h3></div></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style>
  @import '../../static/css/style.css';
</style>
