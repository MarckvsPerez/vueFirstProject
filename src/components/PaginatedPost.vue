<script setup>
defineProps({
  inicio: {
    type: Number,
    default: 0,
  },
  fin: {
    type: Number,
    default: 10,
  },
  max: {
    type: Number,
    default: 20,
  },
});

const emit = defineEmits(['next-method', 'prev-method']);
</script>

<template>
  <div
    class="btn-group mb-2"
    role="group"
    aria-label="Basic example"
  >
    <button
      type="button"
      class="btn btn-secondary"
      @click="emit('prev-method')"
      :disabled="inicio === 0"
    >
      {{ inicio }}
      Prev
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      @click="emit('next-method')"
      :disabled="fin >= max"
    >
      {{ fin }}
      Next
    </button>
  </div>
</template>
