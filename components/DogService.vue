<template>
<div class="dog-service_section">
<h1>Visite canine</h1>
<span class="dog-title"> Au cours de ma visite d’environ 1h :</span>
<div class="services-container">
<ul class="dog-services_list">
    <li>Je m’occupe de leur repas</li>
    <li>De toujours mettre de l’eau propre à disposition</li>
    <li>De faire une balade à chaque visite et à son rythme, selon ses besoins et vos souhaits</li>
    <li>Des moments de câlins, de détente, de jeux</li>
    <li>Du nettoyage des gamelles</li>
    <li>De leurs soins journaliers, de leurs soins médicaux uniquement sur ordonnance vétérinaire</li>
    <li>D’entretenir son environnement</li>
    <li>De vous envoyer des nouvelles en photos et vidéos</li>
</ul>
<img class="services-container_picture" src="../assets/img/dog-visit.jpg" alt="petsitting Nantes">
</div>
<div class="grey-line"></div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.dog-service_section{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 {
  font-family: "PumpkinStory", sans-serif;
  font-size: 5vw;
  color: #fcacdf;
  padding: 2vw;
}
.dog-title{
    width: 100vw;
    text-align: center;
    font-size: 2vw;
    padding: 2vw 0;
    background: #7D7C84;
    color:white;
    font-family: "poppins", sans-serif;
}
.dog-services_list li::before{
  content: "\2022";
  color: #fcacdf;
  font-weight: bold;
  display: inline-block; 
  width: 1.2vw;
}

.dog-services_list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45vw;
    padding: 0 2.5vw; 
    font-size: 2.2vw;
}
.dog-services_list li{
    padding-bottom: 3.5vw;;
}
.services-container{
    display: flex;
}
.services-container_picture{
    width: 50vw;
}
.grey-line{
    width: 100vw;
    height: 6vw;
    background: #7D7C84;
}
@media (max-width:767px){
    .services-container{
    flex-direction: column-reverse;
}
    .services-container_picture{
    width: 100vw;
}
    .dog-services_list{
    display: flex;
    flex-direction: column;
    width: 95vw;
    padding: 5vw 2.5vw; 
    font-size: 4vw;
}
}
</style>