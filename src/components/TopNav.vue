<template>
  <div class="top-nav-container row">
    <div class="logo col-12 col-sm-4">
      <router-link :to="{ name: 'Projects' }" @click="handleScroll">
        <h2>Adam Skoullos</h2>
      </router-link>
    </div>
    <nav class="top-nav-row col-12 col-sm-8">
      <ul class="">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" @click="handleScroll">
            <i class="bi bi-house-fill"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Projects' }" @click="handleScroll">
            <i class="bi bi-grid-fill"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Blog' }" @click="handleScroll">
            <i class="bi bi-chat-left-text-fill"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <a href="https://github.com/Adamskoullos" target="_blank">
            <i class="bi bi-github"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://drive.google.com/file/d/1wbSA-j_UQG9RyzB0Uz4mO2FZgdy2Ng_0/view?usp=sharing"
            download
            target="_blank"
          >
            <i class="bi bi-file-earmark-person-fill"></i>
          </a>
        </li>
      </ul>
    </nav>
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
  .top-nav-container {
    display: flex;
    align-items: center;
    // justify-content: ;
    background: rgb(255, 255, 255);
    flex: 1;
    box-shadow: 0px 1px 5px rgba(50, 50, 50, 0.3);
    z-index: 9;

    .top-nav-row {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 0;
      margin: auto 15px;
      background: white;
      z-index: 10;

      ul {
        margin: auto 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        // background: red;
        padding-left: 0;
        padding-right: 0;
        margin-right: 15px;

        li {
          a {
            box-shadow: 1px 1px 5px rgba(50, 50, 50, 0);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            i {
              font-size: 26px;
              margin: auto 10px;
              color: $icon;
              padding-top: 5px;
            }

            i:hover {
              transform: scale(1.1);
            }
          }

          .router-link-active {
            box-shadow: 1px 1px 5px rgba(50, 50, 50, 0);

            i {
              color: $active-link-icon;
              transform: scale(1.2);
              transition: all ease 0.1s;
              padding-top: 4px;
            }
          }
        }
      }
    }
    div a {
      text-decoration: none;
      h2 {
        margin: 15px 15px;
        font-weight: 300;
      }
    }
  }
</style>
