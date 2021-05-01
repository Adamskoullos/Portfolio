<template>
  <div class="main-wrapper">
    <div v-if="error">{{ error }}</div>
    <div v-if="document" class="blog-wrapper">
      <h1>{{ document.title }}</h1>
      <h4 class="headline">{{ document.headline }}</h4>
      <div class="row">
        <div class="image col-12 col-lg-6">
        <img :src="document.imageUrl" alt="blog image">
      </div>
      <div class="details col-12 col-lg-6">
        <h2>{{ document.mainHeading }}</h2>
        <div v-html="markdown" class="markdown-body"></div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import getDocument from '../composables/getDocument'
import marked from 'marked'
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-light.css';
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
  width: 100%;
  color: red;
}
.main-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1{
    margin: 15px auto;
    font-weight: 300;
  }
  h2{
    margin: 10px auto 20px auto;
    font-weight: 400;
  }

  h4.headline{
    margin: 20px auto;
    font-weight: 400;
  }
  .image{
    margin: 20px auto;
    padding: 0;
    width:90%;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  img{
    margin: 20px auto;
    max-width: 100%;
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
    width:90%;
    max-width: 900px;
  }
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
</style>