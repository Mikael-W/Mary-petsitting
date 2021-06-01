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
          <li class="footer-li"><a class="ref-link" href="https://chuv.oniris-nantes.fr/">CHUV ONIRIS</a></li>
          <li class="footer-li"><a class="ref-link" href="https://chuv.oniris-nantes.fr/">CHVA ATLANTIA</a></li>
          <li class="footer-li">Mentions légales</li>
      </ul>
      </div>
      <div class="infos-links">
           <span class="footer-title">ME CONTACTER</span>
      <ul>
          <li class="footer-li"><NuxtLink class="footer-links" to="/contact">contact@mary-petsitting.com</NuxtLink></li>
          <li class="footer-li">06.10.87.14.38</li>
      </ul>
      <div class="social-links">
          <a href="https://www.instagram.com/mary_petsitting/"><img class="social-icon" src="../assets/img/instalogoP.png" alt=""></a>
          <a href="https://www.facebook.com/Mary-petsitting-101150668833607"><img class="social-icon" src="../assets/img/fb-iconP.png" alt=""></a>
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
.footer-links:hover, .ref-link:hover, .author-link:hover{
    color: #fcacdf;
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
.ref-link{
    text-decoration: none;
    color:white;
}
@media (max-width:767px){
    .footer-link_container{
    width:100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vw 0 20vw 0vw;
}
    .footer-title{
    font-size: 6.5vw;
    padding: 0 2vw;
}
    .footer-li{
    font-size: 3vw;
    text-align: center;
    padding: 2vw 0 2vw 2vw;
}
    .social-links{
    justify-content: center;
    padding: 0 1vw;
    margin-bottom: 2vw;
}
    .social-icon{
    width: 3vw;
    margin-bottom: 2vw;

}
.copyright{
    position: absolute;
    bottom:20vw;
    width: 95vw;
    text-align: center;
    color: white;
    padding: 0 2vw;
    margin-bottom: 2vw;
    font-size: 2vw;
}
.author-link{
    position: absolute;
    bottom:18vw;
    width: 100vw;
    right: 0;
    text-align: center;
    font-size: 2vw;
}
}
</style>