<template>
  <div class="testimonial-section">
    <div class="testimonial-title">Témoignages</div>
    <div class="testimonial-subtitle">
      découvrez les avis des maîtres qui m'ont fait confiance
    </div>
     <button @click="prev()" type="button" class="btn btn-left">
      <img src="../assets/img/left-arrow.png" class="icone" alt="" />
    </button>
    <div class="testimonials-container" :style="{transform: `translateX(${index}vw)`, transition:`${transition}`}">
      <div class="slide">
        <img src="../assets/img/photo.png" class="customer-picture" alt="" />
        <span class="customer-name">Client 1</span>
        <p class="customer-comment">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rem
          corporis laudantium modi. Distinctio, voluptas!"
        </p>
      </div>
      <div class="slide">
        <img src="../assets/img/photo.png" class="customer-picture" alt="" />
        <span class="customer-name">Client 2</span>
        <p class="customer-comment">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rem
          corporis laudantium modi. Distinctio, voluptas!"
        </p>
      </div>
      <div class="slide">
        <img src="../assets/img/photo.png" class="customer-picture" alt="" />
        <span class="customer-name">Client 3</span>
        <p class="customer-comment">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rem
          corporis laudantium modi. Distinctio, voluptas!"
        </p>
      </div>
      <div class="slide">
        <img src="../assets/img/photo.png" class="customer-picture" alt="" />
        <span class="customer-name">Client 4</span>
        <p class="customer-comment">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rem
          corporis laudantium modi. Distinctio, voluptas!"
        </p>
      </div>
      <div class="slide">
        <img src="../assets/img/photo.png" class="customer-picture" alt="" />
        <span class="customer-name">Client 5</span>
        <p class="customer-comment">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rem
          corporis laudantium modi. Distinctio, voluptas!"
        </p>
      </div>
      <div class="slide">
        <img src="../assets/img/photo.png" class="customer-picture" alt="" />
        <span class="customer-name">Client 6</span>
        <p class="customer-comment">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rem
          corporis laudantium modi. Distinctio, voluptas!"
        </p>
      </div>
    </div>
    <button @click="next()" type="button" class="btn btn-right">
      <img src="../assets/img/right-arrow.png" class="icone" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      index: 0,
      transition: "transform 0.2s ease",
    };
  },
  methods:{
      prev(){if(this.index === 0){
              this.transition = "none";
              this.index = - 102 ;
          }else{
              this.transition = "transform 0.2s ease";
              this.index += 34 ;
          }},
      next(){
          if(this.index === -102){
              this.transition = "none";
              this.index = 0 ;
          }else{
              this.transition = "transform 0.2s ease";
              this.index -= 34 ;
          }
      },
  }
};
</script>

<style scoped>
.testimonial-section {
  background: #7d7c84;
  position: relative;
  margin:5vh 0 2vh 0;
  overflow-x:hidden;
}
.testimonials-container{
    display: flex;
    width: 200vw;
    height: 50vh;
    overflow-x:hidden;
}
.testimonial-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vw;
  margin: 3vh 0 0 0;
  font-family: "PumpkinStory", sans-serif;
  color: #fcacdf;
}
.testimonial-subtitle {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;
  padding: 1.5vh 0;
  font-family: "poppins", sans-serif;
  color: white;
}
.slides-container {
  display: flex;
  width: 100%;
}
.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  margin: 0 2vw;
}
.customer-picture {
  background: white;
  border-radius: 100%;
  width: 35%;
  margin: 1.5vh 0;
}
.customer-name {
  font-size: 2.2vw;
  margin: 0 1.5vh;
  color: #fcacdf;
  font-family: "PumpkinStory", sans-serif;
}
.customer-comment {
  width: 70%;
  height: 50%;
  text-align: center;
  font-size: 1.5vw;
  padding-top: 1vh;
  color: white;
  font-style: italic;
}
.btn {
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: absolute;
  display: block;
  z-index: 1000;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcacdf;
  padding: 0;
  cursor: pointer;
}
.btn-left {
  top: 50%;
  left: 1vw;
}
.btn-right {
  top: 50%;
  right: 1vw;
}
.icone {
  width: 25px;
}
</style>