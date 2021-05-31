<template>
  <div class="area-section">
    <div class="area-section_title">Zones d'activités</div>
    <div class="zone-container">
      <div class="zone-a">
        <span class="area-title">ZONE A</span>
        <span class="area-title">30km maximum</span>
        <img
          class="area-picture"
          src="../assets/img/zone-a.png"
          alt="zone d'activité mary petsitting"
        />
        <div class="prices">
          <div class="dog">
              <span>Chien</span>
            <div class="dog-prices">   
            <div class="dog-prices_container">
              <span class="dog-prices_infos">1 visite / jour</span>
              <span class="dog-prices_infos">17€</span>
            </div>
            <div class="dog-prices_container">
              <span class="dog-prices_infos">2 visites / jour</span>
              <span class="dog-prices_infos">22€</span>
            </div>
            </div>
          </div>
          <div class="cat">
            <span>Chat</span>
            <div class="cat-prices">
                <div class="cat-prices_container">
              <span class="cat-prices_infos">1 visite / jour</span>
              <span class="cat-prices_infos">14€</span>
                </div>
            <div class="cat-prices_container">
              <span class="cat-prices_infos">2 visites / jour</span>
              <span class="cat-prices_infos">19€</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="zone-b">
        <span class="area-title">ZONE B</span>
        <span class="area-title">40km maximum</span>
        <img
          class="area-picture"
          src="../assets/img/zone-b.png"
          alt="zone d'activité mary petsitting"
        />
        <div class="prices">
        
          <div class="dog">
              <span>Chien</span>
            <div class="dog-prices">
            <div class="dog-prices_container">
              <span class="dog-prices_infos">1 visite / jour</span>
              <span class="dog-prices_infos">19€</span>
            </div>
            <div class="dog-prices_container">
              <span class="dog-prices_infos">2 visites / jour</span>
              <span class="dog-prices_infos">25€</span>
            </div>
            </div>
          </div>
          <div class="cat">
            <span>Chat</span>
            <div class="cat-prices">
            <div class="cat-prices_container">
              <span class="cat-prices_infos">1 visite / jour</span>
              <span class="cat-prices_infos">17€</span>
            </div>
            <div class="cat-prices_container">
              <span class="cat-prices_infos">2 visites / jour</span>
              <span class="cat-prices_infos">22€</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.area-section {
  width: 100vw;
  background: #7d7c84;
  text-align: center;
}
.zone-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.area-section_title {
  font-family: "PumpkinStory", sans-serif;
  font-size: 5vw;
  padding: 2vw;
  color: #fcacdf;
}
.zone-a,
.zone-b {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "poppins", sans-serif;
}
.area-title {
  font-size: 1.5vw;
  color: #fbfbfb;
  padding: 1vw;
}
.area-picture {
  border-radius: 15%;
  padding: 2vw;
}
.prices{
    display: flex;
    flex-direction: column;
}
.dog, .cat{
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    font-size: 1.5vw;
    margin:2vw 0;
    padding: 2vw 0;
    background: #fcacdf;
    color:#fbfbfb;
    border-radius: 20%;
    font-weight:bold;
}
.dog-prices, .cat-prices{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5vw;
    padding:2vw 1vw;
    color:#fbfbfb;
   
}
.dog-prices_container, .cat-prices_container{
  margin: 0.5vw 0;
  font-weight:initial;
}
@media (max-width:767px){
  .zone-container {
  flex-direction: column;
}
.area-picture {
  width:85vw;
}
.prices{
    width:45vw;
}
.dog, .cat{
  height:35vw;
  justify-content: center;
  font-size: 4.5vw;
}
  .dog-prices, .cat-prices{
    font-size: 4vw;
  }
}
</style>