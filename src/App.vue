<template>
  <div id="app">
    <header>
    <div id="navbar">
      <h1>Learn JS in Vue...</h1>
        <div id="navitem-container">
        <div class="navitem">
        <a href="/"><span>Home</span></a>
        </div>
        <div class="navitem">
        <a href="/Drum"><span>Drum</span></a>
        </div>
        <div class="navitem">
            <a href="/Clock"><span>Clock</span></a>
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
  html {
    font-size: 10px;
    background-size: cover;
  }
  body,html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  #app{
    margin: 0;
    padding: 0;
  }
  #navbar{
    text-align: center;
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #ffc600;
  }
  #navitem-container{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
  }
  .navitem{
      margin: 0 5px 0 5px;
    }
</style>
