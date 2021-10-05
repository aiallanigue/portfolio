<template>
  <v-app application--light class="wrapper">
    <app-header></app-header>
        <router-view></router-view>     
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
// import axios from 'axios'
// import config from '@/config'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  @require '../node_modules/vuetify/src/stylus/settings/_colors.styl'
  $theme := {
    primary: #3F51B5
    accent: #FFC107
    secondary: #00BCD4
    info: #B2DFDB
    warning: $red.base
    error: $red.base
    success: $green.base
  }
  @require '../node_modules/vuetify/src/stylus/main.styl'
</style>

<style>

html,
body {
  margin:0;
  padding:0;
  height: 100%;
  
}

.application {
  background: #7474BF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.wrapper {
  min-height:100%;
  /*margin-bottom: 30px;*/
}
.content {
  width: 100%;
  min-height:100%;
  position: relative;
  margin-bottom: 30px;
  padding-bottom: 30px;
}

.rigth {
  text-align:right !important;
}

.no-text-decoration {
  text-decoration: none ;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>

<style scoped>
@media only screen and (min-width: 600px) {
  .container {
      max-width: 1024px;
  }
}  
</style>
