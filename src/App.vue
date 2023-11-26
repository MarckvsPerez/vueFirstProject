<script setup>
import {ref, onMounted} from 'vue';

import BlogPost from './components/BlogPost.vue';
import PaginatedPost from '@/components/PaginatedPost.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

const posts = ref([]);

const postPorPagina = 10;
const inicio = ref(0);
const fin = ref(postPorPagina);
const fav = ref('');
const loading = ref(true);

const cambiarFavorito = (title) => {
  fav.value = title;
};

const next = () => {
  inicio.value += postPorPagina;
  fin.value += postPorPagina;
};

const prev = () => {
  inicio.value += -postPorPagina;
  fin.value += -postPorPagina;
};

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts.value = await res.json();
  } catch (error) {
    console.error(error);
  } finally {
    setTimeout(() => {
      loading.value= false;
    }, 2000);
  }
});

</script>

<template>
  <LoadingSpinner v-if="loading" />
  <div
    class="container"
    v-else
  >
    <h1>App</h1>
    <h2>Mis post favorito: {{ fav }}</h2>


    <PaginatedPost
      @next-method="next"
      @prev-method="prev"
      :inicio="inicio"
      :fin="fin"
      :max="posts.length"
    />

    <BlogPost
      class="mb-2"
      v-for="post in posts.slice(inicio, fin)"
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
}
</style>
