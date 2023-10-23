<script setup lang="ts">
import { Pair } from '@/entities/schedule';
import { pick } from 'radash';
import { PropType } from 'vue';
import Tags from './tags.vue';

const props = defineProps({
  schedule: {
    type: Object as PropType<Pair>,
    required: true,
  },
});

const stringTransform = (str: string) => {
  return str?.length > 34 ? str.slice(0, 35).trim() + '..' : str;
};
</script>

<template>
  <div class="content-container">
    <Tags :tags="pick(schedule, ['edworkkind', 'subgroup', 'online'])" />
    <v-card-title class="title">{{ stringTransform(props.schedule.dis) }}</v-card-title>
    <p class="paragraph">{{ props.schedule.teacher?.name }}</p>
    <p v-if="props.schedule.room" class="paragraph">
      ауд. {{ props.schedule?.room?.name }} {{ props.schedule?.room?.area }}
    </p>
  </div>
</template>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.title {
  text-wrap: balance;
  /* padding: 3px 0 6px 0 !important; */
  padding: 0 !important;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}
.paragraph {
  margin: 0;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
</style>
