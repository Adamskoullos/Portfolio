<template>
  <div class="row">
      <div class="col nav-container">
          <nav >
            <div class="logo" >
                <router-link :to="{ name: 'Projects' }" ><h3 >Adam Skoullos</h3></router-link>
            </div>
            <div class="nav-spacer"></div>
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item" >
                  <span>Resume Download</span>
              </li>
              <li class="nav-item" >
                  <span>GitHub</span>
              </li>
              <li class="nav-item" >
                  <router-link :to="{ name: 'Home' }"  class="">Home</router-link>
              </li>
              <li class="nav-item" >
                  <router-link :to="{ name: 'Projects' }"  class="">Projects</router-link>
              </li>
              <li class="nav-item" >
                  <router-link :to="{ name: 'CodingChallenges' }"  class="">Coding Challenges</router-link>
              </li>
              <li class="nav-item" >
                  <router-link :to="{ name: 'Blog' }"  class="">Blog</router-link>
              </li>
              <li class="nav-item" >
                  <router-link :to="{ name: 'Contact' }"  class="">Contact</router-link>
              </li>
              <li class="nav-item" >
                  <router-link :to="{ name: 'Certifications' }"  class="">Certifications</router-link>
              </li>
            </ul>
          </nav>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.nav-container{
    height: 100vh;
    nav{
        background: chartreuse;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-evenly;
        ul{
            display: flex;
            flex-direction: column;
            align-items: stretch;
            li{
                display: flex;
                justify-content: flex-start;
            }
        }
    }
}
</style>