<template>
  <div class="testimonial-section">
    <div class="testimonial-title">Témoignages</div>
    <div class="testimonial-subtitle">
      découvrez les avis des maîtres qui m'ont fait confiance
    </div>
    <button @click="prev()" type="button" class="btn btn-left">
      <img src="../assets/img/left-arrow.png" class="icone" alt="" />
    </button>
    <div class="testimonial-container">
    <div
      class="testimonial-slider"
      :style="{
        transform: `translateX(${index}vw)`,
        transition: `${transition}`,
      }"
    >
      <div class="slide">
        <img src="../assets/img/ponita.jpg" class="customer-picture" alt="" />
        <span class="customer-name">Ponita</span>
        <p class="customer-comment">
          "Je suis très satisfaite des services de Mary, pour la garde de ma
          chatte quand je ne suis pas chez moi. Mary est très arrangeante pour
          l'échange des clés, et elle envoie toujours des photos lors de ses
          passages. Ma petite chatte, est maintenant habituée à Mary, et elle
          l'apprécie aussi 😁 Que du positif, je recommande Mary sans problème
          pour la garde de chat à domicile 😁"
        </p>
        <span class="customer-name">Océane</span>
      </div>
      <div class="slide">
        <img src="../assets/img/oreo.jpg" class="customer-picture" alt="" />
        <span class="customer-name">Oréo & Niobé</span>
        <p class="customer-comment">
          "Pour mon petit voyage de 2 semaines en Malaisie, j'ai fait appel à
          Mary pour prendre soin de mes 2 chats; tout d'abord en tant qu'amie
          sur qui je pouvais compter mais aussi et surtout parce que c'est une
          amoureuse des animaux toujours très soucieuse de leurs bien-êtres. Pas
          de zèle, elle a respecté toutes les instructions que je lui avais
          donné à mon départ. Elle m'envoyait quelques vidéos de ses visites
          pour que je puisse voir mes animaux de compagnie, et mes 2 matous se
          laissaient faire! Même eux avaient confiance en elle 😊 Mary est
          vraiment une passionnée, quelqu'un de sérieux sur lequel on peut
          compter pour prendre soin de nos amis les bêtes."
        </p>
        <span class="customer-name">Delphine</span>
      </div>
      <div class="slide">
        <img
          src="../assets/img/haubance.jpeg"
          class="customer-picture"
          alt=""
        />
        <span class="customer-name">Haubance</span>
        <p class="customer-comment">
          "Nous sommes très satisfaits d’avoir choisi Mary pour garder notre
          chien à domicile pendant notre absence. Haubance, berger des Tatras,
          l’a de suite appréciée et le feeling est vite passé. De plus Mary est
          à l’écoute de nos besoins pour personnaliser au mieux ses services.
          Nous repartirons en toute tranquillité sachant que notre Pépère se
          fera une joie de la retrouver. « Mary, Au service de vos animaux »
          c’est vraiment vrai ! On recommande !""
        </p>
        <span class="customer-name">Frédéric & Carole</span>
      </div>
      <div class="slide">
        <img src="../assets/img/ramzo.jpeg" class="customer-picture" alt="" />
        <span class="customer-name">Razmo & Poussière</span>
        <p class="customer-comment">
          "On a fait appel deux fois à Mary pour garder nos deux chats. L’un a
          besoin d’énormément d’attention, et l’autre beaucoup moins. Elle a su
          s’adapter aux besoin de chacun des chats. Durant les vacances d’été
          pendant les grosses chaleurs elle n’hésitait pas à passer plusieurs
          fois par jour ou très tôt le matin. J’ai confiance les yeux fermés,
          autant de lui laisser les clés de ma maison que de lui confier la vie
          de mes chats. Elle est très sérieuse et professionnelle. Les petites
          photos et vidéos durant la garde et les nouvelles quotidiennes sont un
          plus qui font plaisir ! Très arrangeante pour les remises de clés et
          du paiement. Elle nous a été de très bons conseils sur leur qualité de
          vie notamment pour l’achat d’une fontaine à eau ! Bref, je recommande
          les yeux fermés !! Bien plus agréable pour nos chats que d’aller dans
          des boxs enfermés toute la journée ou ils n’ont pas leurs habitudes !
          "
        </p>
        <span class="customer-name">Laurie & Baptiste</span>
      </div>
      <div class="slide">
        <img src="../assets/img/loustik.jpeg" class="customer-picture" alt="" />
        <span class="customer-name">Loustik</span>
        <p class="customer-comment">
          "Hello les poilus, Moi c’est Loustik, Bouvier Bernois de presque 6
          ans. Mary, c’est ma dogsitteuse préférée (et celle de Maman aussi) et
          pourtant, on en a fait plusieurs avant de trouver notre perle rare.
          Toujours à l’écoute et attentionnée, on fait des promenades à chaque
          visite. Avec mon copain Frimousse, le chat de la maison, on a des gros
          câlins tout le temps (d’ailleurs, je crois que Mary est un peu gaga de
          nous) et Maman a le droit à des photos et un petit mot à chaque fois
          pour savoir qu’on pète la forme. Maman dit qu’elle ne changerait de
          nounou pour rien au monde et que choisir Mary, c’est faire le choix de
          la sérénité et de la passion animale. Vous pouvez donc lui faire
          confiance les yeux fermés 👍
        </p>
        <span class="customer-name">Marie</span>
      </div>
    </div>
    </div>
    <button @click="next()" type="button" class="btn btn-right">
      <img src="../assets/img/right-arrow.png" class="icone" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      index: 0,
      transition: "transform 0.2s ease",
    };
  },
  methods: {
    prev() {
      if (this.index === 0) {
        this.transition = "none";
        this.index = -102;
      } else {
        this.transition = "transform 0.2s ease";
        this.index += 34;
      }
    },
    next() {
      if (this.index === -102) {
        this.transition = "none";
        this.index = 0;
      } else {
        this.transition = "transform 0.2s ease";
        this.index -= 34;
      }
    },
  },
};
</script>

