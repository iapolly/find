<template>
  <div class="header text-center">
    <h1>Welcome to the Redbook game!</h1>
    <br>
    <br>
    <ul>
      <a href="#" id="start"><li><h3>START</h3></li></a>
      <li><router-link to="/rules"><div class="rules"><h3>RULES</h3></div></router-link></li>
      <a href="credits.html" id="credits"><li><h3>CREDITS</h3></li></a>
      <a href="settings.html" id="settings"><li><h3>SETTINGS</h3></li></a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style src="static/css/style.css"></style>
