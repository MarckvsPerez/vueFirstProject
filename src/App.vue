<script setup>

const name = 'Vue 3';
const arrayColors = ['blue', 'red'];
const activo = true;
const arraList = [1, 2, 3, 4];
const frutas = [
  {
    name: 'Pera',
    price: '23€',
  },
  {
    name: 'Manzana',
    price: '20€',
  },
];
const objeto = {
  nombre: 'Malo',
  apellido: 'malisimo',
};
</script>

<template>
  <h1>
    Hola {{ name.toUpperCase() }}
  </h1>
  <br>
  <h2 :style="`color: ${arrayColors[0]}`">
    {{ activo ? "activo" : "inactivo" }}
  </h2>
  <h3 v-if="activo">
    Hola
  </h3>
  <h3 v-else-if="!activo">
    Adeu
  </h3>
  <ul>
    <li
      v-for="(item, index) in arraList"
      :key="index"
    >
      {{ item }}
    </li>
  </ul>
  <ul>
    <li
      v-if="item.price > 0"
      v-for="item in frutas"
      :key="item.name"
    >
      {{ item.name }} - {{ item.price }}
    </li>
  </ul>

  <ul>
    <li
      v-for="(value, propiedad, index ) in objeto"
      :key="index"
    >
      {{ index }} - {{ propiedad }} : {{ value }}
    </li>
  </ul>
</template>

<style>
h1 {
  color: red;
}
</style>
