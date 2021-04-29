<template>
    <h1>Welcome to my developer journal</h1>
    <input type="text" v-model="search" placeholder="Title search" class="search">
    <div class="row row-cols-1 row-cols-md-3 g-4 posts-wrapper">
        <div class="col" v-for="post in postSearch" :key="post.id">
            <router-link :to="{ name: 'SingleBlog', params: {id: post.id} }" class="post-wrapper">
                <div class="card h-100">
                    <img :src="post.imageUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
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
    font-weight: 200;
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
    margin: 0;
    text-decoration: none;

    .card{
        border: none;
        box-shadow: 1px 1px 3px rgba(50,50,50,0.3);
        border-radius: 0px;
        transition: all ease 0.4s;

        img{
            border-radius: 0;
        }
        .card-body{
            h3{
                margin: 5px 0;
                text-align: left;
                text-decoration: none;
                font-weight: 300;
            }
            p{
                text-align: justify;
            }
        }
    }
}


.post-list-wrapper{
    width: 100%;
    // height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    margin: 0px auto 20px auto;
    // background: chartreuse;

    .post{
        min-width: 250px;
        max-width: 800px;
        flex: 1;
        height:100%;
        // background: brown;
        a.route-tag{
            background: cadetblue;
            height: 500px;
        }
        .card{
            flex:1;
            border-radius: 0px;
            border: none;
            box-shadow: 1px 1px 3px rgba(50,50,50,0.3);
            transition: all ease 0.4s;
            // background: burlywood;

            img{
                border-radius: 0;
            }
            .card-body{
                h3{
                    margin: 5px 0;
                    text-align: left;
                    text-decoration: none;
                    font-weight: 300;
                }
                p{
                    text-align: justify;
                }
            }
        }
        .card:hover{
            // background: rgba(228, 228, 228, 0.411);
            transition: all ease 0.4s;
            box-shadow: 2px 3px 6px rgba(50,50,50,0.3);
            transform: scale(1.01);
        }
    }
}

</style>