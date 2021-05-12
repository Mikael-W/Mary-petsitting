<template>
  <div class="container">
    <Menu />
    <Logo />
    <Header />
    <About />
    <services />
    <Testimonials />
    <Instafeed />
    <Footer />
  </div>
</template>

<script>
import Instaslide from '../components/Instafeed.vue'
export default {
  components: { Instaslide },}
</script>

<style>
.container {
  min-height: 100vh;
}


</style>
