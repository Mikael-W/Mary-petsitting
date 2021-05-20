<template>
  <div class="cat-service_section">
    <h1>Visite féline</h1>
    <span class="cat-title"
      >Au cours de ma visite féline d’environ 30mns :</span
    >
    <div class="services-container">
      <img
        class="services-container_picture"
        src="../assets/img/cat-visit.jpg"
        alt="petsitting Nantes"
      />
      <ul class="cat-services_list">
        <li>Je m’occupe de leur repas</li>
        <li>De mettre de l’eau propre</li>
        <li>Des moments de câlins, de détente, de jeux</li>
        <li>Du nettoyage des gamelles et de la litière</li>
        <li>
          De leurs soins journaliers, de leurs soins médicaux uniquement sur
          ordonnance vétérinaire
        </li>
        <li>D’entretenir son environnement</li>
        <li>De vous envoyer des nouvelles en photos et vidéos</li>
      </ul>
    </div>
    <div class="grey-line"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cat-service_section {
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
.cat-title {
  width: 100vw;
  text-align: center;
  font-size: 2vw;
  padding: 2vw 0;
  background: #7d7c84;
  color: white;
  font-family: "poppins", sans-serif;
}
.cat-services_list li::before {
  content: "\2022";
  color: #fcacdf;
  font-weight: bold;
  display: inline-block;
  width: 1.2vw;
}

.cat-services_list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45vw;
  padding: 0 2.5vw;
  font-size: 2.2vw;
}
.cat-services_list li {
  padding-bottom: 4vw;
}
.services-container {
  display: flex;
}
.services-container_picture {
  width: 50vw;
}
.grey-line{
    width: 100vw;
    height: 6vw;
    background: #7D7C84;
}
</style>