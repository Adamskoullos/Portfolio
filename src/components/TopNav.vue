<template>
    <div class="top-nav-container row">
        <div class="logo col-12 col-sm-4" >
            <router-link :to="{ name: 'Projects' }" >
                <h2 >Adam Skoullos</h2>
            </router-link>
        </div>
        <nav class="top-nav-row col-12 col-sm-8">
            <ul class="">
                <li class="nav-item" >
                    <router-link :to="{ name: 'Home' }">
                        <i class="bi bi-house-fill"></i>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link :to="{ name: 'Projects' }">
                        <i class="bi bi-grid-fill"></i>
                    </router-link>
                </li>
                <li class="nav-item" >
                  <router-link :to="{ name: 'CodingChallenges' }">
                      <i class="bi bi-puzzle-fill"></i>
                  </router-link>
                </li>
                <li class="nav-item" >
                  <router-link :to="{ name: 'Blog' }">
                      <i class="bi bi-chat-left-text-fill"></i>
                  </router-link>
                </li>
                <li class="nav-item" >
                    <a href="https://github.com/Adamskoullos" target="_blank">
                        <i class="bi bi-github"></i>
                    </a>
                </li>
                <li class="nav-item" >
                    <a href="https://drive.google.com/file/d/1IwWi7S0WE8t9c4LKK0aTs_Y3b0YrDq8x/view?usp=sharing" download target="_blank">
                        <i class="bi bi-file-earmark-person-fill"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {

    
}
</script>

<style lang="scss" scoped>
.top-nav-container{
    display: flex;
    align-items: center;
    // justify-content: ;
    // background: cornflowerblue;
    flex:1;
    box-shadow: 0px 1px 5px rgba(50,50,50,0.3);

    .top-nav-row{
    height: 100%;
    flex:1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0;
    margin: auto 15px;
    // background: chartreuse;

        ul{
            margin: auto 0;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            // background: red;
            padding-left: 0;
            padding-right: 0;
            margin-right: 15px;

            li{
                a{
                box-shadow: 1px 1px 5px rgba(50,50,50,0);
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0;
                    i{
                    font-size: 26px;
                    margin: auto 10px;
                    color: $icon;
                    }
                    
                    i:hover{
                        transform: scale(1.1);
                    }
                }
                
                .router-link-active{
                    box-shadow: 1px 1px 5px rgba(50,50,50,0);
                    
                    i{
                        color: $active-link-icon;
                        transform: scale(1.2);
                        transition: all ease 0.1s;
                    }
                }
            }
        }

        
        
        
    }
    div a{
        text-decoration: none;
        h2{
        margin: 15px 15px;
        font-weight: 300;
        }
    }
}
</style>