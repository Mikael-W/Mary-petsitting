<template>
  <div class="about-section">
    <div class="title">
      <h1>Votre pet sitter sur Nantes et sa région</h1>
    </div>
    <div class="about">
      <div class="about-picture">
        <img
          class="about-picture_img"
          src="../assets/img/maryjenzoabout.jpeg"
          alt="mary pet sitter nantes"
        />
      </div>
      <div class="about-description">
        <p class="about-description_intro">
          "Grande passionnée des animaux depuis plusieurs années, je suis
          l’heureuse maîtresse de Jenzo, mon bouvier bernois âgé de 6 ans et
          demi. J’ai vécu également avec 2 chats, Dinki & Lou, malheureusement
          partis rejoindre les étoiles. Titulaire du
          <strong> Certificat de Capacité Animaux Domestiques </strong>,
          spécialisé dans les <strong> chats et chiens </strong>, cette
          formation dans le domaine animalier m’a permis d’acquérir davantage de
          connaissances et de développer mes compétences afin de vous les
          proposer.
        </p>
      </div>
    </div>
    <div class="about-description_suit">
      <p class="about-description_texte">
        J’ai créé mon service de <strong> garde à domicile </strong>, agréé par
        la Direction Départementale de la Protection des Populations et couvert
        par une Assurance Responsabilité Civile Professionnelle.
      </p>

      <p class="about-description_texte">
        Je vous offre plusieurs solutions adaptables et personnalisées répondant
        à vos attentes. Lors de mes prestations, ma priorité est de veiller au
        bien être de votre animal, de répondre à ses besoins et de lui tenir
        compagnie. Confiance et complicité créées, petits et grands, nous serons
        contents de nous retrouver.<br />
        Au plaisir de vous rencontrer votre poilu et vous-même,<br />
        Animalement,<br />
        Mary."
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  padding: 5vh 5vw;
}
h1 {
  font-family: "PumpkinStory", sans-serif;
  font-size: 5vw;
  color: #fcacdf;
}
.about {
  display: flex;
  align-items: center;
  width: 100vw;
  padding-bottom: 2vh;
}
.about-picture {
  display: flex;
  justify-content: center;
  width: 40vw;
}
.about-picture_img {
  object-fit: contain;
  border-radius: 50%;
  width: 20vw;
}
.about-description {
  display: flex;
  flex-direction: column;
}
.about-description_suit {
  width: 100vw;
}
.about-description_intro {
  width: 60vw;
  padding-right: 5vw;
  line-height: 4.8vh;
  font-size: 1.8vw;
  font-family: sans-serif;
  font-style: italic;
  text-align: center;
}
.about-description_texte {
  width: 90vw;
  padding-left: 5vw;
  padding-right: 2vw;
  padding-top: 0;
  line-height: 4.8vh;
  font-size: 1.8vw;
  font-family: sans-serif;
  font-style: italic;
  text-align: center;
}
</style>