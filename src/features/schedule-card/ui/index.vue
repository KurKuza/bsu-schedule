<script setup lang="ts">
import { PropType } from 'vue';
import Sidebar from './sidebar.vue';

import { ScheduleType } from '@/entities/schedule';
import Content from './content.vue';

const props = defineProps({
  schedule: {
    type: Object as PropType<ScheduleType>,
    required: true,
  },
});
</script>

<template>
  <v-layout class="container" direction="horizontal">
    <Sidebar :schedule="props.schedule" />
    <v-layout-content direction="vertical">
      <Content :schedule="props.schedule" />
    </v-layout-content>
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
