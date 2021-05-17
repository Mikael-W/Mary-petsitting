<template>
  <div class="services-section">
      <div class="services-title">Mes services</div>
      <span class="services-subtitle">pour vos compagnons à 4 pattes</span>
      <div class="tags-container">
          <div class="tag">
              <div class="tag-img">
              <img class="tag-picture" src="../assets/img/dog-iconW.png"/>
              </div>
              <span class="tag-description">Visite à votre domicile une à plusieurs fois par jour, sur une journée, un week-end ou long séjour, en
fonction des besoins de votre loulou accompagnée d’une balade en extérieur, des moments de câlins
et de jeux.
              </span>
          </div>
          <div class="tag">
              <div class="tag-img">
              <img class="tag-picture" src="../assets/img/happyW.png"/>
              </div>
              <span class="tag-description">Visites à votre domicile une à plusieurs fois par jour, sur une journée, un week-end ou long séjour,
selon son mode de vie et ses habitudes, détente, câlins et moments de jeux seront mis à profit.</span>
          </div>
          <div class="tag">
              <div class="tag-img">
              <img class="tag-picture" src="../assets/img/photo-cameraW.png"/>
              </div>
              <span class="tag-description">A chacune de mes visites, je vous envoie des photos et vidéos de votre protégé et vous donne de ses
nouvelles. Je suis joignable 24h sur 24 et 7jours /7.</span>
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
    width: 20vw;
    height: 20vw;
    background: #7d7c84;
    margin-bottom: 5vh;
    border-radius: 2rem;

}
.tag-picture{
    width: 10vw;
}
.tag-description{
    text-align: center;
    font-size: 1.8vw;
    font-family: "poppins", sans-serif;
}
</style>