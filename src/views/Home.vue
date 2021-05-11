<template>
  <div class="wrapper">
    <header class="row">
      <img
        src="../assets/images/real-hero.jpg"
        alt="background"
        class="background cover"
      />
      <div class="col">
        <h1>Welcome to my portfolio</h1>
        <h5>
          Built as an SPA with:
        </h5>
        <div class="tech-icons">
          <img src="../assets/icons/vue.png" alt="logo" />
          <img src="../assets/icons/bootstrap.png" alt="logo" />
          <img src="../assets/icons/sass.png" alt="logo" />
          <img src="../assets/icons/firebase.png" alt="logo" />
        </div>
      </div>
    </header>
    <!-- <div class="divider"></div> -->
    <div class="row rows personal">
      <h1>Motivated, passionate and creative</h1>
      <h5>I thrive on learning new skills and evolving</h5>
      <div class="col-12 pic">
        <img src="../assets/images/rubix-3.png" alt="skills" />
      </div>
      <div class="col-12 text">
        <p>
          My natural resilience and methodical approach to <br /><span
            >problem solving</span
          ><br />
          has proven to be a strength in my ongoing journey as a developer
        </p>
      </div>
    </div>
    <!-- <div class="divider"></div> -->
    <div class="row rows cta-row">
      <img
        src="../assets/images/real-cta.jpg"
        alt="background"
        class="background cover"
      />
      <div class="col cta">
        <p>
          View my current flagship <span>projects</span> or check out my
          <span>blog</span>.
        </p>
        <p>
          You can also dig into my <span>training </span>and<span>
            development</span
          >
          so far
        </p>
        <div class="buttons">
          <router-link
            :to="{ name: 'Projects' }"
            class="button"
            @click="handleScroll"
          >
            <span><i class="bi bi-grid-fill"></i>Projects</span>
          </router-link>
          <router-link
            :to="{ name: 'Blog' }"
            class="button"
            @click="handleScroll"
          >
            <span><i class="bi bi-chat-left-text-fill"></i>Blog</span>
          </router-link>
          <router-link
            :to="{ name: 'Certifications' }"
            class="button"
            @click="handleScroll"
          >
            <span
              ><i class="bi bi-award-fill"></i>Certifications & Training</span
            >
          </router-link>
          <router-link :to="{ name: 'Contact' }" class="button">
            <span><i class="bi bi-envelope-fill"></i>Contact</span>
          </router-link>
        </div>
      </div>
    </div>
    <!-- <div class="divider"></div> -->
    <div class="row rows facts">
      <div class="col-12 text">
        <p>
          Take a look at my <span>GitHub activity</span> or scan through my
          <span>FreeCodeCamp</span> profile
        </p>
      </div>
      <div class="link-icons">
        <a href="https://github.com/Adamskoullos" target="_blank" class="button"
          ><i class="bi bi-github"></i><span>GitHub Profile</span></a
        >
        <a
          href="https://www.freecodecamp.org/adam-skoullos"
          target="_blank"
          class="button"
          ><img src="../assets/icons/fcc-2.png" alt="logo" class="link" /><span
            >FreeCodeCamp Profile</span
          ></a
        >
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Home",
    components: {},
    setup(props, context) {
      const handleScroll = () => {
        context.emit("scroll");
      };

      return { handleScroll };
    },
  };
</script>

