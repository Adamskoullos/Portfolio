<template>
  <div class="form-wrapper">
    <h3>Thank you for getting in touch</h3>
    <p>For security reasons I do not show personal data, please fill out the form below with a short message and I will promptly come back to you from my direct email. You can leave your number if you prefer me to call you directly. Thank you</p>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Name" v-model="name" required>
      <input type="email" placeholder="Email" v-model="email" required>
      <input type="number" placeholder="Phone" v-model="phone">
      <textarea type="text" placeholder="Message" v-model="message"></textarea>
      <button v-if="!sending">Send</button>
      <button v-if="sending" class="sending">Sending...</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  setup(){
    const name = ref('')
    const email = ref('')
    const phone = ref('')
    const message = ref('')
    const sending = ref(false)
    const router = useRouter()
    const handleSubmit = () => {
      router.push({ name: 'Projects'})
    }

    return {name, email, phone, message, sending, handleSubmit}
  }
}
</script>

<style lang="scss">
.form-wrapper{
    margin: 10vh auto auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
      margin: 20px auto;
      font-weight: 200;
    }
    p{
      width: 90%;
      max-width: 1000px;
      text-align: center;
      margin: 15px auto;
    }
    form{
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
        box-shadow: $box-shadow;
      }
      input:focus{
        outline: none;
        transition: all ease 0.8s;
        background: rgb(228, 228, 228);
      }
      textarea{
        padding: 10px;
        margin: 10px;
        border: none;
        box-shadow: $box-shadow;
      }
      textarea:focus{
        outline: none;
        transition: all ease 0.8s;
        background: rgb(228, 228, 228);
      }
      button{
        background: white;
        border: none;
        padding: 10px;
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
      button.sending{
        background: #00C587;
        color: white;
        font-weight: 500;
      } 
    }
}  
</style>