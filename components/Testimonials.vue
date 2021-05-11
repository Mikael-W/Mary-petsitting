<template>
  <div class="testimonial-section">
      <div class="testimonial-title">Témoignages</div>
      <div class="testimonial-subtitle">découvrez les avis des maîtres qui m'ont fait confiance</div>
      <button type="button" class="btn-left">
          <img src="" class="icone" alt="">
      </button>
      <div class="slides-container">
          <div class="slide">
          <img src="" class="customer-picture" alt="">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rem corporis laudantium modi. Distinctio, voluptas!</p>
          </div>
          <div class="slide">
          <img src="" class="customer-picture" alt="">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rem corporis laudantium modi. Distinctio, voluptas!</p>
          </div>
          <div class="slide">
          <img src="" class="customer-picture" alt="">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rem corporis laudantium modi. Distinctio, voluptas!</p>
          </div>
          <div class="slide">
          <img src="" class="customer-picture" alt="">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio rem corporis laudantium modi. Distinctio, voluptas!</p>
          </div>
      </div>
      <button type="button" class="btn-right">
          <img src="" class="icone" alt="">
      </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .testimonial-section{
        background: #7D7C84;
    }
    .testimonial-title{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5vw;
        margin: 10vh 0 0 0;
        padding-top:3vh;
        font-family: 'PumpkinStory', sans-serif;
        color:#FCACDF;
    }
    .testimonial-subtitle{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5vw;
        padding-top:1vh;
        font-family: 'poppins', sans-serif;
        color:white;
    }
    .slides-container{
        width: 100vw;
        height: 50vh;
        background: #7D7C84;
    }


</style>