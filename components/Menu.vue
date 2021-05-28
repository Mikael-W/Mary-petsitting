<template>
  <div class="menus-container">
    <div class="desktop-menu">
    <nav class="desktop-nav">
      <ul class="menu">
        <li><NuxtLink class="link" to="/">Accueil</NuxtLink></li>
        <li><NuxtLink class="link" to="/blog">Blog</NuxtLink></li>
        <li class="dropdown">
          <NuxtLink class="link" to="/petsitting">Visites à domiciles</NuxtLink>
          <ul class="sub-tabs">
            <li><NuxtLink class="link" to="/dogsitting">Chien</NuxtLink></li>
            <li><NuxtLink class="link" to="/catsitting">Chat</NuxtLink></li>
          </ul>
        </li>
        <li>
          <NuxtLink class="link" to="/freeservices">Services en plus</NuxtLink>
        </li>
        <li><NuxtLink class="link" to="/prices">Tarifs</NuxtLink></li>
        <li><NuxtLink class="link" to="/contact">Devis/Contact</NuxtLink></li>
      </ul>
    </nav>
    </div>
    <div class="mobile-menu">
      
      <div @click="displayMenu = true" id="webapp_cover">
        <div role=button
        @click="displayMenu = false"
          id="menu_button">
          <input  type="checkbox" id="menu_checkbox" />
          <label  for="menu_checkbox" id="menu_label">
            <div  id="menu_text_bar"></div>
          </label>
        </div>
      </div>
      <nav v-if="displayMenu" class="mobile-nav">
        <NuxtLink class="mobile-link" to="/">Accueil</NuxtLink>
        <NuxtLink class="mobile-link" to="/blog">Blog</NuxtLink>
        <NuxtLink class="mobile-link" to="/petsitting"
          >Visites à domiciles</NuxtLink
        >
        <NuxtLink class="mobile-link" to="/freeservices"
          >Services en plus</NuxtLink
        >
        <NuxtLink class="mobile-link" to="/prices">Tarifs</NuxtLink>
        <NuxtLink class="mobile-link" to="/contact">Devis/Contact</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      displayMenu :false
    }
  },
  methods: {
    
    
  }
};
</script>

<style>
.desktop-nav {
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
.link:hover {
  color: #fcacdf;
}
.sub-tabs {
  position: absolute;
  display: none;
  top: 8vh;
  padding: 0 5.5vw;
  background: white;
}
.dropdown > .link::after {
  content: "▼";
  font-size: 1vw;
  padding-left: 10px;
}
.sub-tabs li {
  width: 100%;
  background: white;
  text-align: center;
  font-size: 1.5vw;
  padding: 1.5vw 0 1vw 0;
  font-family: "Poppins", sans-serif;
}
nav > ul li:hover .sub-tabs {
  display: block;
}
* {
  -webkit-tap-highlight-color: transparent;
}

*:focus {
  outline: none;
}
.mobile-menu{
  display: none;
}
#webapp_cover {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 98;
  margin: 0 auto;
  transform: translateY(-50%) scale(2);
}

#menu_button {
  width: 8vw;
  overflow: hidden;
}

#menu_checkbox {
  display: none;
}

#menu_label {
  position: relative;
  display: block;
  height: 7vw;
  cursor: pointer;
}

#menu_label:before,
#menu_label:after,
#menu_text_bar {
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fcacdf;
}

#menu_label:before,
#menu_label:after {
  content: "";
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
}

#menu_label:before {
  top: 2px;
}

#menu_label:after {
  top: 10px;
}

#menu_text_bar {
  top: 18px;
}

#menu_text_bar:before {
  content: "MENU";
  position: absolute;
  top: 10px;
  right: 0;
  left: 0;
  color: #fcacdf;
  font-size: 9px;
  font-weight: bold;
  font-family: "poppins", Arial, Helvetica, sans-serif;
  text-align: center;
}

#menu_checkbox:checked + #menu_label:before {
  left: -39px;
}

#menu_checkbox:checked + #menu_label:after {
  left: 39px;
}

#menu_checkbox:checked + #menu_label #menu_text_bar:before {
  animation: moveUpThenDown 0.8s ease 0.2s forwards,
    shakeWhileMovingUp 0.8s ease 0.2s forwards,
    shakeWhileMovingDown 0.2s ease 0.8s forwards;
}

@keyframes moveUpThenDown {
  0% {
    top: 0;
  }
  50% {
    top: -27px;
  }
  100% {
    top: -14px;
  }
}

@keyframes shakeWhileMovingUp {
  0% {
    transform: rotateZ(0);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(10deg);
  }
  100% {
    transform: rotateZ(0);
  }
}

@keyframes shakeWhileMovingDown {
  0% {
    transform: rotateZ(0);
  }
  80% {
    transform: rotateZ(3deg);
  }
  90% {
    transform: rotateZ(-3deg);
  }
  100% {
    transform: rotateZ(0);
  }
}
.mobile-nav {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10vw;
}
.mobile-link {
  text-decoration: none;
  font-family: "poppins", Arial, Helvetica, sans-serif;
  font-size: 8vw;
  padding-top: 5vw;
  color: #fcacdf;
}
@media (max-width: 767px){
  .desktop-menu{
    display: none;
  }
  .mobile-menu{
  display: block;
}
}
  

</style>