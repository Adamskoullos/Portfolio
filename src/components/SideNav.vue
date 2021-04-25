<template>
          <nav >
            <div class="logo" >
                <transition appear
                @before-enter="imageBeforeEnter"
                @enter="imageEnter">
                    <div class="image">
                        <img src="../assets/images/profile_pic.jpg" alt="Adam Skoullos">
                    </div>
                </transition>
                <transition appear
                @before-enter="nameBeforeEnter"
                @enter="nameEnter">
                <router-link :to="{ name: 'Home' }" @click="handleScroll">
                    <h3 >Adam Skoullos</h3>
                    <h5>Developer</h5>
                </router-link>
                </transition>
            </div>
            <transition appear
            @before-enter="ulBeforeEnter"
            @enter="ulEnter">
            <ul class="navbar-nav">
                <li class="nav-item" >
                    <router-link :to="{ name: 'Home' }" @click="handleScroll">
                        <i class="bi bi-house-fill"></i>
                        <h5>Home</h5>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link :to="{ name: 'Projects' }" @click="handleScroll">
                        <i class="bi bi-grid-fill"></i>
                        <h5>Projects</h5>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link :to="{ name: 'CodingChallenges' }" @click="handleScroll">
                        <i class="bi bi-puzzle-fill"></i>
                        <h5>Coding Challenges</h5>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link :to="{ name: 'Blog' }" @click="handleScroll">
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
                    <router-link :to="{ name: 'Certifications' }" @click="handleScroll">
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
                    <a href="https://drive.google.com/file/d/1IwWi7S0WE8t9c4LKK0aTs_Y3b0YrDq8x/view?usp=sharing" download target="_blank">
                        <i class="bi bi-file-earmark-person-fill"></i>
                        <h5>Resume PDF</h5>
                    </a>
                </li>
            </ul>
            </transition>
          </nav>
</template>

<script>
import gsap from 'gsap'

export default {
    setup(props, context){
        const handleScroll = ()=>{
            context.emit('scroll')
        }

        const imageBeforeEnter = (el) => {
          el.style.transform = 'scale(0)'
          el.style.opacity = 1
        }

        const imageEnter = (el) => {
          gsap.to(el, {
            x:0,
            opacity: 1,
            scale: 1,
            delay:1.9,
            duration: 1,
            ease: 'elastic',
          })
        }

        const nameBeforeEnter = (el) => {
          el.style.transform = 'scale(0)'
          el.style.opacity = 1
        }

        const nameEnter = (el) => {
          gsap.to(el, {
            x:0,
            opacity: 1,
            scale: 1,
            delay:1.4,
            duration: 1,
            ease: 'elastic',
          })
        }

        const ulBeforeEnter = (el) => {
        //   el.style.transform = 'translateX(-400px)'
            el.style.transform = 'scale(0)'
            el.style.opacity = 1
        }

        const ulEnter = (el) => {
          gsap.to(el, {
            x:0,
            opacity: 1,
            scale: 1,
            delay:0.7,
            duration: 0.2,
            ease: 'sine',
          })
        }


        return {
            handleScroll, 
            imageBeforeEnter, 
            imageEnter, 
            nameBeforeEnter, 
            nameEnter,
            ulBeforeEnter,
            ulEnter}
    }
}
</script>

<style lang="scss">

nav::-webkit-scrollbar {
    width: 0px;               /* width of the entire scrollbar */
}

nav::-webkit-scrollbar-track {
background: rgb(168, 168, 168);        /* color of the tracking area */
}

nav{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content:flex-start;
    position: relative;
    z-index: 10;
    min-width: 230px;
    box-shadow: 1px 0px 1px rgba(90, 90, 90, 0.1);
    overflow: auto;

    
    
    .logo {
        margin: 5vh auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100;
        
        .image{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 150px;
            width: 150px;
            overflow: hidden;
            border-radius: 50%;
            // box-shadow: 0px 0px 6px rgba(50,50,50,0.4);
            box-shadow: 1px 1px 4px rgba(50,50,50,0.4);
            img{
                flex:1;
                margin-left: auto;
                margin-right: auto;
                width: 100%;
            }
        }
        i{
            font-size: 30px;
        }
        i::before{
            vertical-align: -.2em;
        }
        a {
        text-decoration: none;
        padding-top: 10px;
        
            h3{
            font-weight: 200;
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
                background: white;
                transition: all ease 0s;
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
                box-shadow: $box-shadow;
                transition: all ease 0.1s;
            }
            a.projects{
                background: rgba(255, 255, 255, 0);;
            }
            a.projects:hover{
                transform: scale(1);
                box-shadow: 0 0 0 rgb(0,0,0,0);
            }
            a.project{
                width: 100%;
                background: olive;
            }
            .router-link-active{
                transition: all ease 0.1s;
                transform: scale(1.02);
                box-shadow: $box-shadow;
                h5{
                    color:$active-link-font-color;
                    font-weight: 300;
                }
                i{
                    color: $active-link-icon;
                }
            }
            .nav-link{
                display: flex;
                padding: 0;

                
            }
        }
        .drop-down-ul{
            width: 100%;
        }
        .drop-down{
            display: flex;
            flex-direction: column;
            align-items: flex-start;

        }
    }
}
</style>