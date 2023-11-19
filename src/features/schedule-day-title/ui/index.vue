<script setup lang="ts">
const props = defineProps({
  dayTitle: {
    type: String,
    required: true,
  },
});

const { dayTitle } = props;
</script>

<template>
  <v-card-title class="title pa-0">{{ dayTitle }}</v-card-title>
</template>

<style scoped lang="scss">
.title {
  text-transform: capitalize !important;
  margin: 0;
  margin-bottom: 0.2rem;
  margin-top: 1rem;

  font-size: 1.3rem;
  font-weight: 700;
}

.title:not(:first-child) {
  margin-top: 0.6rem;
}
</style>
