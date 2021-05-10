<template>
  <div class="contact-container">
    <img
      src="../assets/images/home-hero.jpg"
      alt="background"
      class="background cover"
    />
    <div class="form-wrapper">
      <h1><i class="bi bi-envelope-fill"></i>Contact</h1>
      <h3>Thank you for getting in touch</h3>
      <p>
        Please fill out the form below with a short message and I will come back
        to you from my direct email. You can leave your number if you prefer me
        to call you directly. Thank you
      </p>
      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Name" v-model="name" required />
        <input type="email" placeholder="Email" v-model="email" required />
        <input type="number" placeholder="Phone" v-model="phone" />
        <textarea
          type="text"
          placeholder="Message"
          v-model="message"
        ></textarea>
        <div>{{ error }}</div>
        <button v-if="!sending">
          <span class="material-icons">send</span>Send
        </button>
        <button v-if="sending" class="sending">
          <span class="material-icons">send</span>Sending...
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import { ref } from "@vue/reactivity";
  import { useRouter } from "vue-router";
  import emailjs from "emailjs-com";

  export default {
    setup() {
      const name = ref("");
      const email = ref("");
      const phone = ref("");
      const message = ref("");
      const sending = ref(false);
      const error = ref(null);
      const router = useRouter();

      const handleSubmit = async () => {
        sending.value = true;
        const templateParams = {
          name: name.value,
          email: email.value,
          phone: phone.value,
          message: message.value,
        };
        try {
          const res = await emailjs.send(
            "service_2l8gu2j",
            "template_78gjpjd",
            templateParams,
            "user_Z5EDWeJCvIFumIfxti1gd"
          );
          console.log("SUCCESS!", res.status, res.text);
          router.push({ name: "Projects" });
        } catch (err) {
          error.value = err.message;
          console.log(err.message);
        }
        sending.value = false;
        name.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
        error.value = null;
      };
      return { name, email, phone, message, sending, handleSubmit, error };
    },
  };
</script>

<style lang="scss">
  .contact-container {
    flex: 1;
    background: rgba(255, 255, 255, 0.9);
    position: relative;
    img {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      min-height: 100vh;
      height: 100%;
      width: 100%;
    }
  }
  .form-wrapper {
    padding-top: 60px;
    padding-bottom: 60px;
    // margin: 7vh auto auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background: gray;
    // background: rgba(255, 255, 255, 0.8);

    h1 {
      font-size: 3.3rem;
      font-weight: 300;
      color: rgb(100, 100, 100);
      margin: 20px auto;
      i {
        vertical-align: -0.5px;
        margin-right: 15px;
        color: $icon;
      }
    }
    h3 {
      margin: 20px auto;
      font-weight: 400;
      color: rgb(100, 100, 100);
    }
    p {
      width: 90%;
      max-width: 1000px;
      text-align: center;
      margin: 15px auto;
    }
    form {
      width: 90%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      input {
        padding: 10px;
        margin: 10px;
        border: none;
        background: rgba(228, 228, 228, 0.164);
        box-shadow: 1px 1px 3px rgba(50, 50, 50, 0.4);
        transition: all ease 0.3s;
      }
      input:focus {
        outline: none;
        transition: all ease 0.3s;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(1.005);
        box-shadow: 1px 2px 8px rgba(50, 50, 50, 0.4);
      }
      textarea {
        padding: 10px;
        margin: 10px;
        border: none;
        background: rgba(228, 228, 228, 0.164);
        box-shadow: 1px 1px 3px rgba(50, 50, 50, 0.4);
        transition: all ease 0.3s;
      }
      textarea:focus {
        outline: none;
        transition: all ease 0.3s;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(1.005);
        box-shadow: 1px 2px 8px rgba(50, 50, 50, 0.4);
      }
      button {
        background: white;
        border: none;
        padding: 10px 10px 9px 10px;
        transition: all ease 0.5s;
        box-shadow: 1px 1px 3px rgba(50, 50, 50, 0.4);
        text-decoration: none;
        margin: 10px auto;
      }
      button:hover {
        // transform: scale(1.02);
        // box-shadow: $box-shadow;
        transition: all ease 0.8s;
        background: rgb(228, 228, 228);
        // background: rebeccapurple;
      }
      button:focus {
        outline: none;
        background: rgb(228, 228, 228);
      }
      button.sending {
        background: #00c587;
        color: white;
        font-weight: 500;
        span {
          color: white;
        }
      }
      span {
        color: $icon;
        margin: auto 5px 3px 0;
        vertical-align: middle;
        font-size: 18px;
      }
    }
  }
  @media (min-width: 690px) and (max-width: 800px) {
    div.form-wrapper {
      // background-color: #f00;
      padding-top: 90px;
    }
  }
  @media (min-width: 600px) and (max-width: 690px) {
    div.form-wrapper {
      // background-color: rgb(94, 255, 0);
      padding-top: 150px;
    }
  }
  @media (min-width: 350px) and (max-width: 600px) {
    div.form-wrapper {
      // background-color: rgb(255, 196, 0);
      padding-top: 170px;
    }
  }
  @media (min-width: 200px) and (max-width: 350px) {
    div.form-wrapper {
      // background-color: rgb(255, 196, 0);
      padding-top: 170px;
    }
  }
</style>
