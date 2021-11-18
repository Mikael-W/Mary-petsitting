<template>
  <div class="eventContainer">
    <div class="eventContent">
    <p class="eventText">En l'attente d'un heureux événement, les gardes sont actuellement arrêtées. Je serais de nouveau disponible à compter de Septembre 2022. Animalement Mary</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.eventContent{
  display:flex;
  justify-content:center;
  align-items: center;
  width: 100vw;
  height: 15vh;
}
.eventText{
  text-align:center;
  padding: 1rem;
  font-size:3vw;
  color:#fcacdf ;
  font-family: "PumpkinStory", sans-serif;
}
@media (max-width: 767px){
  .eventText{
    font-size:5vw;
  }
}

</style>