<style scoped>
.testimonial-section {
  background: #7d7c84;
  position: relative;
  margin: 5vh 0 2vh 0;
  overflow-x: hidden;
}
.testimonial-slider {
  display: flex;
  align-items: flex-start;
  width: 200vw;
  height: 65vw;
  overflow-x: hidden;
}
.testimonial-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vw;
  margin: 3vh 0 0 0;
  font-family: "PumpkinStory", sans-serif;
  color: #fcacdf;
}
.testimonial-subtitle {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;
  padding: 1.5vh 0;
  font-family: "poppins", sans-serif;
  color: white;
}
.slides-container {
  display: flex;
  width: 100%;
}
.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 29vw;
  margin: 0 2vw;
}
.customer-picture {
  background: white;
  border-radius: 50%;
  width: 10vw;
  margin: 1.5vh 0;
  object-fit: cover;
}
.customer-name {
  font-size: 2.2vw;
  margin: 0 1.5vh;
  color: #fcacdf;
  font-family: "PumpkinStory", sans-serif;
}
.customer-comment {
  width: 70%;
  text-align: center;
  font-size: 1.5vw;
  padding-top: 1vh;
  margin-bottom: 2vh;
  color: white;
  font-style: italic;
}
.btn {
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: absolute;
  display: block;
  z-index: 1000;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcacdf;
  padding: 0;
  cursor: pointer;
}
.btn-left {
  top: 50%;
  left: 1vw;
}
.btn-right {
  top: 50%;
  right: 1vw;
}
.icone {
  width: 25px;
}
@media (max-width: 767px) {
  .slide {
  width: 80vw;
  margin: 0;
}
.testimonial-slider {
  display: flex;
  align-items: flex-start;
  width: 490vw;
  transform: none;
}
.testimonial-container {
  width:100vw;
  overflow-x: scroll;

}
.btn{
  display: none;
}
.testimonial-title{
  font-size: 6.5vw;
}
.testimonial-subtitle{
  font-size: 2.5vw;
}
.customer-picture {
  width: 25vw;
}
.customer-name {
  font-size: 5vw;
  padding-bottom: 2vw;;
}
.customer-comment {
  width: 70%;
  text-align: center;
  font-size: 3vw;
}
}
</style>