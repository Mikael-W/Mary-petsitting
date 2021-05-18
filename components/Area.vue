<template>
  <div class="area-section">
    <div class="area-section_title">Zones d'activités</div>
    <div class="zone-container">
      <div class="zone-a">
        <span class="area-title">ZONE A</span>
        <img
          class="area-picture"
          src="../assets/img/zone-a.png"
          alt="zone d'activité mary petsitting"
        />
        <div class="prices">
          <div class="dog">
              <span>Chien</span>
            <div class="dog-prices">   
            <div class="dog-prices_infos">
              <span>1 visite / jour</span>
              <span>14€</span>
            </div>
            <div class="dog-prices_infos">
              <span>2 visites / jour</span>
              <span>19€</span>
            </div>
            </div>
          </div>
          <div class="cat">
            <span>Chat</span>
            <div class="cat-prices">
                <div class="cat-prices_infos">
              <span>1 visite / jour</span>
              <span>17€</span>
                </div>
            <div class="cat-prices_infos">
              <span>2 visites / jour</span>
              <span>22€</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="zone-b">
        <span class="area-title">ZONE B</span>
        <img
          class="area-picture"
          src="../assets/img/zone-b.png"
          alt="zone d'activité mary petsitting"
        />
        <div class="prices">
        
          <div class="dog">
              <span>Chien</span>
            <div class="dog-prices">
            <div class="dog-prices_infos">
              <span>1 visite / jour</span>
              <span>17€</span>
            </div>
            <div class="dog-prices_infos">
              <span>2 visites / jour</span>
              <span>22€</span>
            </div>
            </div>
          </div>
          <div class="cat">
            <span>Chat</span>
            <div class="cat-prices">
            <div class="cat-prices_infos">
              <span>1 visite / jour</span>
              <span>19€</span>
            </div>
            <div class="cat-prices_infos">
              <span>2 visites / jour</span>
              <span>25€</span>
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
    align-items: center;
    justify-content: space-between;
    width:100%;
    font-size: 1.5vw;
    padding:2vw 1vw 0 0;
    color:#fbfbfb;
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
.cat-prices_infos,.dog-prices_infos{
    font-weight:initial;
}
</style>