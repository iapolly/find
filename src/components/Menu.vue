<template>
  <div class="header text-center">
    <h1>Welcome to the Redbook game!</h1>
    <br>
    <br>
    <ul>
      <a href="#" id="start"><li><h3>START</h3></li></a>
      <li><router-link to="/rules"><div class="rules"><h3>RULES</h3></div></router-link></li>
      <!--<a href="credits.html" id="credits"><li><h3>CREDITS</h3></li></a>-->
      <!--<a href="settings.html" id="settings"><li><h3>SETTINGS</h3></li></a>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style>
  * {
    font-family: 'Acme', sans-serif;
  }

  .header {
    height: 700px;
    background: white;
  }

  .header li {
    border: 2px;
    border-radius: 10px;
    list-style-type: none;
    width: 400px;
    padding-top: 25px;
    padding-bottom: 25px;
    text-align: center;
    margin: 20px 0;
    background: #f2f2f2;
  }

  .header li:hover {
    background: #eaeaea;
  }

  .header ul {
    display: inline-block;
  }

  .header h1 {
    padding-top: 50px;
  }

  .header a {
    color: black;
    text-decoration: none;

  }

  .header a:hover {
    color: red;
    text-decoration: none;
  }
</style>
