<template>
  <footer>
      <div class="footer-link_container">
      <div class="quick-links">
          <span class="footer-title">LIENS RAPIDES</span>
      <ul>
          <li class="footer-li"><NuxtLink class="footer-links" to="/">Accueil</NuxtLink></li>
          <li class="footer-li"><NuxtLink class="footer-links" to="/petsitting">Visite à domicile</NuxtLink></li>
          <li class="footer-li"><NuxtLink class="footer-links" to="/prices">Tarifs</NuxtLink></li>
      </ul>
      </div>
      <div class="legals-links">
          <span class="footer-title">LIENS PRATIQUES</span>
      <ul>
          <li class="footer-li">Lien 1</li>
          <li class="footer-li">Lien 2</li>
          <li class="footer-li">Mentions légales</li>
      </ul>
      </div>
      <div class="infos-links">
           <span class="footer-title">ME CONTACTER</span>
      <ul>
          <li class="footer-li">contact@mary-petsitting.com</li>
          <li class="footer-li">06.10.87.14.38</li>
      </ul>
      <div class="social-links">
          <a href="https://www.instagram.com/mary_petsitting/"><img class="social-icon" src="../assets/img/instalogo.png" alt=""></a>
          <a href="https://www.facebook.com/Mary-petsitting-101150668833607"><img class="social-icon" src="../assets/img/fb-iconW.png" alt=""></a>
      </div>
      </div>
      </div>
      <div class="copyright">© 2021 Mary - Au service de vos animaux. 
                            Tous droits réservés.
                            </div>
      <a href="https://www.mikaelw.com" class="author-link">Design by MW</a>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
    position: relative;
    width: 100vw;
    background: #14110F;
}
.footer-link_container{
    width:95vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2vw 0 5vw 5vw;;
}
.footer-title{
    color: #fcacdf;
    font-size: 2vw;
    padding: 0  2vw;
    font-family: "PumpkinStory", sans-serif;
}
.quick-links{
    grid-column-start: 1;
}
.legals-links{
    grid-column-start: 2;
}
.infos-links{
    grid-column-start: 3;
}
.footer-links{
    text-decoration: none;
    color: white;
}
.footer-li{
    font-size: 1.2vw;
    color: white;
    padding: 2vw 0 0 2vw;
}
.copyright{
    position: absolute;
    bottom:2vh;
    color: white;
    padding: 0 2vw;
    font-size: 1vw;
}
.author-link{
    position: absolute;
    bottom:2vh;
    right: 3vw;
    text-decoration: none;
    color: white;
    cursor: pointer;
}
.social-links{
    display: flex;
    align-items: center;
    padding: 0 1vw;
}
.social-icon{
    width: 1.5vw;
    padding: 2vw 1vw;
}
</style>