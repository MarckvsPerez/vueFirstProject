<script setup>
import {ref} from 'vue';
import BlogPost from './components/BlogPost.vue';

const posts = ref([
  {title: 'Titulo 1', body: 'Descripcion 1', colorText: 'primary'},
  {title: 'Titulo 2', body: 'Descripcion 2', colorText: 'primary'},
  {title: 'Titulo 3', body: 'Descripcion 3', colorText: 'secondary'},
]);

const fav = ref('');
const cambiarFavorito = (title) => {
  fav.value = title;
};
</script>

<template>
  <div class="container">
    <h1>App</h1>
    <h2>Mis post favorito: {{ fav }}</h2>

    <BlogPost
      v-for="post in posts"
      :key="post"
      :title="post.title"
      :body="post.body"
      :colorText="post.colorText"
      @cambiar-favorito="cambiarFavorito"
    />
  </div>
</template>

<style>
h1 {
  color: #ffffff;
  font-family: 'Lato', sans-serif;
  font-size: 54px;
  font-weight: 300;
  line-height: 58px;
  margin: 0 0 58px;
}</style>
