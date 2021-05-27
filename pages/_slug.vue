<template>
 <section class="container">
    <Menu />
   <div class="article-section">
   <h1>{{ post.fields.title }}</h1>
   <img
     class="image"
     :src="
       post.fields.heroImage.fields.file.url
     "
   />
   <article v-html="$md.render(post.fields.body)"></article>
   <nuxt-link to="/blog" class="back">⟵ Retour à l'Accueil</nuxt-link>
   </div>
 </section>
</template>


<script>
export default {
    data() {
   return {
     slug: this.$route.params.slug
   };
 },
 computed: {
   post() {
     let post = this.$store.state.posts.filter(
       el => el.fields.slug === this.slug
     );
     return post[0];
   }
 },
 head() {
   return {
     title: this.post.fields.title
   };
 }
}
</script>

<style>
.article-section {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.back{
    padding: 2vw;
    font-size: 1.5vw;
    text-decoration: none;
    font-family: "PumpkinStory", sans-serif;
    color: #7d7c84;
}
article {
  display: flex;
  flex-direction: column;
  width: 90vw;
  font-size: 2vw;
  font-family: "poppins", sans-serif;
}
h1 {
  font-family: "PumpkinStory", sans-serif;
  font-size: 5vw;
  color: #fcacdf;
  padding: 2vw 0;
}
article h3{
  font-family: "poppins", sans-serif;
  font-size: 2.5vw;
  color: #fcacdf;
  padding: 2vw 0;
}
article ul {
  display: flex;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  font-size: 2vw;
  font-family: "poppins", sans-serif;
}
article ul li {
  width: 80vw;
  font-size: 2vw;
  padding-top: 1.5vw;
  color: initial;
  font-family: "poppins", sans-serif;
}
article li::before {
  content: "\2022";
  color: #fcacdf;
  font-weight: bold;
  display: inline-block;
  width: 1.2vw;
}
article p{
    padding: 2vw 0;
    font-family: "poppins", sans-serif;
}
.article-text{
    padding: 2vw 0;
}
</style>