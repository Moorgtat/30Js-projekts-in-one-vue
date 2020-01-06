<template>
  <div id="app">
    <header>

    <div id="navbar">
        <div id="titre-big">
        <h1>30 JS projekts in one Vue</h1>
        </div>
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
        <div class="navitem">
          <a class="perso-a" href="/Spacy">Spacy</a>
        </div>
        <div class="navitem">
          <a class="perso-a" href="/ArrayCardio">Array</a>
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
    font-family: "Comic Sans MS" , sans-serif;
    padding: 0;
    margin: 0;
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
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .navitem{
    background-color: rgba(0,0,0,0.2);
    border: .2rem solid black;
    border-radius: .5rem;
    margin: 0 0 0 0.5rem;
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
