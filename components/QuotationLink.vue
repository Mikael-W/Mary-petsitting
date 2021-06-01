<template>
  <div class="quotation-section">
    <span class="quotation-title"> Des questions ou demandes de devis ? </span>
    <p class="quotation-texte">
      Pour toutes demandes spécifiques et questions, n'hésitez pas à me
        contacter par téléphone au 06.10.87.14.38 ou via la page
        Contact.
    </p>
    <NuxtLink type="button" class="quotation-page_btn" to="/contact"
      >Contact</NuxtLink
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
  padding: 2vw;
  color: #fcacdf;
}
.quotation-texte {
  font-family: "poppins", sans-serif;
  text-align: center;
  font-size: 2vw;
  padding: 2vw;
  line-height: 3vw;
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
.quotation-page_btn:hover{
  transform: scale(1.1);
}
@media (max-width:767px){
  .quotation-section {
  height:60vw;
}
  .quotation-title {
  font-size: 6.5vw;
  padding: 2vw;
}
.quotation-texte {
  width: 90vw;
  font-size: 4vw;
  line-height: 5vw;
}
.quotation-page_btn {
  font-size: 5vw;
  font-weight: bold;
  width: 50vw;
  height: 10vw;
  font-family: "poppins", sans-serif;
}
}
</style>