<template>
  <div class="wrapper">
        <div class="button-wrapper">
            <router-link :to="{ name: 'NewBlog' }" class="button" @click="handleScroll" v-if="user">
                <span class="material-icons">create</span>
                New post
            </router-link>
        </div>
        <div class="posts-window">
            <div v-if="error" class="error">
                <h4>Cannot access the the Blog database</h4>
            </div>
            <div v-if="documents" class="posts">
                <BlogList :posts="documents" />
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import BlogList from '../components/BlogList.vue'


export default {
  components: { BlogList },
  emit: ['scroll'],
  props: ['user'],
  setup(props, context){

      const { documents, error } = getCollection('posts')

      const handleScroll = ()=>{
          context.emit('scroll')
      }

      return { handleScroll, documents, error }
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    a{
      display: flex;
      align-items: center;
      color: $primary;
      span{
        font-size: 20px;
        margin-right: 7px;
        padding-bottom: 3px;
        color: $primary;
      }
    }
    a:hover{
      color: $primary;
    }
}
.wrapper{
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    box-sizing: border-box; 
    justify-content: flex-start;
    align-items: stretch;
}
.posts-window{
    display: flex;
    flex:1;
}
.posts{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>