<template>
  <div class="include-services_section">
    <div class="include-services_title">Mes services inclus et gratuit</div>
    <div class="include-services_description">
      <span class="description-title">
        Lors de ma visite, voici mes services supplémentaires gratuits que je
        vous propose :
      </span>
      <ul class="services-list">
        <li>Relever votre courrier</li>
        <li>L’arrosage de vos plantes</li>
        <li>L’aération de votre maison</li>
        <li>Ouvrir et fermer vos volets</li>
        <li>Sortir et rentrer vos poubelles</li>
        <li>Pas de supplément le dimanche ni les jours fériés</li>
        <li>L’annulation de la garde au dernier moment</li>
        <li>Les animaux supplémentaires</li>
      </ul>
      <div class="visit-container">
          <img class="visit-container_picture" src="../assets/img/dogsitting.jpg" alt="dogsitter">
        <p class="services-textes">
        La pré-visite est également gratuite, ce moment d’échange va nous
        permettre de se rencontrer et de faire connaissance ainsi qu’avec votre
        loulou. On peut, lors de ce 1 er rdv, procéder à la remise des clés et
        établir le contrat de garde.
      </p>
      </div>
      <p class="services-textes no-key">
        Si un autre rendez-vous doit être convenu pour la remise des clés avant
        la prestation, les frais de déplacement seront facturés.
      </p>
      <div class="visit-container catpart">
        <p class="services-textes">
        Je serais à votre écoute pour vos besoins, vos attentes, vos demandes
        concernant la garde votre poilu. Je pourrais ainsi connaître davantage
        ses habitudes, son environnement et si problèmes médicaux il y a.
      </p>
          <img class="visit-container_picture" src="../assets/img/catsitting.jpg" alt="catsitter">
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.include-services_title{
    width: 100vw;
    text-align: center;
    padding: 2vw 0;
    font-family: "PumpkinStory", sans-serif;
    font-size: 6vw;
    color: #fcacdf;
}
.include-services_description{
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.description-title{
    width: 100vw;
    text-align: center;
    font-size: 2vw;
    padding: 2vw 0;
    background: #7D7C84;
    color:white;
    font-family: "poppins", sans-serif;
}
.services-list{
    display: flex;
    flex-direction: column;
}
.services-list li{
  font-size: 2vw;
  padding-top: 1.5vw;
  font-family: "poppins", sans-serif;
}
.services-list li::before{
  content: "\2022";
  color: #fcacdf;
  font-weight: bold;
  display: inline-block; 
  width: 1.2vw;
}
.services-textes{
  width: 58vw;
  font-size: 2vw;
  padding: 2vw;
  text-align: center;
  color: white;
  font-family: "poppins",sans-serif;
}
.no-key{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7E52A0;
  background: white;
  height: 15vw;
  font-weight: bold;
}
.visit-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vw;
  background: #7D7C84;
}
.visit-container_picture{
  width: 40vw;
}
@media (max-width:767px){
  .visit-container{
  width:100vw;
  flex-direction: column;
  margin: 5vw 0;
}
  .visit-container_picture{
  width: 100vw;
}
.include-services_title{
    font-size: 6.5vw;
}
.catpart{
  flex-direction: column-reverse;
}
.services-list li{
  font-size: 4vw;
  padding-top: 1.5vw;
  font-family: "poppins", sans-serif;
}
.services-list li::before{
  padding-right: 1vw;
}
.services-textes{
  font-size: 4vw;
  padding: 2vw;
  text-align: center;
  color: white;
  font-family: "poppins",sans-serif;
}
.no-key{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7E52A0;
  background: white;
  height: 15vw;
  font-weight: bold;
}
}
</style>