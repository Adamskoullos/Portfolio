<template>
  <div class="container-fluid">
    <div class="row top-nav">
      <div class="col top-nav-col">

      </div>
    </div>
    <div class="row main-row">
      <div class="col-2 side-nav-container">

      </div>
      <div class="col content-col">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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
