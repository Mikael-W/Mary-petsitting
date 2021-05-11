<template>
  <div class="services-section">
      <div class="services-title">Mes services</div>
      <span class="services-subtitle">pour vos compagnons à 4 pattes</span>
      <div class="tags-container">
          <div class="tag">
              <div class="tag-img">
              <img class="tag-picture" src="../assets/img/home.png"/>
              </div>
              <span class="tag-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quod perspiciatis sequi voluptate quos animi.
              </span>
          </div>
          <div class="tag">
              <div class="tag-img">
              <img class="tag-picture" src="../assets/img/leash.png"/>
              </div>
              <span class="tag-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim fugiat mollitia! Obcaecati, unde quas.</span>
          </div>
          <div class="tag">
              <div class="tag-img">
              <img class="tag-picture" src="../assets/img/camera.png"/>
              </div>
              <span class="tag-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni dicta earum nisi deserunt beatae.</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.services-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
}
.services-title{
    font-size: 5vw;
    padding: 10vh 0 0 0;
    font-family: 'PumpkinStory', sans-serif;
    color:#FCACDF;
}
.services-subtitle{
    font-size:1.5vw;
    padding: 0 0 10vh 0;
    font-family: 'poppins', sans-serif;
}
.tags-container{
   display: grid;
   grid-template-columns: 1fr 1fr 1fr; 
   padding-left: 5vw;
}
.tag{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5vw 0 0;
}
.tag-img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    margin-bottom: 5vh;
    border: 20px solid #FCACDF;
    border-radius: 50%;

}
.tag-picture{
    width: 150px;
    height: 150px;
}
.tag-description{
    text-align: center;
    font-size: 2vw;
}
</style>