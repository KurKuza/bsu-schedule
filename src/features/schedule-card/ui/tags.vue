<script setup lang="ts">
import { ScheduleType } from '@/shared/api';
import { PropType } from 'vue';

const props = defineProps({
  tags: {
    type: Object as PropType<Pick<ScheduleType, 'edworkkind' | 'subgroup' | 'online'>>,
    required: true,
  },
});

const subgroupTransform = (str: string) => {
  return str?.slice(0, 1).trim() + ' п/г';
};
</script>

<template>
  <a-space size="small">
    <a-tag :bordered="false" color="purple">{{ props.tags.edworkkind }}</a-tag>
    <a-tag v-if="props.tags.subgroup" :bordered="false" color="green">
      {{ subgroupTransform(props.tags.subgroup) }}
    </a-tag>
    <a-tag v-if="props.tags.online" :bordered="false" color="blue">{{ 'с возм. онлайн' }}</a-tag>
  </a-space>
</template>

<style scoped lang="scss"></style>
