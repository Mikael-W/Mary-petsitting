<template>
  <div class="menus-container">
    <div class="desktop-menu">
      <nav class="desktop-nav">
        <ul class="menu">
          <li><NuxtLink class="link" to="/">Accueil</NuxtLink></li>
          <li><NuxtLink class="link" to="/blog">Blog</NuxtLink></li>
          <li class="dropdown">
            <NuxtLink class="link" to="/petsitting"
              >Visites à domiciles</NuxtLink
            >
            <ul class="sub-tabs">
              <li><NuxtLink class="link" to="/dogsitting">Chien</NuxtLink></li>
              <li><NuxtLink class="link" to="/catsitting">Chat</NuxtLink></li>
            </ul>
          </li>
          <li>
            <NuxtLink class="link" to="/freeservices"
              >Services en plus</NuxtLink
            >
          </li>
          <li><NuxtLink class="link" to="/prices">Tarifs</NuxtLink></li>
          <li><NuxtLink class="link" to="/contact">Devis/Contact</NuxtLink></li>
        </ul>
      </nav>
    </div>
    <div class="mobile-menu_container">
      <div class="mobile-menu">
        <div role="button" @click="displayMenu = true" class="mobile-menu_btn" v-if="displayMenu == false">
          <span class="btn-upline"></span>
          <span class="btn-midline"></span>
          <span class="btn-downline"></span>
        </div>
        <button class="close-menu_btn" @click="displayMenu = false" v-if="displayMenu == true">X</button>
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
  data() {
    return {
      displayMenu: false,
    };
  },
  mounted() {
    this.staggering()
  },
  methods: {
    staggering() {
      const gsap = this.$gsap
      gsap.from('.link', {
        opacity:0,
        duration: 1,
        x: 150,
        stagger: 0.20,
      })
    }
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
.mobile-menu_container {
  display: none;
}
.mobile-menu{
  position: fixed;
  bottom:0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 15vw;
  background: white;
}
.mobile-menu_btn{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width:10vw;
  height: 10vw;
  background: white;
}
.btn-upline {
  width: 10vw;
  height: 4px;
  background: #fcacdf;
}

.btn-midline {
   width: 10vw;
  height: 4px;
  background: #fcacdf;
}
.btn-downline{
   width: 10vw;
  height: 4px;
  background: #fcacdf;
}
.mobile-nav {
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mobile-link {
  text-decoration: none;
  font-family: "poppins", Arial, Helvetica, sans-serif;
  font-size: 8vw;
  padding-top: 8vw;
  color: #fcacdf;
}
.close-menu_btn{
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: #fcacdf;
  font-size:5vw;
  width: 10vw;
  height: 10vw;
  border: 2px solid #fcacdf;
  border-radius: 50%;
  margin-bottom: 2vw;
}
@media (max-width: 767px) {
  .desktop-menu {
    display: none;
  }
  .mobile-menu_container {
    display: block;
  }
}
</style>