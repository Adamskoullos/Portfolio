<template>
          <nav >
            <div class="logo" >
                <router-link v-if="!showBurgerMenu" :to="{ name: 'Projects' }" >
                    <h3 >Adam Skoullos</h3>
                    <h5>Web Dev</h5>
                </router-link>
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
              <li class="nav-item" >
                  <a href="https://github.com/Adamskoullos" target="_blank">
                    <i class="bi bi-file-earmark-person-fill"></i>
                    <h5>Resume PDF</h5>
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
    background: $test;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content:flex-start;
    position: relative;
    z-index: 10;
    // margin: auto 5px auto 5px;
    // padding: auto 50px;
    min-width: 230px;
    box-shadow: 1px 0px 5px rgba(22, 22, 22, 0.2);
    
    .logo {
        margin: 5vh auto 5vh auto;
        i{
            font-size: 30px;
        }
        a {
        text-decoration: none;
        
            h3{
            font-weight: 300;
            }
            h5{
                font-weight: 300;
            }
        }
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
                margin-right: 3px;
                h5{
                    display: inline-block;
                    margin: auto 10px;
                    font-weight: 300;
                }
                i{
                    font-size: 22px;
                    margin-left: 15px;
                    color: $icon;
                }
            }
            a:hover{
                transform: scale(1.02);
                box-shadow: 0px 1px 5px rgba(50,50,50,0.2);
            }
            a:active{
                background: rgb(250, 250, 250);
            }
        }
    }
}
</style>