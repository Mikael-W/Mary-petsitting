<template>
  <div>
    <!-- render data of the person -->
    <h1>{{ person.fields.name }}</h1>
    <!-- render blog posts -->
    <ul>
      <li v-for="post in posts" :key="post.title">
        {{ post.fields.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {createClient} from '../plugins/contentful';
  const contentfulClient = createClient();
  export default {
    name: 'index',
    
    mounted(){
      console.log(process.env.CTF_CDA_TOKEN)
    },

    asyncData ({ env, params }) {
      return contentfulClient.getEntries({
        'content_type': 'blogPost',
        'fields.slug': params.id
      }).then(page => {
        return {
          page: page.items[0]
        }
      }).catch(console.error)
    }
  }
</script>