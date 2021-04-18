<template>
  
          <nav >
            <div class="logo" >
                <router-link :to="{ name: 'Projects' }" ><h3 >Adam Skoullos</h3></router-link>
            </div>
            <ul class="navbar-nav">
              <li class="nav-item" >
                  <router-link :to="{ name: 'Home' }">
                      <i class="bi bi-house-fill"></i>
                      <h5>Home</h5>
                  </router-link>
              </li>
              <li class="nav-item" >
                  <router-link :to="{ name: 'Projects' }">
                      <i class="bi bi-grid-fill"></i>
                      <h5>Projects</h5>
                  </router-link>
              </li>
              <li class="nav-item" >
                  <router-link :to="{ name: 'CodingChallenges' }">
                      <i class="bi bi-puzzle-fill"></i>
                      <h5>Coding Challenges</h5>
                  </router-link>
              </li>
              <li class="nav-item" >
                  <router-link :to="{ name: 'Blog' }">
                      <i class="bi bi-chat-left-text-fill"></i>
                      <h5>Blog</h5>
                  </router-link>
              </li>
              <li class="nav-item" >
                  <router-link :to="{ name: 'Contact' }">
                      <i class="bi bi-envelope-fill"></i>
                      <h5>Contact</h5>
                  </router-link>
              </li>
              <li class="nav-item" >
                  <router-link :to="{ name: 'Certifications' }">
                      <i class="bi bi-award-fill"></i>
                      <h5>Certifications</h5>
                  </router-link>
              </li>
              <li class="nav-item" >
                  <a href="https://github.com/Adamskoullos" target="_blank">
                    <i class="bi bi-github"></i>
                    <h5>GitHub Profile</h5>
                </a>
              </li>
            </ul>
          </nav>
     
</template>

<script>
export default {

}
</script>

<style lang="scss">
  
nav{
    background: rgb(255, 255, 255);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content:flex-start;
    position: relative;
    z-index: 10;
    margin: auto 0;
    min-width: 230px;
    box-shadow: 1px 0px 6px rgba(50,50,50,0.2);
    
    .logo h3{
        font-size: 30px;
        margin: 10vh auto;
    }
    ul{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        li{
            // background: blueviolet;
            display: flex;
            justify-content: stretch;
            a{
                // background: cadetblue;
                width: 100%;
                display: flex;
                align-items: center;
                text-decoration: none;
                height: 60px;
                h5{
                    display: inline-block;
                    margin: auto 10px;
                }
                i{
                    font-size: 24px;
                    margin-left: 15px;
                }
            }
        }
    }
}
</style>