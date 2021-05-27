<template>
  <img class="logo" src="../assets/img/logo.png" alt="Mary au service de vos animaux">
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
@media (max-width: 767px){
  .logo{
  position: absolute;
  top:0vh;
  left:50%;
  transform: translateX(-50%);
  width: 45vw;
  border-radius: 100%;;
  background: white;
}
}
</style>