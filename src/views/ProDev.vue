<template>
  <div class="wrapper-prodev">
    <div class="row">
      <h1>ProDev</h1>
      <div class="col">
        <div class="header-image">
          <img src="../assets/images/prodev-main.png" alt="ProDev">
        </div>
      </div>
      <div class="col-12">
        <div class="buttons">
          <a href="https://www.prodev.dev/" target="_blank" class="button">
            <span class="material-icons">play_arrow</span>
            <h6>Live App</h6>
          </a>
          <a href="https://prodev-build-guide.netlify.app/" target="_blank" class="button">
            <span class="material-icons spanner">build</span>
            <h6>Build Guide</h6>
          </a>
          <a href="https://github.com/Adamskoullos/prodev" target="_blank" class="button">
            <i class="bi bi-github"></i>
            <h6>Read Me</h6>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col demo-col">
        <h3>Demo Credentials</h3>
        <div class="demo">
          <div class="demo-item">
            <h6>Email:</h6>
            <p>superdev@dev.com</p>
          </div>
          <div class="demo-item">
            <h6>Password:</h6>
            <p>123456</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 details">
        <p>ProDev is set up via the <span class="highlight">Vue cli</span> which includes: <span class="highlight">Vue-Router</span> to manage SPA routing, <span class="highlight">webpack</span> to bundle and manage all files, <span class="highlight">Babel</span> to translate all JS into ES5 for browser compatibility and a node modules pack which also stores all npm installs. <span class="highlight">Bootstrap 5</span> is used mostly for the rows and columns responsiveness and has been utilised in conjunction with Flexbox. <span class="highlight">Material icons</span> are used to keep things tidy especially on mobile devices, <span class="highlight">date-fns</span> is used to present timestamp data for chat messages and <span class="highlight">GSAP</span> is used with <span class="highlight">Vue transitions</span> and JavaScript hooks to give a snappy and tactile user experience.</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="col-12 col-sm-8  details">
        <p>The project is built using the <span class="highlight">Vue 3 composition api</span> with all views and components utilising the <span class="highlight">setup()</span> function. <span class="highlight">ref()</span> properties were heavily used to make data reactive and <span class="highlight">props</span> are used to pass data between components.</p>
      </div>
      <div class="col-12 col-sm-4 icons icon-right">
        <img src="../assets/icons/vue.png" alt="vue logo">
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="col-12 col-sm-4 icons icon-left">
        <img src="../assets/icons/es6.png" alt="JavaScript ES6 logo">
      </div>
      <div class="col-12 col-sm-8 details">
        <p><span class="highlight">ES6 modules</span> were used when extracting component functions and creating composables. As each module is its own scope, closure was heavily taken advantage of in this process allowing each component to stay clutter free and relatively easy to reason about.</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="col-12 col-sm-8 details">
        <p><span class="highlight">Firebase tools</span> is installed globally on the machine via npm in order to link with the firebase project on the back end during development. Firebase services: <span class="highlight">Firestore</span>, <span class="highlight">Authentication</span> and <span class="highlight">Storage</span> are used within the project.</p>
      </div>
      <div class="col-12 col-sm-4 icons icon-right">
        <img src="../assets/icons/firebase.png" alt="Firebase logo">
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="col-12 col-sm-4 icons icon-left">
        <img src="../assets/icons/es8-2.png" alt="JavaScript logo">
      </div>
      <div class="col-12 col-sm-8 details">
        <p>Email.js is used for both the `report issue` and `contact` forms. The <span class="highlight">async</span>/<span class="highlight">await</span> with try/catch block pattern is used when connecting to the email.js and the different Firebase services.</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="col-12 col-sm-8 details">
        <p><span class="highlight">GitHub</span> is used for version control and <span class="highlight">Trello</span> for managing the project and each sprint.</p>
      </div>
      <div class="col-12 col-sm-4 icons icon-right">
        <img src="../assets/icons/github.png" alt="github logo">
        <img src="../assets/icons/trello.png" alt="trello logo">
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="col-12 col-sm-4 icons icon-left">
        <img src="../assets/icons/netlify.png" alt="">
      </div>
      <div class="col-12 col-sm-8 details">
        <p>Lastly the ProDev Build Guide documentation is built using <span class="highlight">Vitepress</span> and hosted on <span class="highlight">Netlify</span>. Vitepress is a static site generator designed for building documentation.</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <h2>Component Architecture</h2>
      <div class="col-12 components-text">
        <p>The following visual shows how the project is constructed and wired up. Views are represented by blue, nested components green and composables yellow</p>
      </div>
      <div class="col-12 components">
        <img src="../assets/images/compArch.png" alt="components">
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <h2>Skill Development</h2>
      <div class="col-12 left-skill">
        <p>Using <span class="highlight">Bootstrap</span> rows and columns in conjunction with <span class="highlight">Flexbox</span> has become a styling pattern during this project that I will build on via Sass mixins in future projects.</p>     
      </div>
      <div class="col-12 right-skill">
        <p>I am using <span class="highlight">Arrow functions</span> as a norm now and by default am tending to reach for <span class="highlight">JavaScript methods</span> when working with data.</p>
      </div>
      <div class="col-12 left-skill">
        <p>I have become more comfortable using the <span class="highlight">Async/Await</span>, Try/Catch block pattern when working with api's and have patterned the process of extracting `Use` and `Get` functionality into <span class="highlight">composables</span>/<span class="highlight">modules</span> and then importing and destructing them as and when they are needed.  </p>
      </div>
      <div class="col-12 right-skill">
        <p>I have become competent <span class="highlight">passing props down</span> and <span class="highlight">emitting events up</span> using the <span class="highlight">Vue 3 composition api</span> which has also got me thinking more about data and it's state. Also I feel comfortable manipulating the DOM using Vue directives.</p>
      </div>
      <div class="col-12 left-skill">
        <p>I have become familiar with the <span class="highlight">Firebase tools</span> from setting a project up right through to deployment and hosting and have gained experience working with collections via a <span class="highlight">NoSQL</span> data base.</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="buttons">
      <router-link :to="{ name: 'Contact' }" class="contact-button">
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
  .wrapper-prodev {
    /* // background-color: #f00; */
    padding-top: 30px;
  }
}
@media (min-width: 600px) and (max-width: 690px) {
  .wrapper-prodev {
    padding-top: 60px;
  }
}
@media (min-width: 350px) and (max-width: 600px) {
  .wrapper-prodev {
    padding-top: 70px;
  }
}
@media (min-width: 200px) and (max-width: 350px) {
  .wrapper-prodev {
    /* // background-color: rgb(255, 196, 0); */
    padding-top: 90px;
  }
}
.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    height: 80px;
    margin: 30px 10px;
  } 
}
.icon-left{
  justify-content: flex-end;
}
.icon-right{
  justify-content: flex-start;
}
.wrapper-prodev h1{
    margin: 10px auto;
    font-size: 60px;
    font-weight: 300;
  }
