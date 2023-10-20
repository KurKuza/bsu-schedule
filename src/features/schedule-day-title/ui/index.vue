<script setup lang="ts">
const props = defineProps({
  dayTitle: {
    type: String,
    required: true,
  },
});

const dayTitle = props.dayTitle;
</script>

<template>
  <v-card-title class="title pa-0">{{ dayTitle }}</v-card-title>
</template>

<style scoped lang="scss">
.title {
  text-transform: capitalize !important;
  margin: 0;
  margin-top: 0.6rem;
  margin-bottom: 0.3rem;

  font-size: 1.3rem;
  font-weight: 700;
}
</style>
