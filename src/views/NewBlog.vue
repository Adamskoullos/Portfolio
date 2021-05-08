<template>
    <div class="row new-blog">
        <form @submit.prevent="handleSubmit" class="col-12" >
            <h4>Create new blog post</h4>
            <input type="text" placeholder="Post title" v-model="title"  required>
            <textarea placeholder="Headline" v-model="headline"  required></textarea>
            <input type="text" placeholder="Main Heading" v-model="mainHeading"  required>
            <textarea placeholder="Main one" v-model="mainOne" required></textarea>
            <div v-if="!image">
                <label for="file-upload" class="file-upload-button">Add post image</label>
            </div>
            <label v-if="image" for="file-upload" class="file-upload-button loaded">Image loaded</label>
            <input id="file-upload" type="file" @change="handleChange">
            <div class="error">{{ fileError }}</div>
            <button  v-if="!isPending">Upload post</button>
            <button  v-if="isPending" class="loading">Uploading...</button>
        </form>
        <div class="marked col-12">
          <div v-html="markdown" class="markdown-div"></div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '../composables/useStorage'
import useCollection from '../composables/useCollection'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import { useRouter } from 'vue-router'
import marked from 'marked'
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';
// import 'highlight.js/styles/a11y-light.css';
import 'highlight.js/styles/solarized-dark.css';
import { computed } from '@vue/runtime-core'

export default {
      setup(){
        const title = ref('')
        const headline = ref('')
        const mainHeading = ref('')
        const mainOne = ref('')
        const mainTwo = ref('')
        const mainThree = ref('')
        const postImage = ref(null)
        const fileTypes = ['image/png', 'image/jpeg']
        const fileError = ref(null)
        const isPending = ref(false)
        const image = ref(false)

        const { uploadImage, error, filePath, url } = useStorage()
        const { addDoc } = useCollection('posts')
        const { user } = getUser()
        const router = useRouter()

        const markdown = computed(() => {
          return DOMPurify.sanitize(marked(mainOne.value, {
            highlight(md){
              return hljs.highlightAuto(md).value
            }
          }));
        })

        const handleSubmit = async () => {
        if(!postImage.value){
            fileError.value = 'Please select an image to load'
        }
        if(postImage.value){
            isPending.value = true
            await uploadImage(postImage.value)
            const res = await addDoc({
            title: title.value,
            headline: headline.value,
            mainHeading: mainHeading.value,
            mainOne: markdown.value,
            mainTwo: mainTwo.value,
            mainThree: mainThree.value,
            userId: user.value.uid,
            userName: user.value.displayName,
            imageUrl: url.value,
            filePath: filePath.value,
            createdAt: timestamp()
            })
            if(!error.value){
            isPending.value = false
            router.push({ name: 'SingleBlog', params: { id: res.id } })
            }
            postImage.value = null
            title.value = ''
            headline.value = ''
            fileError.value = null
            image.value = false
        } 
        
        }

        const handleChange = (e) => {
        const selected = e.target.files[0]
        if(selected && fileTypes.includes(selected.type)){
            image.value = true
            postImage.value = selected
            fileError.value = null
        } else{
            image.value = false
            projectImage.value = null
            fileError.value = 'Please select an image file, jpeg or png'
        }
        }

        return { markdown, title, headline, mainHeading, mainOne, mainTwo, mainThree, postImage, fileError, handleSubmit, handleChange, error, isPending, image }
  }
}

</script>

<style lang="scss" scoped>
.new-blog{
  margin-right: 15px;
  margin-left: 15px;
  padding-top: 60px;
}
.marked{
  margin: 30px auto;
  text-align: justify;
  max-width: 900px;
  // background: red;
}
.markdown-div{
  // display: flex;
  // flex-wrap: wrap;
  width:100%;
  text-align: justify;
  // background: grey;
}

form{
      width: 90%;
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      margin: auto;
      h4{
          margin: 20px auto;
          font-weight: 300;
      }
      input{
        padding: 10px;
        margin: 10px;
        border: none;
        // box-shadow: $box-shadow;
        box-shadow: 1px 1px 2px rgba(50,50,50,0.4);
        transition: all ease 0.3s;
      }
      input:focus{
        outline: none;
        transition: all ease 0.3s;
        background: rgba(228, 228, 228, 0.164);
        transform: scale(1.005);
        box-shadow: 1px 2px 5px rgba(50,50,50,0.4);
      }
      textarea{
        padding: 10px;
        margin: 10px;
        border: none;
        box-shadow: 1px 1px 2px rgba(50,50,50,0.4);
        transition: all ease 0.3s;
      }
      textarea:focus{
        outline: none;
        transition: all ease 0.3s;
        background: rgba(228, 228, 228, 0.164);
        transform: scale(1.005);
        box-shadow: 1px 2px 5px rgba(50,50,50,0.4);
      }
      input[type="file"]{
        display: none;
    }
      button{
        background: white;
        border: none;
        padding: 10px 10px 9px 10px;
        transition: all ease 0.5s;
        box-shadow: 1px 1px 3px rgba(50,50,50,0.4);
        text-decoration: none;
        margin: 10px auto;
      }
      button:hover{
        // transform: scale(1.02);
        // box-shadow: $box-shadow;
        transition: all ease 0.8s;
        background: rgb(228, 228, 228);
        // background: rebeccapurple;
      }
      button:focus{
        outline: none;
        background: rgb(228, 228, 228);
      }
      button.loading{
        background: $green;
        // color: white;
        font-weight: 400;
        span{
          color: white;
        }
      }
      span{
        color:$icon;
        margin: auto 5px 3px 0;
        vertical-align: middle;
        font-size: 18px;
      }
      .file-upload-button{
        background: white;
        border: none;
        padding: 10px 10px 9px 10px;
        transition: all ease 0.5s;
        box-shadow: 1px 1px 3px rgba(50,50,50,0.4);
        text-decoration: none;
        margin: 10px auto;
        }
    .file-upload-button:hover{
        transition: all ease 0.8s;
        background: rgb(228, 228, 228);
    }
    .loaded{
        background: $green;
        // color: white;
        font-weight: 400;
        // background: rgb(228, 228, 228);
        box-shadow: 1px 1px 3px rgba(50,50,50,0.4);
    }
    .loaded:hover{
        cursor: default;
        transform: scale(1);
        color: $green;
    }
}
@media (min-width: 690px) and (max-width: 800px) {
  .new-blog {
    /* // background-color: #f00; */
    padding-top: 90px;
  }
}
@media (min-width: 600px) and (max-width: 690px) {
  .new-blog {
    padding-top: 120px;
  }
}
@media (min-width: 350px) and (max-width: 600px) {
  .new-blog {
    padding-top: 130px;
  }
}
@media (min-width: 200px) and (max-width: 350px) {
  .new-blog {
    /* // background-color: rgb(255, 196, 0); */
    padding-top: 150px;
  }
}
</style>