<template>
  <div class="hello">
    <div class="container">
      <div class="card-deck">
        <div class="card">
        <img class='img' src='../assets/img/400x300.png' />
          <div class="card-body text-center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="btn-container">
            <button class="btn-readmore">Read More</button>
          </div>
        </div>
        <div class="card">
        <img class='img' src='../assets/img/400x300.png' />
          <div class="card-body text-center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="btn-container">
            <button class="btn-readmore">Read More</button>
          </div>
        </div>
        <div class="card">
        <img class='img' src='../assets/img/400x300.png' />
          <div class="card-body text-center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </div>
          <div class="btn-container">
            <button class="btn-readmore">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/bootstrap.min.css';

@media (max-width: 600px) {
  .hello {
    padding-top: 200px;
  }

  .btn-readmore {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border-width: 3px;
    border-color: #000;
    height: 40px;
    width: 200px;
    text-transform: uppercase;
    font-family: Arial;
    font-weight: 600;
    padding-bottom: 8px;
    padding-top: 8px;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
}

@media (min-width: 600px) {
  .hello {
    padding-top: 250px;
  }
}

.img{
  padding: 10px;
}
.card {
  border-radius: 10px;
}

.card-text {
  font-family: Arial;
  font-size: 18px;
}
.sm-img {
  background: url('../assets/img/400x300.png');
  background-repeat: no-repeat;
  border-radius: 10px;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.btn-readmore {
  border-radius: 30px;
  border-width: 3px;
  border-color: #000;
  height: 40px;
  width: 200px;
  text-transform: uppercase;
  font-family: Arial;
  font-weight: 600;
  padding-bottom: 20px;
  padding-top: 8px;
}
</style>
