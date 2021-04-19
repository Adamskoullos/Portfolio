<template>
  <div class="container-fluid">
    <div class="row">
      <div v-if="showSideNav" class="col-2 side-nav-col">
        <SideNav />
      </div>
      <div class="col main-col">
        <div class="row">
          <div v-if="!showSideNav" class="col top-nav">
            <TopNav />
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
import TopNav from './components/TopNav.vue'
import { ref } from '@vue/reactivity'
import { onBeforeMount, onBeforeUpdate, onUnmounted } from '@vue/runtime-core'
export default {
  components: {SideNav, TopNav},
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
  max-height: 100vh;
  .side-nav-col{
    // background: chocolate;
    height: 100vh;
    min-width: 240px;
    padding: 0;
    // border-right: 1px solid rgba(0, 0, 0, 0.11);
  }
  .main-col{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    background: rgb(255, 255, 255);

    .top-nav{
      position: fixed;
      // background: cornflowerblue;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: stretch;
      padding-right: 0;
      padding-left: 0;
    }
    .main-content{
      height: 100vh;
      padding-top: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}


</style>
