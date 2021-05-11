<template>
  <div class="about-section">
   <div class="title">
  <h1>Votre pet sitter sur Nantes et sa région </h1>
  </div>
  <div class="about">
      <div class="about-picture">
      <img class="about-picture_img" src="../assets/img/maryjenzoabout.jpeg" alt="mary pet sitter nantes">
      </div>
      <p class="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nostrum libero asperiores excepturi quia inventore ratione saepe nulla error eius molestiae! Ducimus quibusdam mollitia inventore vel fuga veritatis ad distinctio!</p>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    padding: 10vh 5vw;
}
h1{
    font-family: 'PumpkinStory', sans-serif;
    font-size: 5vw;
    color:#FCACDF;
}
.about{
    display: flex;
    align-items: center;
    width: 100vw;
}
.about-picture{
    display: flex;
    justify-content: center;
    width: 50vw;
    
}
.about-picture_img{
   object-fit:contain; 
   border-radius: 100%;
   width: 25vw;
}
.about-description{
    width: 40%;
    padding: 0 5vw;
    font-size: 2.5vw;
    font-family: 'poppins', sans-serif;
}
</style>