<template>
  <div class="wrapper">
    <h1>Certifications & Training</h1>
    <div class="row">
      <div class="col intro">
        <h2>Development Strategy</h2>
        <p>My approach in becoming a full-stack developer was to go with one long term course that enforces checkpoints along the way and includes milestone projects, mentoring and touches upon many technologies. And then to supplement this core journey with focused satellite courses to deep-dive specific skills and technologies. </p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row course">
      <div class="col-12 code">
        <img src="../assets/icons/code.png" alt="road map">
      </div>
      <div class="col-12 col-lg-4 text">
        <p>The long term course from Code Institute is providing me with a solid foundation and touches on the following technologies</p>
      </div>
      <div class="col-12 col-lg-8 image icons">
        <img src="../assets/images/tech.png" alt="tech">
      </div>
    </div>
    <div class="divider"></div>
    <div class="row course">
      <h2>Course Road Map</h2>
      <div class="col-12 col-lg-4 text">
        <p>This is the Code Institute pathway, I am currently working towards milestone 3 which focuses on the back-end with Python and Flask</p>
      </div>
      <div class="col-12 col-lg-8 image">
        <img src="../assets/images/road-map.png" alt="road map">
      </div>
    </div>
    <div class="divider"></div>
    <div class="row course">
      <h2>JavaScript Algorithms & Data Structures Training</h2>
      <div class="col-12 col-lg-4 text">
        <p>FreeCodeCamp provides hundreds of coding challenges that drill and hone skills. This training has really helped me develop the thinking to approach, break down and conquer problems</p>
      </div>
      <div class="col-12 col-lg-8 image">
        <img src="../assets/images/rubix-3.png" alt="certificate">
      </div>
    </div>
    <div class="divider"></div>
    <div class="row course">
      <h2>Advanced JavaScript OOP</h2>
      <div class="col-12 col-lg-4 text">
        <p>This course gave me an in depth practical understanding from factory functions to constructor functions and classes including prototype inheritance and the prototype chain. I got my head around closure and how it was traditionally used in module patterns like the namespace pattern and the use of IIfe's. Then lastly how evolution has brought us to ES6 modules</p>
      </div>
      <div class="col-12 col-lg-8 image">
        <img src="../assets/images/js.jpg" alt="certificate">
      </div>
    </div>
    <div class="divider"></div>
    <div class="row course">
      <h2>Functional Programming</h2>
      <div class="col-12 col-lg-4 text">
        <p>I learnt how to build singular re-usable functions, chain them passing data in and returning the new value without mutating the original property. I then learned how to build larger functions using singular functions and compose them into a pipe. Then lastly the course touches on currying when multiple inputs need to be passed</p>
      </div>
      <div class="col-12 col-lg-8 image">
        <img src="../assets/images/functional.jpg" alt="certificate">
      </div>
    </div>
    <div class="divider"></div>
    <div class="row course">
      <h2>Vue 3 & Firebase</h2>
      <div class="col-12 col-lg-4 text">
        <p>This course taught me the patterns used when building components, composables and how to use many of the Vue directives. How to make data reactive and pass properties from component to component, how to emit events up and act on them and how to pull a project together. This course provided many insights into how to work with firebase when using Vue</p>
      </div>
      <div class="col-12 col-lg-8 image">
        <img src="../assets/images/vue.jpg" alt="certificate">
      </div>
    </div>
    <div class="divider"></div>
    <div class="col contact">
      <router-link :to="{ name: 'Contact' }" class="button">
        <span><i class="bi bi-envelope-fill"></i>Contact</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@media (min-width: 690px) and (max-width: 800px) {
  .wrapper {
    // background-color: #f00;
    padding-top: 30px;
  }
}
@media (min-width: 600px) and (max-width: 690px) {
  .wrapper {
    // background-color: rgb(94, 255, 0);
    padding-top: 60px;
  }
}
@media (min-width: 350px) and (max-width: 600px) {
  .wrapper {
    // background-color: rgb(255, 196, 0);
    padding-top: 70px;
  }
}
@media (min-width: 200px) and (max-width: 350px) {
  .wrapper {
    // background-color: rgb(255, 196, 0);
    padding-top: 90px;
  }
}
.intro{
  margin: 30px auto;
}
h1{
  font-weight: 200;
  margin: 20px auto;
}
h2{
    font-weight: 300;
    margin: 15px auto;
}
p{
  width: 90%;
  margin: auto;
}
.course{
  // flex:1;
  margin: 15px auto;
  
}
.text{
  margin: 15px auto;
  padding: 0;
  p{
    text-align: end;
    padding: 0 15px;
    border-right: 6px solid rgba(155, 155, 155, 0.2);
  }
  @media (min-width: 200px) and (max-width: 1000px){
    p{
      text-align: center;
      border-right:none;
    }
  }
}
.code{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0 10px 0;
  img{
    max-width: 100px;
  }
}
.image{
  flex:1;
  margin: 15px auto;
  max-height: 500px;
  width: 90%;
  max-width:500px;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    height: 100%;
    width: 100%;
  }
}
.icons{
  max-width:450px;
}
div.divider{
  height: 1px;
  width: 70%;
  background: rgba(155, 155, 155, 0.1);
  margin: 10px auto;
  padding: 1px 0;
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
</style>