<template>
  <div class="wrapper">
    <div class="row project">
      <div class="col project-col">
        <h1>ProDev</h1>
        <h5>A light weight and zippy project management hub for small teams</h5>
        <div class="tech-icons">
          <img src="../assets/icons/vue.png" alt="logo">
          <img src="../assets/icons/bootstrap.png" alt="logo">
          <img src="../assets/icons/sass.png" alt="logo">
          <img src="../assets/icons/firebase.png" alt="logo">
        </div>
        <div class="row project-overview">
          <div class="col-12 col-xl-6 project-image">
            <img src="../assets/images/prodev.png" alt="project image">
          </div>
          <div class="col-12 col-xl-6 overview">
            <h5>Team Projects View:</h5>
            <p>A zoomed out view where all members for example the front end team can collaborate on the larger project by breaking sections down for example different parts of each sprint</p>
            <h5>User Projects View:</h5>
            <p>Each team member can create, read, update and delete their own projects</p>
            <h5>Bugs View:</h5>
            <p>The bug journal is a place where all team member issues and solutions are listed and shared. Sharing project bugs and solutions can reduce overall project downtime</p>
            <h5>Live Chat:</h5>
            <p>Bringing it all together and focusing the conversation is the built in real-time chat feature allowing team members to quickly discuss and respond to different tasks and issues</p>
          </div>
        </div>
        <router-link :to="{ name: 'Projects' }" class="button" >
          <span class="material-icons">open_in_full</span>Detailed View
        </router-link>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row project">
      <div class="col project-col">
        <h1>ProDev</h1>
        <h5>A light weight and zippy project management hub for small teams</h5>
        <div class="tech-icons">
          <img src="../assets/icons/vue.png" alt="logo">
          <img src="../assets/icons/bootstrap.png" alt="logo">
          <img src="../assets/icons/sass.png" alt="logo">
          <img src="../assets/icons/firebase.png" alt="logo">
        </div>
        <div class="row project-overview">
          <div class="col-12 col-xl-6 project-image">
            <img src="../assets/images/prodev.png" alt="project image">
          </div>
          <div class="col-12 col-xl-6 overview">
            <h5>Team Projects View:</h5>
            <p>A zoomed out view where all members for example the front end team can collaborate on the larger project by breaking sections down for example different parts of each sprint</p>
            <h5>User Projects View:</h5>
            <p>Each team member can create, read, update and delete their own projects</p>
            <h5>Bugs View:</h5>
            <p>The bug journal is a place where all team member issues and solutions are listed and shared. Sharing project bugs and solutions can reduce overall project downtime</p>
            <h5>Live Chat:</h5>
            <p>Bringing it all together and focusing the conversation is the built in real-time chat feature allowing team members to quickly discuss and respond to different tasks and issues</p>
          </div>
        </div>
        <router-link :to="{ name: 'Projects' }" class="button" >
          <span class="material-icons">open_in_full</span>Detailed View
        </router-link>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {

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
  }

  a.button{
    // margin: 200px;
    background: #00C587;
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
    max-width: 500px;
    padding: 20px 20px 20px 20px;
    // background: darkcyan;
    margin:auto;
    img{
      height: 50px;
      margin: auto 15px;
      // overflow: hidden;
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
  .project-overview{
    // background: chartreuse;
    padding-bottom: 20px;
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
      // padding-left: 5px;
      // border-left: 6px solid rgba(155, 155, 155, 0.2);
      }
    p{
      text-align: left;
      margin-left: 15px;
      
      }
    a{
      margin: auto;
    }
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