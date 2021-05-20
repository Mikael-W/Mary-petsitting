<template>
  <div class="visit-selection_container">
      <div class="dog-visit">
          <span class="selection-title">Côté chien</span>
      <NuxtLink class="selection-link" to="/dogsitting">
      <img class="link-picture" src="../assets/img/dog-visit.jpg" alt="garde chien nantes">
      </NuxtLink>
      </div>
      <div class="cat-visit">
          <span class="selection-title">Côté chat</span>
      <NuxtLink class="selection-link" to="/catsitting">
      <img class="link-picture" src="../assets/img/cat-visit.jpg" alt="garde chien nantes">
      </NuxtLink>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.visit-selection_container{
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2vw;
}
.selection-title{
    display: block;
    text-align: center;
     font-family: "PumpkinStory", sans-serif;
    font-size: 5vw;
    color: #fcacdf;
    padding: 2vw;
}
.selection-link{
    height: 30vw;
}
.link-picture{
    height: 30vw;
    width: 25vw;
    border-radius: 2rem;
}
</style>