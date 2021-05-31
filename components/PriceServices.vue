<template>
  <div class="services-section">
    <div class="services-section_title">Tarifs 2021</div>
    <div class="includes-services">
      <span class="prices-title">Inclus dans mes tarifs</span>
      <ul>
        <li>La pré visite</li>
        <li>Pas de supplément le dimanche ni les jours fériés</li>
        <li>L'annulation de la garde au dernier moment</li>
        <li>Les animaux supplémentaires</li>
        <li>Relever votre courrier</li>
        <li>L'arrosage de vos plantes</li>
        <li>L'aération de votre maison</li>
        <li>Ouvrir et fermer vos volets</li>
        <li>Sortir et rentrer vos poubelles</li>
      </ul>
      <span class="km-charges">Les tarifs inclus également les frais Kilométriques.</span>
      <p class="services-infos">
        Dès votre confirmation de mes services, nous remplirons un contrat de
        garde signé en 2 exemplaires. Nous verrons ensemble les conditions
        générales et la fiche de renseignement pour chaque animal avec vos
        demandes.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.services-section{
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.services-section_title{
  font-family: "PumpkinStory", sans-serif;
  font-size: 6.5vw;
  padding: 2vw;
  color: #fcacdf;
}
.prices-title{
  display: flex;
  justify-content: center;
  align-items: center;
  width:100vw;
  font-size: 2.5vw;
  background: #7D7C84;
  color: white;
  padding: 2vw 0;
  font-family: "poppins", sans-serif;
  font-weight: bold;
}
.includes-services ul{
  padding: 2vw;
}
.includes-services{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.includes-services li{
  font-size: 2vw;
  padding-bottom: 1.5vw;;
  font-family: "poppins", sans-serif;
}
.includes-services li::before{
  content: "\2022";
  color: #fcacdf;
  font-weight: bold;
  display: inline-block; 
  width: 1.2vw;
}
.km-charges{
  font-size: 2.5vw;
  color:#7E52A0;
  padding: 2vw;
  font-family: "poppins", sans-serif;
  font-weight: bold;
}
.services-infos{
  width: 80%;
  text-align: center;
  font-size: 2vw;
  line-height: 3vw;
   padding: 2vw;
  font-family: "poppins", sans-serif;
}
@media (max-width:767px){
  .includes-services li{
  font-size: 4vw;
}
  .includes-services li::before{
  padding-right: 1vw;
}
  .services-infos{
  width:90%;
  font-size: 4vw;
  line-height: 5vw;
}
  .km-charges{
  font-size: 4vw;
  text-align: center;
}
}
</style>