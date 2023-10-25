<script setup lang="ts">
import { PropType } from 'vue';
import { Pair } from '@/entities/schedule';
import Content from './content.vue';
import Sidebar from './sidebar.vue';

const props = defineProps({
  schedule: {
    type: Object as PropType<Pair>,
    required: true,
  },
});
</script>

<template>
  <v-layout class="container" direction="horizontal">
    <Sidebar :schedule="props.schedule" />
    <div>
      <Content :schedule="props.schedule" />
    </div>
  </v-layout>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 0.4rem 0;
  background-color: inherit;
}
.divider {
  margin: auto;
  height: 60px;
}
.title {
  margin: 0;
}
</style>