.wrapper-prodev h2{
  font-weight: 300;
  margin: 15px auto;
}
.header-image{
  padding: 10px;
  margin: 0 auto;

  img{
    width: 100%;
    max-width: 700px;
    box-shadow: 1px 2px 5px rgba(50,50,50,0.4);
  }
}
.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;

}

.buttons a.button{
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    h6{
      margin-bottom: 0;
      font-weight: 400;
    }
    span{
      margin-right: 3px;
      font-size: 30px;
    }
    .spanner{
      font-size: 18px;
      margin-right: 7px;
    }
    i{
      margin-right: 8px;
      font-size: 18px;
    }
  }
  
  .demo{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: #00C587;
    margin: 15px auto;
    padding:5px 10px;
    box-shadow: 1px 1px 5px rgba(50,50,50,0.4);
    max-width: 500px;
    border-radius: 50px;
    .demo-item{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 15px;
      
      h6{
        margin-right: 8px;
        margin-bottom: 0;
        font-weight: 300;
      }
      p{
        margin-bottom: 0;
      }
    }
    
    .password{
      margin-top: 5px;
    }

  }
  .demo-col h3{
      font-weight: 300;
    }
  .details{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .details p{
    width: 100%;
    margin: auto;
    text-align: justify;
  }
  p span.highlight{
    color: $green;
    font-weight: 500;
  }
  .components{
    padding: 10px;
    margin: 0 auto 13px auto;

   img{
     width: 100%;
     max-width: 700px;
   }
  }
  .components-text{
    display: flex;
    align-items: center;
    justify-content: center;

    p{
      width:90%;
      margin: 15px auto;
    }
  }
  .left-skill{
    // background: chartreuse;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    p{
      margin: 20px ;
      width:55%;
      text-align: justify;
      padding-right: 10px;
      border-right: 6px solid rgba(155, 155, 155, 0.2);
    }
  }
  .right-skill{
    // background: chartreuse;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    p{
      margin: 20px;
      width:55%;
      text-align: justify;
      padding-left: 10px;
      border-left: 6px solid rgba(155, 155, 155, 0.2);
    }
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
div.divider{
height: 1px;
width: 90%;
background: rgba(155, 155, 155, 0.1);
margin: 20px auto;
padding: 1px 0;
}
@media (min-width: 200px) and (max-width: 500px) {
  .right-skill p, .left-skill p{
    width: 75%;
  }
}
@media (min-width: 200px) and (max-width: 600px) {
  .icon-left, .icon-right{
    justify-content: center;
  }
}
</style>