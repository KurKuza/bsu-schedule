<script setup lang="ts">
import { ScheduleType } from '@/entities/schedule';
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
  <v-space class="tags" size="small">
    <v-chip class="chip" size="x-small" variant="tonal" :bordered="false" color="purple">
      {{ props.tags.edworkkind }}
    </v-chip>
    <v-chip
      class="chip"
      size="x-small"
      variant="tonal"
      v-if="props.tags.subgroup"
      :bordered="false"
      color="green"
    >
      {{ subgroupTransform(props.tags.subgroup) }}
    </v-chip>
    <v-chip
      class="chip"
      size="x-small"
      variant="tonal"
      v-if="props.tags.online"
      :bordered="false"
      color="blue"
      >{{ 'с возм. онлайн' }}</v-chip
    >
  </v-space>
</template>

<style scoped lang="scss">
.tags {
  display: flex;
  gap: 0.4rem;
}

.chip {
  font-weight: 500;
}
</style>
