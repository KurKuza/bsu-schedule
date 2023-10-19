<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  dayTitle: {
    type: String,
    required: true,
  },
});

const dayTitle = props.dayTitle;
</script>

<template>
  <a-typography-title :level="4" class="title">{{ dayTitle }}</a-typography-title>
</template>

<style scoped lang="scss">
.title {
  text-transform: capitalize;
  margin: 0;
  margin-top: 0.3rem;
}
</style>
