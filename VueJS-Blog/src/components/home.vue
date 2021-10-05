<template>
  <v-container fluid="true" class="content main">
    <v-layout row wrap class="grid">
      <v-flex class="grid-item sm12 md4" v-for="post in posts" :key='post.id'>
        <v-card hover>
            <v-card-media class="white--text" height="200px" :src="post.image">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-title>
              <div>
                <router-link :to="{ name: 'post_detail', params: {'post_id': post.id}}" class="no-text-decoration">
                  <span class="headline"> {{post.title}} </span> <br>
                </router-link> 
                <span class="grey--text">{{ post.author }}</span><br>
                <span> {{ post.intro.substring(0,180) }} </span>
              </div>
            </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  
</template>
<script>
import Isotope from 'isotope-layout'
import HTTP from '@/HTTP'
export default {
  data () {
    return {
      posts: [],
      snack_bar: false,
      snack_msg: undefined,
      is_snack_for_error: true
    }
  },
  created () {
    HTTP.get('/')
    .then(response => {
      this.posts = response.data
    })
    .catch(error => {
      this.is_snack_for_error = true
      this.snack_bar = true
      this.snack_msg = error.response.data.reason
    })
  },
  mounted () {
    this.$nextTick(() => {
      /* eslint-disable no-new */
      new Isotope('.grid', {
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item'
        }
      })
    })
  }
}
</script>

<style>
.grid-item {
  padding-bottom: 30px;
  padding-left: 15px !important; 
  padding-right:15px !important;
}

.card {
  min-height: 400px;
}

.headline {
  text-transform: capitalize;
  font-size: 20px !important;
}

@media only screen and (min-width: 320px) and (max-width: 599px){
  .grid-item {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .grid-item {
    width: 50%;
  }
}
body {
  background: #7474BF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.half {
  width: 50%;
}
.full {
  width: 100%;
}
.main {
  margin-top: 25px;
}
.post-add {
  position: fixed;
  bottom: 40px;
  right: 40px;
  /*margin-bottom:30px;*/
}
</style>
