<template>
  <div class="logo-section">
  <div class="logo-mobile_container">
    <div class="logo-mobile_social">
    <a href="https://www.facebook.com/Mary-petsitting-101150668833607"><img class="header-icons" src="../assets/img/fb-iconP.png" alt=""></a>
    <a href="https://www.instagram.com/mary_petsitting/"><img class="header-icons" src="../assets/img/instalogoP.png" alt=""></a>
    </div>
    <div class="logo-mobile_contact">
    <NuxtLink to="contact" class="header-icons mail">@</NuxtLink>
    <a href="tel:+33610871438"><img class="header-icons" src="../assets/img/tel-iconP.png" alt=""></a>
    </div>
  </div>
  <img class="logo" src="../assets/img/logo.png" alt="Mary au service de vos animaux">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.logo{
  position: absolute;
  top:9vh;
  right: 1vw;
  width: 35vw;
  border-radius: 100%;;
  background: white;
}
.logo-mobile_container{
  display:none;
}
@media (max-width: 767px){
  .logo-mobile_container{
  display:block;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: 100vw;
  height: 15vw;
}
  .logo{
  position: absolute;
  top:0vh;
  right:50%;
  transform: translateX(50%);
  width: 23vw;
  border-radius: 100%;;
  background: white;
}
.header-icons{
  width: 4vw;
  padding: 0 3vw;
}
.mail{
  font-size: 5.6vw;
  padding: 0 1.5vw;
  color:#fcacdf;
  text-decoration: none;
}
}
</style>