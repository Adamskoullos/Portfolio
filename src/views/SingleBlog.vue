<template>
  <div class="main-wrapper">
    <div v-if="error">{{ error }}</div>
    <div v-if="document" class="blog-wrapper">
      <h1>{{ document.title }}</h1>
      <h4 class="headline">{{ document.headline }}</h4>
        <div class="image ">
          <img :src="document.imageUrl" alt="blog image">
        </div>
        <div class="details ">
          <!-- <h2>{{ document.mainHeading }}</h2> -->
          <div v-html="markdown" class="markdown-body"></div>
        </div>
    </div>
    <div class="buttons">
      <router-link :to="{ name: 'Contact' }" class="contact-button">
        <span><i class="bi bi-envelope-fill"></i>Contact</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import getDocument from '../composables/getDocument'
import marked from 'marked'
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-light.css';
// import 'highlight.js/styles/obsidian.css';
import { computed } from '@vue/runtime-core'

export default {
  props: ['id'],
  setup(props){

    const { document, error } = getDocument('posts', props.id)

    const markdown = computed(() => {
          return marked(document.value.mainOne, {
            highlight(md){
              return hljs.highlightAuto(md).value
            }
         });
        })

    return { error, document, markdown }
  }
}
</script>

<style lang="scss" scoped>

.markdown-body{
  box-sizing: border-box;
  text-align: justify;
  width: 90%;
  // background: red;
  margin: auto;
  padding: 10px;
  color: red; 
  h1, h2{
    color: red;
  }
  
}
.main-wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // background: grey;

  .blog-wrapper{
    flex:1;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background: cornflowerblue;
    h1{
    margin: 15px auto;
    font-weight: 300;
    color: rgb(100, 100, 100)
    }
    h2{
      margin: 10px auto 20px auto;
      font-weight: 400;
      color: rgb(68, 68, 68);
    }

    h4.headline{
      margin: 20px auto;
      font-weight: 400;
      color: rgb(100, 100, 100)
    }
    .image{

      margin: 20px auto;
      padding: 0;
      width:90%;
      // max-width: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      // background: green;
      
    }
    img{
      margin: 20px auto;
      width: 100%;
      max-width: 400px;
      padding: 0px;
      // box-shadow: 2px 3px 10px rgba(50,50,50,0.5);
    }
    p{
      margin: 20px auto;
      text-align: justify;
      padding: 20px;
    }
    .details{
      margin: 20px auto;
      width:100%;
      padding: 0;
      max-width: 900px;
      // background: greenyellow;
      h2{
        font-weight: 300;
      }
    }
  }
}
.language-js{
        background: cornsilk;
        margin: 300px;
      }
@media (min-width: 690px) and (max-width: 800px) {
  .main-wrapper {
    /* // background-color: #f00; */
    padding-top: 30px;
  }
}
@media (min-width: 600px) and (max-width: 690px) {
  .main-wrapper {
    padding-top: 60px;
  }
}
@media (min-width: 350px) and (max-width: 600px) {
  .main-wrapper {
    padding-top: 70px;
  }
}
@media (min-width: 200px) and (max-width: 350px) {
  .main-wrapper {
    /* // background-color: rgb(255, 196, 0); */
    padding-top: 90px;
  }
}
.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;

}
.contact-button{
  margin: 20px;
  background: $green;
  border: none;
  padding: 10px;
  transition: all ease 0.5s;
  box-shadow: 1px 1px 3px rgba(50,50,50,0.4);
  text-decoration: none;
  span{
    color: white;
    font-weight: 500;
    i{
      color: white;
      margin-right: 10px;
    }
  }
}
  .contact-button:hover{
    background: #30465F;
    transition: all ease 0.7s;
  }
</style>