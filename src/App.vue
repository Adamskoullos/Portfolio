<template>
  <div class="container-fluid">
    <div class="row">
      <div v-if="showSideNav" class="col-2 side-nav-col">

      </div>
      <div class="col main-col">
        <div class="row">
          <div v-if="!showSideNav" class="col top-nav">

          </div>
        </div>
        <div class="row">
          <div class="col main-content">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onBeforeMount, onBeforeUpdate, onUnmounted } from '@vue/runtime-core'
export default {
  setup() {
    const showSideNav = ref(false)
  
      onBeforeMount(()=> {
        if(window.innerWidth < 800){
          showSideNav.value = false
        }
        if(window.innerWidth > 800){
            showSideNav.value = true
        }
      })

      window.addEventListener('resize', () =>{
        if(window.innerWidth < 800){
          showSideNav.value = false
        }
        if(window.innerWidth > 800){
          showSideNav.value = true
        }
    })
        
    onBeforeUpdate(() => {
      if(window.innerWidth < 800){
          showSideNav.value = false
        }
        if(window.innerWidth > 800){
          showSideNav.value = true
        }
    })

    onUnmounted(() => {
      window.removeEventListener()
    })

   return {showSideNav} 
  }
}
</script>

<style lang="scss">

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
.container-fluid{
  .side-nav-col{
    background: chocolate;
    min-height: 100vh;
    min-width: 200px;
  }
  .main-col{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    background: darkgray;

    .top-nav{
      position: fixed;
      background: cornflowerblue;
      height: 60px;
    }
    .main-content{
      background: darkgoldenrod;
      height: 100vh;
      padding-top: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
#nav {
    padding: 30px;
  
    a {
      font-weight: bold;
      color: #77ff00;
  
      &.router-link-exact-active {
        color: $primary;
      }
    }
  }

</style>
