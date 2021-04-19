<template>
  <div class="top-nav-row">
      <h3>Adam Skoullos</h3>
  </div>
</template>

<script>
export default {

    
}
</script>

<style lang="scss">
.top-nav-row{
    height: 100%;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-shadow: 0px 1px 5px rgba(50,50,50,0.3);

    h3{
        margin: 0 15px;
        font-weight: 300;
    }

    i{
        font-size: 30px;
        margin-left: 15px;
    }
    i:hover{
        transform: scale(1.1);
    }
}

</style>