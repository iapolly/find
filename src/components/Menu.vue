<template>
  <div class="header text-center">
    <h1>Welcome to the Redbook game!</h1>
    <br>
    <br>
    <ul>
      <li><h3>START</h3></li>
      <li><router-link to="/rules"><div id="rules"><h3>RULES</h3></div></router-link></li>
      <li><div id="credits"><h3>CREDITS</h3></div></li>
      <li><div id="settings"><h3>SETTINGS</h3></div></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style>
  h1 {
    color: darkred;
  }
</style>
