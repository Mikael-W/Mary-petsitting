<template>
  <div class="articles-selection_container">
      <div class="article">
        <span class="article-title">Pourquoi choisir un petsitter ?</span>
      <NuxtLink class="article-link" to="/petsitter">
      <img class="link-picture" src="../assets/img/petsitter.jpeg" alt="petsitter nantes">
      </NuxtLink>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.articles-selection_container{
    width: 96vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-around;
    align-items: center;
    padding: 2vw 2vw;
}
.articles{
    grid-column-start: 1;
}
.article-title{
    display: block;
    text-align: center;
     font-family: "PumpkinStory", sans-serif;
    font-size: 2.5vw;
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