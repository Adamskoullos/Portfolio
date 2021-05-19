<template>
  <div class="container-fluid">
    <div class="row">
      <div v-if="showSideNav" class="col-2 side-nav-col">
        <SideNav @scroll="scrollUp" :user="user" />
      </div>
      <div class="col main-col">
        <div class="row">
          <div v-if="!showSideNav" class="col top-nav">
            <TopNav @scroll="scrollUp" />
          </div>
        </div>
        <div class="row">
          <div class="col main-content" ref="mainContent">
            <router-view :user="user" @scroll="scrollUp" v-slot="{ Component }">
              <transition name="route" mode="out-in">
                <component :is="Component"></component>
              </transition>
            </router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SideNav from "./components/SideNav.vue";
  import TopNav from "./components/TopNav.vue";
  import { ref } from "@vue/reactivity";
  import {
    onBeforeMount,
    onBeforeUpdate,
    onUnmounted,
  } from "@vue/runtime-core";
  import getUser from "./composables/getUser";

  export default {
    props: ["login"],
    components: { SideNav, TopNav },
    setup() {
      const showSideNav = ref(false);
      const mainContent = ref(null);
      const { user } = getUser();

      const scrollUp = () => {
        mainContent.value.scroll(0, 0);
      };

      onBeforeMount(() => {
        if (window.innerWidth < 800) {
          showSideNav.value = false;
        }
        if (window.innerWidth > 800) {
          showSideNav.value = true;
        }
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth < 800) {
          showSideNav.value = false;
        }
        if (window.innerWidth > 800) {
          showSideNav.value = true;
        }
      });

      onBeforeUpdate(() => {
        if (window.innerWidth < 800) {
          showSideNav.value = false;
        }
        if (window.innerWidth > 800) {
          showSideNav.value = true;
        }
      });

      onUnmounted(() => {
        window.removeEventListener();
      });

      return { showSideNav, mainContent, scrollUp, user };
    },
  };
</script>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $primary;
  }
  .material-icons {
    font-family: "Material Icons" !important;
  }
  .container-fluid {
    width: 100vw;
    // padding-right: 0;
    // padding-left: 0;
    max-height: 100vh;
    .side-nav-col {
      // background: chocolate;
      height: 100vh;
      min-width: 240px;
      padding: 0;
      // border-right: 1px solid rgba(0, 0, 0, 0.11);
    }
    .main-col {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      background: rgb(255, 255, 255);

      .top-nav {
        position: fixed;
        // background: cornflowerblue;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: stretch;
        padding-right: 0;
        padding-left: 0;
        z-index: 1;
      }
      .main-content {
        height: 100vh;
        padding-top: 0px;
        padding-right: 0;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        overflow: auto;
        z-index: 0;
      }
    }
  }
  .main-content::-webkit-scrollbar {
    width: 0px; /* width of the entire scrollbar */
  }

  .main-content::-webkit-scrollbar-track {
    background: rgb(168, 168, 168); /* color of the tracking area */
  }
  // router transitions
  .route-enter-from {
    opacity: 1;
    transform: scale(0);
  }
  .route-enter-active {
    transition: all 0s ease-in;
  }
  .route-leave-to {
    opacity: 1;
    transform: scale(0);
  }
  .route-leave-active {
    transition: all 0s ease-out;
  }
</style>
