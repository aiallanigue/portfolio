<template>
  <div id="app">
    <h1 class="banner_title">Hello Developer!</h1>
    <h3 class="banner_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@media (min-width: 601px) {
    #app {
    background-repeat: no-repeat;
    background: url('./assets/img/1920x650.png');
    height:650px;
    background-size: cover;
  }

  .banner_title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 300px;
    height: 50px;
    text-align: center;
    font-family: Arial;
    font-size: 60px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 5px;
  }

  .banner_subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial;
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    color: #fff;
    letter-spacing: 5px;
  }
}

@media (max-width: 600px) {
    #app {
    background-repeat: no-repeat;
    background: url('./assets/img/600x600.png');
    height:600px;
    background-size: cover;
  }

  .banner_title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 300px;
    height: 50px;
    font-family: Arial;
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 5px;
  }

  .banner_subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Arial;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    letter-spacing: 5px;
  }
}
</style>
