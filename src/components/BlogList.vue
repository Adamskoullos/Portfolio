<template>
    <h1>Welcome to my developer journal</h1>
    <input type="text" v-model="search" placeholder="Title search" class="search">
    <div class="row row-cols-1 row-cols-md-2 g-4 posts-wrapper">
        <div class="col-12 col-sm-6 col-lg-4 col-xxl-3 post-wrapper" v-for="post in postSearch" :key="post.id">
            <router-link :to="{ name: 'SingleBlog', params: {id: post.id} }" class="">
                <div class="card h-100">
                    <img :src="post.imageUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">{{ post.title }}</h3>
                        <p class="card-text">{{ post.headline }}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'


export default {
    props: ['posts'],
  setup(props){
    const search = ref('')

    const postSearch = computed(() => {
      return props.posts.filter(post => {
        return post.title.toLowerCase().match(search.value.toLowerCase())
      })
    })

    return { search, postSearch }
  }
}
</script>

<style lang="scss" scoped>
h1{
    font-weight: 400;
    color: rgb(100, 100, 100);
    margin: 0 auto 15px auto;
}
a{
    text-decoration: none;
}
input.search{
    
    padding: 12px;
    margin: 10px;
    border: none;
    // box-shadow: $box-shadow;
    box-shadow: 1px 1px 2px rgba(50,50,50,0.4);
    transition: all ease 0.3s;
    width: 95%;
    max-width: 700px;
}
input.search:focus{
    outline: none;
    transition: all ease 0.3s;
    background: rgba(228, 228, 228, 0.164);
    transform: scale(1.004);
    box-shadow: 1px 2px 5px rgba(143, 143, 143, 0.4);
}
.posts-wrapper{
    margin: 5px auto 20px auto;
    text-decoration: none;
    display: flex;
    justify-content: center;

    .post-wrapper{
        margin: 20px 0;
    }

    .card{
        flex:1;
        border: none;
        // box-shadow: 1px 1px 3px rgba(50,50,50,0.3);
        box-shadow: 0px 0px 3px rgba(50,50,50,0.5);
        border-radius: 0px;
        transition: all ease 0.4s;
        margin: 10px;

        img{
            border-radius: 0;
        }
        .card-body{
            h3{
                margin: 5px 0 10px 0;
                // text-align: left;
                text-decoration: none;
                font-weight: 500;
                color: rgb(100, 100, 100);
            }
            p{
                text-align: center;
            }
        }
    }
    .card:hover{
        transition: all ease 0.4s;
        // box-shadow: 2px 3px 6px rgba(50,50,50,0.3);
        box-shadow: 2px 3px 10px rgba(50,50,50,0.5);
        transform: scale(1.01);
    }
}


</style>