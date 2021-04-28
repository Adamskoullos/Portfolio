<template>
  <div class="div">
    <h1>Blog</h1>
    <router-link :to="{ name: 'NewBlog' }" class="button" @click="handleScroll">
      <span class="material-icons">open_in_full</span>New Blog Post
    </router-link>
  </div>
</template>

<script>
export default {
  setup(props, context){
      const handleScroll = ()=>{
          context.emit('scroll')
      }

      return {handleScroll}
  }
}
</script>

<style>

</style>