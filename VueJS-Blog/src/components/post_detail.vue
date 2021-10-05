<template>
    <span>
      <v-parallax :src="post.image" class="full" v-if="post.id"></v-parallax>
      <v-container class="content container">
        <v-layout row wrap>
          <v-flex sm12>
            <br>
             <h4 class="center primary--text " >{{ post.title }}</h4> 
             <h6 class="center primary--text ">{{ post.author}} </h6>
             <h6 class="center primary--text ">{{ post.createdAt}} </h6>
             <p class="primary--text">
               {{ post.text }}
             </p>
          </v-flex>
          <router-link :to="{name: 'home'}" class=""> Home</router-link>
        </v-layout>  
      </v-container> 
      
    </span>  
</template>
<script>
import HTTP from '@/HTTP'
export default {
  data () {
    return {
      post: []
    }
  },
  created () {
    HTTP.get('https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles/' + this.$route.params.post_id)
    .then(response => {
      this.post = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
.container {
  width: 100% !important;
  padding: 0px;
}
.content {
  padding: 16px !important;
}
.center {
  text-align:center;
}
.full {
  width: 100%;
}
.post-add {
  position: fixed;
  bottom: 40px;
  right: 40px;
  /*margin-bottom:30px;*/
}

.primary--text{
  text-transform: capitalize;
  color: #fff !important;
}
</style>