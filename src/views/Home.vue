<template>
  <div class="wrapper">
    <header class="row">
    <div class="col">
      <h1>Hi name is Adam Skoullos <br> welcome to my portfolio</h1>
      <h4>
        Built as an SPA with:
      </h4>
      <div class="tech-icons">
        <img src="../assets/icons/vue.png" alt="logo">
        <img src="../assets/icons/bootstrap.png" alt="logo">
        <img src="../assets/icons/sass.png" alt="logo">
        <img src="../assets/icons/firebase.png" alt="logo">
      </div>
    </div>
  </header>
  <div class="divider"></div>
  <div class="row rows personal">
    <div class="col-12  text">
      <p>Motivated, passionate and creative, I thrive on learning new skills and evolving. Above all other characteristics, my natural resilience and methodical approach to problem solving has proved to be a strength in my ongoing journey as a developer.</p>
    </div>
    <div class="col-12  pic">
      <img src="../assets/images/rubix-3.png" alt="skills">
    </div>
  </div>
  <div class="divider"></div>
  <div class="row rows">
    <div class="col cta">
      <p>Please visit the Projects page to view my current flagship projects or the Coding Challenge page to view my top 5 JavaScript algorithm challenges.</p>
      <p>You can also see what I have been up to by viewing my blog which is rendered from a Firebase, Firestore collection and includes a markdown text editor</p>
      <div class="buttons">
        <router-link :to="{ name: 'Projects' }" class="button" >
          <span><i class="bi bi-grid-fill"></i>Projects</span>
        </router-link>
        <router-link :to="{ name: 'CodingChallenges' }" class="button">
          <span><i class="bi bi-puzzle-fill"></i>Coding Challenges</span>
        </router-link>
        <router-link :to="{ name: 'Blog' }" class="button">
          <span><i class="bi bi-chat-left-text-fill"></i>Blog</span>
        </router-link>
        <router-link :to="{ name: 'Certifications' }" class="button">
          <span><i class="bi bi-award-fill"></i>Certifications & Training</span>
        </router-link>
      </div>
    </div>
  </div>
  <div class="divider"></div>
    <div class="row rows facts">
      <div class="col-12 text">
        <p>In the last 6 months I have made around a 1000 commits and worked on over 25 repos. I have completed over 300 JavaScript coding challenges and am currently learning new skills for my next milestone project that will include Vue 3 on the front-end and Python Flask on the back-end.</p>
      </div>
      <div class="link-icons">
        <a href="https://github.com/Adamskoullos" target="_blank" class="button"><i class="bi bi-github"></i><span>GitHub Profile</span></a>
        <a href="https://www.freecodecamp.org/adam-skoullos" target="_blank" class="button"><img src="../assets/icons/fcc-2.png" alt="logo" class="link"><span>FreeCodeCamp Profile</span></a>
      </div>
  </div>
  <div class="divider"></div>
  <div class="row rows">
    <div class="col contact">
      <p>You can reach out and contact me anytime via the contact form which connects to the Email.js api. I look forward to hearing from you.</p>
      <router-link :to="{ name: 'Contact' }" class="button">
        <span><i class="bi bi-envelope-fill"></i>Contact</span>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="scss">

@media (min-width: 690px) and (max-width: 800px) {
  header {
    // background-color: #f00;
    padding-top: 30px;
  }
}
@media (min-width: 600px) and (max-width: 690px) {
  header {
    // background-color: rgb(94, 255, 0);
    padding-top: 60px;
  }
}
@media (min-width: 350px) and (max-width: 600px) {
  header {
    // background-color: rgb(255, 196, 0);
    padding-top: 70px;
  }
}
@media (min-width: 200px) and (max-width: 350px) {
  header {
    // background-color: rgb(255, 196, 0);
    padding-top: 90px;
  }
}
header{
  margin-top: 30px;
  // flex:1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  h1{
    font-weight: 200;
  }
  h4{
    font-weight: 300;
    margin-top:30px;
  }
  .tech-icons{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    max-width: 500px;
    padding: 20px 20px 30px 20px;
    // background: darkcyan;
    margin:auto;
    img{
      height: 75px;
      margin: auto 15px;
      // overflow: hidden;
    }
  }
}
@media (min-width: 200px) and (max-width: 500px) {
  .tech-icons {
    padding-bottom: 20px !important;
  
    img {
      max-height: 60px;
     margin: 10px !important;
    }
  }
}
.pic{
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 150px;
  // box-shadow: $box-shadow;

  overflow: hidden;
  img{
    // height: 100%;
    max-height: 150px;
  }
}
.text{
  display: flex;
  align-items: center;
  justify-content: center;
  
  p{
    text-align: center;
    max-width: 1200px;
    width:90%;
    margin-bottom: 0;
  }
  
}
.rows{
  margin: 15px 0;
}
.personal{
    // background: chartreuse;
  padding: 20px 20px 10px 20px;
  margin-bottom:0;
}
.facts{
  padding: 20px 20px 10px 20px;
  margin: 0;
}
.link-icons{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  padding: 10px 0 5px 0;
  // background: darkcyan;
  margin: auto;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    // width: 100px;
    height: 45px;
    margin: 10px;

    img {
      // flex:1;
      height: 20px;
      margin-right: 10px;
      // margin: auto 15px;
      // border-radius: 50%;
      // transition: all ease 0.2s;
    }

    i{
      flex:1;
      font-size: 26px;
      // vertical-align: -.5em;
      margin-top:4px;
      margin-right: 10px;
    }
  }
  
  

}
.cta{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 10px 20px;
  p{
    width:90%;
    max-width: 1200px;
  }
  .buttons{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-wrap: wrap;
    // background: chartreuse;
    a.button{
      text-decoration: none;
      margin: 10px 10px;
      padding: 10px;
      // background: olive;
      
        
        i{
          margin-right: 5px;
          // vertical-align: -.2em;
        }
      
    }
    
  }
}

.contact{
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    width: 90%;
    max-width: 1200px;
  }
  a{
    text-decoration: none;
  }
  i{
    margin-right: 5px;
    // vertical-align: -.03em;
  }
  .button{
    margin: 10px;
    background: #00C587;
    span{
      color: white;
      font-weight: 500;
      i{
        color: white;
      }
    }
  }
  .button:hover{
    background: #30465F;
    transition: all ease 0.7s;
  }
}
div.divider{
  height: 1px;
  width: 70%;
  background: rgba(155, 155, 155, 0.1);
  margin: 10px auto;
  padding: 1px 0;
}

</style>