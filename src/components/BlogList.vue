<template>
  <div class="header">
    <img
      src="../assets/images/real-blog2.jpg"
      alt="background"
      class="background"
    />
    <h1>Welcome to my journal</h1>
    <input
      type="text"
      v-model="search"
      placeholder="Title search"
      class="search"
    />
  </div>
  <div class="row row-cols-1 row-cols-md-2 g-4 posts-wrapper">
    <div
      class="col-12 col-sm-6 col-lg-4 col-xxl-3 post-wrapper"
      v-for="post in postSearch"
      :key="post.id"
    >
      <router-link
        :to="{ name: 'SingleBlog', params: { id: post.id } }"
        class=""
      >
        <div class="card h-100">
          <img :src="post.imageUrl" class="card-img-top" alt="..." />
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
  import { ref } from "@vue/reactivity";
  import { computed } from "@vue/runtime-core";

  export default {
    props: ["posts"],
    setup(props) {
      const search = ref("");

      const postSearch = computed(() => {
        return props.posts.filter((post) => {
          return post.title.toLowerCase().match(search.value.toLowerCase());
        });
      });

      return { search, postSearch };
    },
  };
</script>

<style lang="scss" scoped>
  .header {
    // background: chartreuse;
    flex: 1;
    width: 100%;
    padding: 50px 0;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.7);
    position: relative;
    max-height: 300px;
    img.background {
      position: absolute;
      padding-left: 0;
      padding-right: 0;
      margin: auto;
      right: 0;
      left: 0;
      top: 0;
      width: 100%;
      min-height: 100%;
      z-index: -1;
    }
  }
  h1 {
    font-size: 3.3rem;
    font-weight: 300;
    color: rgb(100, 100, 100);
    // color:rgba(255, 255, 255, 0.815);
    margin: 0 auto 15px auto;
  }
  a {
    text-decoration: none;
  }
  input.search {
    padding: 12px;
    margin: 10px;
    border: none;
    // box-shadow: $box-shadow;
    // box-shadow: 1px 1px 2px rgba(50,50,50,0.4);
    box-shadow: 1px 2px 4px rgba(50, 50, 50, 0.4);
    transition: all ease 0.3s;
    width: 95%;
    max-width: 700px;
    background: rgba(255, 255, 255, 0.2);
  }
  input.search:focus {
    outline: none;
    transition: all ease 0.3s;
    background: rgba(228, 228, 228, 0.164);
    transform: scale(1.004);
    box-shadow: 2px 3px 5px rgba(50, 50, 50, 0.4);
    background: rgba(255, 255, 255, 0.4);
  }
  .posts-wrapper {
    margin: 5px auto 20px auto;
    text-decoration: none;
    display: flex;
    justify-content: center;
    padding-right: 15px;
    padding-left: 15px;
    .post-wrapper {
      margin: 20px 0;
    }

    .card {
      flex: 1;
      border: none;
      // box-shadow: 1px 1px 3px rgba(50,50,50,0.3);
      box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);
      border-radius: 0px;
      transition: all ease 0.4s;
      margin: 10px;
      min-width: 230px;

      img {
        border-radius: 0;
      }
      .card-body {
        h3 {
          margin: 5px 0 10px 0;
          // text-align: left;
          text-decoration: none;
          font-weight: 500;
          // color: rgb(100, 100, 100);
          color: rgb(70, 70, 70);
        }
        p {
          text-align: center;
        }
      }
    }
    .card:hover {
      transition: all ease 0.4s;
      // box-shadow: 2px 3px 6px rgba(50,50,50,0.3);
      box-shadow: 2px 3px 10px rgba(50, 50, 50, 0.5);
      transform: scale(1.01);
    }
  }
  @media (min-width: 690px) and (max-width: 800px) {
    .header {
      // background-color: #f00;
      padding-top: 90px;
    }
  }
  @media (min-width: 600px) and (max-width: 690px) {
    .header {
      // background-color: rgb(94, 255, 0);
      padding-top: 100px;
      min-height: 350px;
    }
  }
  @media (min-width: 350px) and (max-width: 600px) {
    .header {
      // background-color: rgb(255, 196, 0);
      padding-top: 130px;
      min-height: 360px;
    }
  }
  @media (min-width: 200px) and (max-width: 350px) {
    .header {
      // background-color: rgb(255, 196, 0);
      padding-top: 130px;
      min-height: 400px;
    }
  }
</style>
