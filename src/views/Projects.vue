<template>
  <div class="wrapper">
    <div class="row project">
      <div class="col project-col">
        <h1>ProDev</h1>
        <h5>A light weight and zippy project management hub for small teams</h5>
        <div class="tech-icons">
          <img src="../assets/icons/htmlCssJs.jpeg" alt="logo">
          <img src="../assets/icons/vue.png" alt="logo">
          <img src="../assets/icons/bootstrap.png" alt="logo">
          <img src="../assets/icons/gsap.png" alt="logo">
          <img src="../assets/icons/firebase.png" alt="logo">
        </div>
        <div class="row project-overview">
          <div class="col-12 col-xl-6 project-image">
            <img src="../assets/images/prodev.png" alt="project image">
          </div>
          <div class="col-12 col-xl-6 overview">
            <h5>Team Projects:</h5>
            <p>A zoomed out view where all members for example the front end team can collaborate on the larger project by breaking sections down for example different parts of each sprint</p>
            <h5>User Projects:</h5>
            <p>Each team member can create, read, update and delete their own projects</p>
            <h5>Bugs Journal:</h5>
            <p>The bug journal is a place where all team member issues and solutions are listed and shared. Sharing project bugs and solutions can reduce overall project downtime</p>
            <h5>Live Chat:</h5>
            <p>Bringing it all together and focusing the conversation is the built in real-time chat feature allowing team members to quickly discuss and respond to different tasks and issues</p>
          </div>
        </div>
        <div class="button-div">
          <router-link :to="{ name: 'ProDev' }" class="button" @click="handleScroll">
            <span class="material-icons">open_in_full</span>Detailed View
          </router-link>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row project">
      <div class="col project-col">
        <h1>Trader Dashboards</h1>
        <h5>Professional charting solution using real-time and end of day data for equity traders and investors</h5>
        <h5>Designed to give traders an informational edge</h5>
        <div class="tech-icons">
          <img src="../assets/icons/htmlCssJs.jpeg" alt="logo">
          <img src="../assets/icons/b4b.png" alt="logo">
          <img src="../assets/icons/jquery.jpeg" alt="logo">
          <img src="../assets/icons/ajax.png" alt="logo">
        </div>
        <div class="row project-overview-traderDashboards">
          <div class="col-12 col-xl-6 project-image">
            <img src="../assets/images/traderDashboards.png" alt="project image">
          </div>
          <div class="col-12 col-xl-6 overview">
            <h5>Pre-Market Prep:</h5>
            <p>Multiple-timeframe analysis of the major indexes to frame the market and create a bigger picture road map</p>
            <h5>Trade with the flow:</h5>
            <p>Digging deeper and identifying strong sectors in a strong market and weak sectors in a weak market</p>
            <h5>Stock Analysis:</h5>
            <p>Analysing specific stocks to potentially trade in line with the above top down analysis</p>
            <h5>Monitoring Live Markets:</h5>
            <p>Quickly identify, process and act on changing intraday sentiment, overall market direction, breaking news and economic events</p>
          </div>
        </div>
        <div class="next-step">
          <p>To get the full project break down from design, development through to testing and deployment please visit the ReadMe link below.</p>
        </div>
        <div class="button-div-traderDashboards">
            <a href="https://adamskoullos.github.io/TraderDashboards/" target="_blank" class="button live-app">
              <span class="material-icons">play_arrow</span>
              <h6>Live App</h6>
            </a>
            <a href="https://github.com/Adamskoullos/TraderDashboards" target="_blank" class="button">
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
  setup(props, context){
      const handleScroll = ()=>{
          context.emit('scroll')
      }

      return {handleScroll}
  }
}
</script>

<style lang="scss">
 

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

.project{
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 40px;

  h1{
    margin: 15px auto;
    font-size: 60px;
    font-weight: 300;
  }
  h5{
    font-weight: 300;
  }
  .button-div{
    padding: 20px 0;
  }
  a.button{
    background: $green;
    color: white;
    font-weight: 500;
    span{
      color: white;
      margin-right: 5px;
      vertical-align: middle;
      padding-bottom: 3px;
      
      
    }
  }
  a.button:hover{
    background: #30465F;
    transition: all ease 0.7s;
  }
  .tech-icons{
    flex:1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    padding: 20px 20px 20px 20px;
    // background: darkcyan;
    margin:auto;
    img{
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
  .project-overview{
    // background: chartreuse;
    padding-bottom: 20px;
  }
  .project-overview-traderDashboards{
    margin-bottom: 0;
  }
  .project-image{
    display: flex;
    align-items: center;
    justify-content: center;
    // width: 90%;
    // max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    
    img{
      width: 100%;
      max-width: 700px;
      box-shadow: 1px 2px 5px rgba(50,50,50,0.4);
    }
  }
  .overview{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    // background: chocolate;
    padding: 20px 20px;
    margin:0 auto;
    h5{
      margin: auto auto 5px 15px;
      font-weight: 500;
      }
    p{
      text-align: justify;
      margin-left: 15px;
      
      }
    a{
      margin: auto;
    }
  }
}

.button-div-traderDashboards{
  display: flex;
  align-items: center;
  justify-content: center;
  a.button{
    margin: 10px auto;
    color: white;
    font-weight: 500;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 120px;
    
    h6{
      margin-bottom: 0;
      font-weight: 500;
      color: white;
    }
    span{
      margin-right: 3px;
      font-size: 30px;
      color: white;
    }
    i{
      margin-right: 8px;
      font-size: 18px;
      color: white;
    }
  }
  a.live-app{
    padding-right: 15px;
  }
}
.next-step{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  padding: 10px 0;
}

div.divider{
  height: 1px;
  width: 90%;
  background: rgba(155, 155, 155, 0.1);
  margin: 20px auto;
  padding: 1px 0;
}
</style>