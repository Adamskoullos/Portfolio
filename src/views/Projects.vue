<template>
  <div class="wrapper">
    <div class="projects-hero">
      <h1>Flagship Projects</h1>
      <img
        src="../assets/images/real-projects.jpg"
        alt="background"
        class="background cover"
      />
    </div>
    <div class="row project">
      <div class="col project-col">
        <h1>ProDev</h1>
        <h5>A light weight and zippy project management hub for small teams</h5>
        <div class="tech-icons">
          <img src="../assets/icons/htmlCssJs.jpeg" alt="logo" />
          <img src="../assets/icons/vue.png" alt="logo" />
          <img src="../assets/icons/bootstrap.png" alt="logo" />
          <img src="../assets/icons/gsap.png" alt="logo" />
          <img src="../assets/icons/firebase.png" alt="logo" />
        </div>
        <div class="row project-overview">
          <div class="col-12 col-xl-6 project-image">
            <img src="../assets/images/prodev.png" alt="project image" />
          </div>
          <div class="col-12 col-xl-6 overview">
            <h5>Team Projects:</h5>
            <p>
              A zoomed out view where all members for example the front end team
              can collaborate on the larger project by breaking sections down
              for example different parts of each sprint
            </p>
            <h5>User Projects:</h5>
            <p>
              Each team member can create, read, update and delete their own
              projects
            </p>
            <h5>Bugs Journal:</h5>
            <p>
              The bug journal is a place where all team member issues and
              solutions are listed and shared. Sharing project bugs and
              solutions can reduce overall project downtime
            </p>
            <h5>Live Chat:</h5>
            <p>
              Bringing it all together and focusing the conversation is the
              built in real-time chat feature allowing team members to quickly
              discuss and respond to different tasks and issues
            </p>
          </div>
        </div>
        <div class="button-div">
          <router-link
            :to="{ name: 'ProDev' }"
            class="button"
            @click="handleScroll"
          >
            <span class="material-icons">open_in_full</span>Detailed View
          </router-link>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row project portfolio-join">
      <div class="col project-col">
        <h1>Not just a Portfolio</h1>
        <h5>
          My current Portfolio was built after ProDev thus has been used to
          crystallise and build on the lessons learned during the ProDev build
          process
        </h5>
        <div class="tech-icons">
          <img src="../assets/icons/marked.png" alt="logo" />
          <img src="../assets/icons/vue.png" alt="logo" />
          <img src="../assets/icons/bootstrap.png" alt="logo" />
          <img src="../assets/icons/gsap.png" alt="logo" />
          <img src="../assets/icons/sass.png" alt="logo" />
          <img src="../assets/icons/firebase.png" alt="logo" />
        </div>
        <div class="row project-overview portfolio-join">
          <div class="col-12 col-xl-6 project-image">
            <img
              src="../assets/images/portfolio-main2.png"
              alt="project image"
            />
          </div>
          <div class="col-12 col-xl-6 overview">
            <h5>SASS:</h5>
            <p>
              I have learnt how to implement SASS into a Vue 3 project to have
              both global and local SCSS styling using variables and nested
              scoping
            </p>
            <h5>GSAP:</h5>
            <p>
              I have incrementally increased my ability to utilise GSAP and have
              implemented a sequenced animation for the side-nav on-load
            </p>
            <h5>bootstrap 5 Cards:</h5>
            <p>
              I have introduced the use of Boostsrap 5 cards to present blog
              post previews
            </p>
            <h5>Markdown Blog:</h5>
            <p>
              I have built a markdown blog utilising a Firebase back-end with
              Firestore and Storage. The new blog post page includes a live
              markdown previewer
            </p>
            <h5>User Authentication:</h5>
            <p>
              There is a secret login with a different UI for the logged in user
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row project">
      <div class="col project-col portfolio-two">
        <h1>Refinement of SKills</h1>
        <h5>
          This is an image of the new blog post page showing the markdown live
          previewer
        </h5>
        <div class="row project-overview">
          <div class="col-12 col-xl-6 project-image">
            <img src="../assets/images/new-blog-page.png" alt="project image" />
          </div>
          <div class="col-12 col-xl-6 overview">
            <h5>Custom Built Components:</h5>
            <p>
              Custom designed and built navigation components, buttons and
              responsive behaviour utilising a mix of Bootstrap 5 icons and
              Material icons
            </p>
            <h5>CSS Styling:</h5>
            <p>
              Refinement in the use of box-shadows, transitions and transforms
            </p>
            <h5>Vue:</h5>
            <p>
              Further experience using Vue Router, Vue 3 and the composition api
            </p>
            <h5>Firebase:</h5>
            <p>
              Further experience working with firebase tools and interacting
              with Firebase services api’s including deployment and hosting also
              setting up a custom domain
            </p>
            <h5>Positioning:</h5>
            <p>
              Improved consistency in positioning content with the use of
              Boostsrap rows and columns in conjunction with Flexbox for
              elements within columns
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row project">
      <div class="col project-col">
        <h1>Trader Dashboards</h1>
        <h5>
          Professional charting solution using real-time and end of day data for
          equity traders and investors
        </h5>
        <h5>Designed to give traders an informational edge</h5>
        <div class="tech-icons">
          <img src="../assets/icons/htmlCssJs.jpeg" alt="logo" />
          <img src="../assets/icons/b4b.png" alt="logo" />
          <img src="../assets/icons/jquery.jpeg" alt="logo" />
          <img src="../assets/icons/ajax.png" alt="logo" />
        </div>
        <div class="row project-overview-traderDashboards">
          <div class="col-12 col-xl-6 project-image">
            <img
              src="../assets/images/traderDashboards.png"
              alt="project image"
            />
          </div>
          <div class="col-12 col-xl-6 overview">
            <h5>Pre-Market Prep:</h5>
            <p>
              Multiple-timeframe analysis of the major indexes to frame the
              market and create a bigger picture road map
            </p>
            <h5>Trade with the flow:</h5>
            <p>
              Digging deeper and identifying strong sectors in a strong market
              and weak sectors in a weak market
            </p>
            <h5>Stock Analysis:</h5>
            <p>
              Analysing specific stocks to potentially trade in line with the
              above top down analysis
            </p>
            <h5>Monitoring Live Markets:</h5>
            <p>
              Quickly identify, process and act on changing intraday sentiment,
              overall market direction, breaking news and economic events
            </p>
          </div>
        </div>
        <div class="next-step">
          <p>
            To get the full project break down from design, development through
            to testing and deployment please visit the ReadMe link below.
          </p>
        </div>
        <div class="button-div-traderDashboards">
          <a
            href="https://adamskoullos.github.io/Trader-Dashboards-V2/"
            target="_blank"
            class="button live-app"
          >
            <span class="material-icons">play_arrow</span>
            <h6>Live App</h6>
          </a>
          <a
            href="https://github.com/Adamskoullos/Trader-Dashboards-V2"
            target="_blank"
            class="button"
          >
            <i class="bi bi-github"></i>
            <h6>Read Me</h6>
          </a>
        </div>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
  export default {
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
    box-sizing: border-box;
  }
  .projects-hero {
    margin-right: 0;
    margin-left: 0;
    padding-top: 60px;
    padding-bottom: 60px;
    min-height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.7);
    margin-bottom: 30px;
    // background: gold;
    img {
      position: absolute;
      padding-left: 0;
      padding-right: 0;
      margin: 0;
      top: 0;
      // right: 0;
      // left:0;
      // min-width: 100%;
      min-height: 100%;
      width: 100%;
      z-index: -1;
    }
    h1 {
      font-size: 3.3rem;
      font-weight: 300;
      color: rgb(100, 100, 100);
      // display: none;
      // color:rgba(255, 255, 255, 0.9);
    }
  }

  @media (min-width: 670px) and (max-width: 800px) {
    div.projects-hero {
      // background-color: #f00;
      padding-top: 100px;
      margin-top: 10px;
    }
  }
  @media (min-width: 600px) and (max-width: 670px) {
    div.projects-hero {
      // background-color: rgb(94, 255, 0);
      padding-top: 100px;
      margin-top: 50px;
    }
  }
  @media (min-width: 350px) and (max-width: 600px) {
    div.projects-hero {
      // background-color: rgb(255, 196, 0);
      padding-top: 70px;
      margin-top: 80px;
    }
  }
  @media (min-width: 200px) and (max-width: 350px) {
    div.projects-hero {
      // background-color: rgb(255, 196, 0);
      padding-top: 150px;
      margin-top: 90px;
    }
  }
  div.portfolio-join,
  div.portfolio-join.project-overview {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  div.portfolio-two {
    h1 {
      margin: 0 auto 15px auto;
    }
    h5 {
      margin-bottom: 20px;
    }
  }
  .project {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    margin-bottom: 40px;
    padding-left: 12px; //hfhfhg
    padding-right: 12px; //hfhfghf
    margin-right: 10px;
    margin-left: 10px;
    // background: green;
    .project-col {
      padding: 0;
      // background: gray;
    }
    h1 {
      margin: 30px auto 15px auto;
      font-size: 60px;
      font-weight: 300;
      color: rgb(100, 100, 100);
    }
    h5 {
      font-weight: 300;
    }
    .button-div {
      padding: 20px 0;
    }
    a.button {
      background: $green;
      color: white;
      font-weight: 500;
      span {
        color: white;
        margin-right: 5px;
        vertical-align: middle;
        padding-bottom: 3px;
      }
    }
    a.button:hover {
      background: #30465f;
      transition: all ease 0.7s;
    }
    .tech-icons {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      max-width: 700px;
      padding: 20px 20px 20px 20px;
      // background: darkcyan;
      margin: auto;
      img {
        height: 60px;
        margin: auto 15px;
        // overflow: hidden;
      }
    }
    @media (min-width: 200px) and (max-width: 500px) {
      .tech-icons {
        padding-bottom: 20px !important;

        img {
          max-height: 50px;
          margin: 10px !important;
        }
      }
    }
    .project-overview {
      // background: chartreuse;
      padding-bottom: 20px;
    }
    .project-overview-traderDashboards {
      margin-bottom: 0;
    }
    .project-image {
      display: flex;
      align-items: center;
      justify-content: center;
      // width: 90%;
      // max-width: 1000px;
      margin: 0 auto;
      padding: 20px;

      img {
        width: 100%;
        max-width: 700px;
        box-shadow: 1px 2px 5px rgba(50, 50, 50, 0.4);
      }
    }
    .overview {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      // background: chocolate;
      padding: 20px 20px;
      margin: 0 auto;
      h5 {
        margin: auto auto 5px 15px;
        font-weight: 500;
        color: rgb(87, 87, 87);
      }
      p {
        text-align: justify;
        margin-left: 15px;
      }
      a {
        margin: auto;
      }
    }
  }

  .button-div-traderDashboards {
    display: flex;
    align-items: center;
    justify-content: center;
    a.button {
      margin: 10px auto;
      color: white;
      font-weight: 500;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 45px;
      width: 120px;

      h6 {
        margin-bottom: 0;
        font-weight: 500;
        color: white;
      }
      span {
        margin-right: 3px;
        font-size: 30px;
        color: white;
      }
      i {
        margin-right: 8px;
        font-size: 18px;
        color: white;
      }
    }
    a.live-app {
      padding-right: 15px;
    }
  }
  .next-step {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: auto;
    padding: 10px 0;
  }

  div.divider {
    height: 1px;
    width: 90%;
    background: rgba(155, 155, 155, 0.1);
    margin: 20px auto;
    padding: 1px 0;
  }
</style>
