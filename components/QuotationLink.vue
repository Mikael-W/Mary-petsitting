<template>
  <div class="quotation-section">
    <span class="quotation-title"> Besoin d'un devis ? </span>
    <p class="quotation-texte">
      Un week end ? Un voyage ? Une absence de dernière minute ? Je serais ravis
      de répondre à vos besoins
    </p>
    <NuxtLink type="button" class="quotation-page_btn" to="/prices"
      >Demander un devis</NuxtLink
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
.quotation-section {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quotation-title {
  font-family: "PumpkinStory", sans-serif;
  font-size: 5vw;
  margin-bottom: 2vw;
  color: #fcacdf;
}
.quotation-texte {
  font-family: "poppins", sans-serif;
  font-size: 1.5vw;
  padding: 2vw;
}
.quotation-page_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  width: 30vw;
  height: 4vw;
  margin: 3vw;
  border-radius: 2vw;
  background: #fcacdf;
  text-decoration: none;
  color: white;
}
</style>