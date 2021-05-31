<template>
  <section class="blog-section">
    <h1>Blog</h1>
    <div class="blog-selection_container">
      <article
        v-for="post in posts"
        :key="post.fields.Name"
        class="articles-selection_container"
      >
        <nuxt-link :to="post.fields.slug">
          <img class="image" :src="post.fields.heroImage.fields.file.url" />
        </nuxt-link>
        <h2>
          <nuxt-link class="blog-link" :to="post.fields.slug">{{
            post.fields.title
          }}</nuxt-link>
        </h2>

        <p class="description">
          {{ post.fields.description }}
        </p>
        <nuxt-link :to="post.fields.slug" class="more"
          >En savoir plus ⟶</nuxt-link
        >
      </article>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  head: {
    title: "Mary-petsitting blog",
  },
};
</script>

<style>
.blog-section{
    text-align: center;
}
.blog-selection_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}
.articles-selection_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33vw;
    padding: 2vw 0;
}
h1 {
  font-family: "PumpkinStory", sans-serif;
  font-size: 5vw;
  color: #fcacdf;
  padding: 2vw 0;
}
h2{
    margin: 2vw 0;
}
.blog-link {
  font-family: "PumpkinStory", sans-serif;
  font-size: 2.5vw;
  text-decoration: none;
  color: #fcacdf;
}
.selection-link {
  height: 30vw;
}
.image {
  height: 30vw;
  width: 25vw;
  border-radius: 2rem;
}
.description {
  width: 80%;
  font-family: "poppins", sans-serif;
  font-size: 1vw;
  padding-bottom: 1.5vw;
}
.more {
  font-family: "PumpkinStory", sans-serif;
  text-decoration: none;
  cursor: pointer;
  color: #fcacdf;
  font-size: 1.5vw;
}
@media (max-width:767px){
  h1 {
  font-size: 6.5vw;
}
  .blog-selection_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width:100vw;
}
.image {
  height: 75vw;
  width: 75vw;
}
.blog-link {
  font-size: 5vw;
}
.description, .more {
  width: 100%;
  font-size: 3.5vw;
}
}
</style>