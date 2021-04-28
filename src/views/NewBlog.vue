<template>
    <div class="row">
        <form @submit.prevent="handleSubmit" class="col-12" >
            <h4>Create new blog post</h4>
            <input type="text" placeholder="Post title" v-model="title"  required>
            <textarea placeholder="Headline" v-model="headline"  required></textarea>
            <textarea placeholder="post" v-model="post" required></textarea>
            <div v-if="!image">
                <label for="file-upload" class="file-upload-button">Add post image</label>
                <span>Required</span>
            </div>
            <label v-if="image" for="file-upload" class="file-upload-button loaded">Image loaded</label>
            <input id="file-upload" type="file" @change="handleChange">
            <div class="error">{{ fileError }}</div>
            <button  v-if="!isPending">Upload post</button>
            <button  v-if="isPending" class="loading">Uploading...</button>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '../composables/useStorage'
import useCollection from '../composables/useCollection'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import { useRouter } from 'vue-router'

export default {
      setup(){
        const title = ref('')
        const headline = ref('')
        const post = ref('')
        const postImage = ref(null)
        const fileTypes = ['image/png', 'image/jpeg']
        const fileError = ref(null)
        const isPending = ref(false)
        const image = ref(false)

        const { uploadImage, error, filePath, url } = useStorage()
        const { addDoc } = useCollection('posts')
        const { user } = getUser()
        const router = useRouter()

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
            post: post.value,
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
            projectImage.value = null
            title.value = ''
            description.value = ''
            fileError.value = null
            image.value = false
        } 
        
        }

        const handleChange = (e) => {
        const selected = e.target.files[0]
        if(selected && fileTypes.includes(selected.type)){
            image.value = true
            projectImage.value = selected
            fileError.value = null
        } else{
            image.value = false
            projectImage.value = null
            fileError.value = 'Please select an image file, jpeg or png'
        }
        }

        return { title, headline, post, projectImage, fileError, handleSubmit, handleChange, error, isPending, image }
  }
}

</script>

<style>

</style>