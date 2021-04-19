<template>
    <div class="top-nav-container">
        <nav class="top-nav-row">
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
                <router-link :to="{ name: 'Contact' }">
                    <i class="bi bi-envelope-fill"></i>
                </router-link>
            </li>
            <li class="nav-item" >
                <a href="https://github.com/Adamskoullos" target="_blank">
                    <i class="bi bi-github"></i>
                </a>
            </li>
            <li class="nav-item" >
                <a href="https://github.com/Adamskoullos" target="_blank">
                    <i class="bi bi-file-earmark-person-fill"></i>
                </a>
            </li>
            </ul>
        </nav>
        <div class="logo" >
            <router-link :to="{ name: 'Projects' }" >
                <h3 >Adam Skoullos</h3>
            </router-link>
        </div>
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
    justify-content: space-between;
    background: cornflowerblue;
    flex:1;
    .top-nav-row{
    height: 100%;
    flex:1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0px 1px 5px rgba(50,50,50,0.3);
    background: chartreuse;

        ul{
            margin: auto 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            background: red;
            padding-left: 0;
        }

        h3{
            margin: 0 15px;
            font-weight: 300;
        }

        i{
            font-size: 30px;
            margin: 0 15px;
        }
        i:hover{
            transform: scale(1.1);
        }
}
}


</style>