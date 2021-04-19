<template>
  <div class="container-fluid">
    <div class="row">
      <div v-if="showSideNav" class="col-2 side-nav-col">
        <SideNav />
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
import SideNav from './components/SideNav.vue'
import { ref } from '@vue/reactivity'
import { onBeforeMount, onBeforeUpdate, onUnmounted } from '@vue/runtime-core'
export default {
  components: {SideNav},
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $primary
  }
.container-fluid{
  width: 100vw;
  padding-right: 0;
  padding-left: 0;
  .side-nav-col{
    // background: chocolate;
    min-height: 100vh;
    min-width: 240px;
    padding: 0;
    // border-right: 1px solid rgba(0, 0, 0, 0.11);
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
      background: rgb(255, 255, 255);
      height: 100vh;
      padding-top: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}


</style>
