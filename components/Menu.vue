<template>
  <nav>
    <ul class="menu">
      <li><NuxtLink class="link" to="/">Accueil</NuxtLink></li>
      <li class="dropdown"><NuxtLink class="link" to="/petsitting">Visites à domiciles</NuxtLink>
      <ul class="sub-tabs">
        <li><NuxtLink class="link" to="/dogsitting">Chien</NuxtLink></li>
        <li><NuxtLink class="link" to="/catsitting">Chat</NuxtLink></li>
      </ul>
      </li>
      <li><NuxtLink class="link" to="/freeservices">Services en plus</NuxtLink></li>
      <li><NuxtLink class="link" to="/prices">Tarifs</NuxtLink></li>
      <li><NuxtLink class="link" to="/contact">Devis/Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav{
  position: sticky;
  z-index: 10000;
  top: 0;
  width: 100vw;
  background: white;
}
.menu {
  position: relative;  
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  background: white;
  font-size: 1.5vw;
  color: #7d7c84;
}
.menu li {
  position: relative;
  font-family: "Poppins", sans-serif;
  padding: 4vh 0;
}
.link {
  text-decoration: none;
  color: #7d7c84;
}
.link:hover{
    color: #fcacdf;
}
.sub-tabs{
    position: absolute;
    display: none;
    top: 8vh ;
    padding: 0 5.5vw;
    background: white;
}
.dropdown > .link::after{
    content: "▼";
    font-size: 1vw;
    padding-left: 10px;
}
.sub-tabs li{
    width: 100%;
    background: white;
    text-align: center;
    font-size: 1.5vw;
    padding: 1.5vw 0 1vw 0;
    font-family: "Poppins", sans-serif;
}
nav > ul li:hover .sub-tabs{
    display: block;
} 
</style>