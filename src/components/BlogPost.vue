<script setup>

defineProps({
  title: {
    type: String,
    default: '',
  },
  body: {
    type: String,
    default: '',
  },
  colorText: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['cambiar-favorito']);
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5
        class="card-title"
        :class="`text-${colorText}`"
      >
        {{ title }}
      </h5>
      <p>
        {{ body }}
      </p>
      <button
        class="btn btn-outline-primary"
        @click="emit('cambiar-favorito',title)"
      >
        Añadir
      </button>
    </div>
  </div>
</template>
