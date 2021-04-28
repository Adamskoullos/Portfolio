<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email" @click="handleReset" required>
    <input type="Password" placeholder="Password" v-model="password" @click="handleReset" required>
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Login</button>
    <button class="loading" v-if="isPending">Loading...</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'
import { useRouter } from 'vue-router'

export default {
  emits: ['login'],
  setup(props, context){
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const { error, login, isPending } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if(!error.value){
          context.emit('login')
          router.push({ name: 'NewBlog' })
      }
    }

    const handleReset = ()=> {
      error.value = null
    }

    return { error, email, password, handleSubmit, isPending, handleReset }
  }
}

</script>

<style lang="scss" scoped>
form{
  h3{
    font-weight: 300;
    margin: 20px auto;
  }
  margin: auto;
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
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
    background: #00C587;
    color: white;
    font-weight: 500;
    span{
      color: white;
    }
  }
}
</style>