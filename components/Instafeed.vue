<template>
  <vue-instagram token="youraccessTokenHere" username="UsernameHere" :count="3">
    <template slot="feeds" scope="props">
        <li class="instagram-media fancy-list"> {{ props.feed.link }} </li>
        <img :src=" props.feed.images.standard_resolution.url " alt="">
    </template>
    <template slot="error" scope="props">
        <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
</vue-instagram>
</template>

<script>
import VueInstagram from 'vue-instagram'
export default {
    components:{
        VueInstagram
    }

}
</script>

<style>

</style>