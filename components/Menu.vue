<template>
  <nav>
    <ul class="menu">
      <li><NuxtLink class="link" to="/">Accueil</NuxtLink></li>
      <li class="dropdown"><NuxtLink class="link" to="/">Petsitting</NuxtLink>
      <ul class="sub-tabs">
        <li><NuxtLink class="link" to="/dogsitting">Chien</NuxtLink></li>
        <li><NuxtLink class="link" to="/catsitting">Chat</NuxtLink></li>
      </ul>
      </li>
      <li><NuxtLink class="link" to="/prices">Tarifs</NuxtLink></li>
      <li><NuxtLink class="link" to="/contact">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav{
  position: absolute;
  top: 0;
  width: 100vw;
  background: white;
}
.menu {
  position: relative;  
  display: flex;
  align-items: center;
  width: 70vw;
  padding-left: 5vw;
  background: white;
  font-size: 1.5vw;
  color: #7d7c84;
}
.menu li {
  position: relative;
  font-family: "Poppins", sans-serif;
  padding: 4vh 0;
  width: 25%;
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
    top: 10vh ;
    background: white;
}
.dropdown > .link::after{
    content: "▼";
    font-size: 1vw;
    padding-left: 10px;
}
.sub-tabs li{
    width: 100%;
    padding: 1vw 2vw;
    text-align: left;
    font-size: 1.5vw;
    font-family: "Poppins", sans-serif;
}
nav > ul li:hover .sub-tabs{
    display: block;
} 
</style>