<style lang="scss" scoped>
  div.wrapper {
    padding-left: 12px;
    padding-right: 12px;

    padding-top: 0;
    // box-sizing: border-box;
    // background: brown;
  }
  header.row {
    // margin: 0;
    padding: 0;
  }
  header div.col {
    // background: chartreuse;
    margin-top: 60px;
    margin-bottom: 40px;
    padding: 0;
  }
  @media (min-width: 690px) and (max-width: 800px) {
    header div.col {
      // background-color: #f00;
      padding-top: 30px;
    }
    header h1 {
      margin-top: 40px;
    }
  }
  @media (min-width: 600px) and (max-width: 690px) {
    header div.col {
      // background-color: rgb(94, 255, 0);
      padding-top: 40px;
    }
    header h1 {
      margin-top: 50px;
    }
  }
  @media (min-width: 350px) and (max-width: 600px) {
    header div.col {
      // background-color: rgb(255, 196, 0);
      padding-top: 30px;
    }
    header h1 {
      margin-top: 50px;
    }
  }
  @media (min-width: 200px) and (max-width: 350px) {
    header div.col {
      // background-color: rgb(255, 196, 0);
      padding-top: 20px;
    }
    header h1 {
      margin-top: 50px;
    }
  }
  header {
    // width:100%;
    position: relative;
    // margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.55);
    img.background {
      position: absolute;
      padding-left: 0;
      padding-right: 0;
      margin: 0;
      // right: 0;
      // left:0;
      // min-width: 100%;
      min-height: 100%;
      z-index: -1;
    }
    h1 {
      font-size: 3.3rem;
      font-weight: 300;
      color: rgb(100, 100, 100);
    }
    h5 {
      font-weight: 400;
      margin-top: 10px;
    }
    .tech-icons {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      max-width: 500px;
      padding: 20px 20px 30px 20px;
      // background: darkcyan;
      margin: auto;
      img {
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
  .pic {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    // max-height: 150px;
    // box-shadow: $box-shadow;

    overflow: hidden;
    img {
      // height: 100%;
      max-height: 150px;
      margin: auto;
    }
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      text-align: center;
      max-width: 1200px;
      width: 90%;
      // width: 400px;
      margin: auto;
      font-size: 19px;
      span {
        color: $blue;
        font-size: 26px;
        font-weight: 500;
      }
    }
  }

  .personal {
    // background: chartreuse;
    padding: 20px 20px 60px 20px;
    margin-bottom: 0;

    h1 {
      font-weight: 300;
      color: rgb(100, 100, 100);
      margin-bottom: 10px;
      margin-top: 40px;
    }
    h5 {
      margin: 0px auto 5px auto;
      font-weight: 400;
    }
    p {
      margin: auto;
      padding-left: 10px;
      // border-left: 6px solid rgba(155, 155, 155, 0.2);
      text-align: center;
      max-width: 600px;
    }
  }
  .facts {
    padding: 60px 20px 60px 20px;
    margin: 0;
    p {
      text-align: center;
    }
  }
  .link-icons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    padding: 10px 0 5px 0;
    // background: darkcyan;
    margin: auto;
    a {
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

      i {
        flex: 1;
        font-size: 26px;
        // vertical-align: -.5em;
        margin-top: 4px;
        margin-right: 10px;
      }
    }
  }
  .cta-row {
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.65);
    img {
      position: absolute;
      min-width: 100%;
      min-height: 100%;
      z-index: -1;
      padding-left: 0;
      padding-right: 0;
    }
  }
  .cover {
    object-fit: cover;
  }
  .cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px 60px 20px;
    p {
      width: 90%;
      max-width: 1200px;
      font-size: 19px;
      font-weight: 500;
      span {
        color: $blue;
        font-size: 26px;
        font-weight: 500;
      }
    }
    .buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      // background: chartreuse;
      a.button {
        text-decoration: none;
        margin: 10px 10px;
        padding: 10px;
        background: $green;
        box-shadow: 1px 2px 5px rgba(50, 50, 50, 0.4);
        transition: all ease 0.7s;

        i {
          margin-right: 5px;
          color: white;
          // vertical-align: -.2em;
        }
        span {
          color: white;
          font-weight: 500;
        }
      }
      a.button:hover {
        background: #30465f;
        transition: all ease 0.9s;
        box-shadow: 1px 2px 10px rgba(50, 50, 50, 0.4);
      }
    }
  }

  .contact {
    padding: 25px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    p {
      width: 90%;
      max-width: 1200px;
      font-size: 19px;
    }
    a {
      text-decoration: none;
    }
    i {
      margin-right: 5px;
      // vertical-align: -.03em;
    }
    .button {
      margin: 10px;
      background: $green;
      transition: all ease 0.7s;
      span {
        color: white;
        font-weight: 500;
        i {
          color: white;
        }
      }
    }
    .button:hover {
      background: #30465f;
      transition: all ease 0.9s;
    }
  }
  div.divider {
    height: 1px;
    width: 100%;
    background: rgba(155, 155, 155, 0.1);
    margin: 20px auto;
    padding: 1px 0;
  }
</style>
