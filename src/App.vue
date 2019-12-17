<template>
  <div id="app">
    <header>
    <div id="navbar">
      <h1 id="titre-big">30 JS projekts in one Vue</h1>
        <div id="navitem-container">
        <div class="navitem">
        <a class="perso-a" href="/">Home</a>
        </div>
        <div class="navitem">
        <a class="perso-a" href="/Drum">Drum</a>
        </div>
        <div class="navitem">
            <a class="perso-a" href="/Clock">Clock</a>
        </div>
    </div>
    </div>
    </header>
      <div>
          <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body,html {
      font-size: 10px;
      background-size: cover;
      margin: 0;
      padding: 0;
      font-family: "Comic Sans MS" , sans-serif;
  }
  #navbar{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #ffc600;
  }
  #titre-big{
      font-family: "AR DARLING", sans-serif;
      font-size: 20px;
  }
  #navitem-container{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
  }
  .navitem{
    border: .4rem solid black;
    border-radius: .5rem;
    margin-right: 0.5rem;
    font-size: 1rem;
    padding: 0.7rem .3rem;
    width: 3rem;
    text-align: center;
  }
  .perso-a{
    text-decoration:none;
    color: black;
  }
</style>
