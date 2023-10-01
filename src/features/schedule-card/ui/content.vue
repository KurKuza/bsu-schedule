<script setup lang="ts">
import { ScheduleType } from '@/shared/api';
import { pick } from 'radash';
import { PropType } from 'vue';
import Tags from './tags.vue';

const props = defineProps({
  schedule: {
    type: Object as PropType<ScheduleType>,
    required: true,
  },
});

const stringTransform = (str: string) => {
  return str.length > 34 ? str.slice(0, 35).trim() + '..' : str;
};
</script>

<template>
  <Tags :tags="pick(schedule, ['edworkkind', 'subgroup', 'online'])" />
  <a-typography-title class="title" :level="5">{{
    stringTransform(props.schedule.dis)
  }}</a-typography-title>
  <a-typography-paragraph class="paragraph"
    >{{ props.schedule.teacher?.name }}
  </a-typography-paragraph>
  <a-typography-paragraph v-if="props.schedule.room" class="paragraph"
    >ауд. {{ props.schedule?.room?.name }} {{ props.schedule?.room?.area }}</a-typography-paragraph
  >
</template>

<style scoped>
.title {
  margin: 0;
}
.paragraph {
  margin: 0;
}
</style>
