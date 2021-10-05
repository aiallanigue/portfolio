<template>
  <v-toolbar dark class="header success">
    <v-toolbar-title class="white--text headline">
      <router-link :to="{name: 'home'}" class="white--text no-text-decoration"> VueJS Blog Exam</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
<style>
  .center {
    text-align:center !important;
  }
  .my-avatar {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    text-align: center;
    padding-top: 5px;
  }
  .no-margin {
    margin: 0px;
  }

  .success {
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
