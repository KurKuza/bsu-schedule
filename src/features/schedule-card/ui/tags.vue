<script setup lang="ts">
import { PropType } from 'vue';
import { Pair } from '@/entities/schedule';

const props = defineProps({
  tags: {
    type: Object as PropType<Pick<Pair, 'edworkkind' | 'subgroup' | 'online'>>,
    required: true,
  },
});

const subgroupTransform = (str: string) => {
  return str?.slice(0, 1).trim() + ' п/г';
};
</script>

<template>
  <div class="tags" size="small">
    <v-chip class="chip" size="x-small" variant="tonal" :bordered="false" color="purple">
      {{ props.tags.edworkkind }}
    </v-chip>
    <v-chip
      v-if="props.tags.subgroup"
      class="chip"
      size="x-small"
      variant="tonal"
      :bordered="false"
      color="green"
    >
      {{ subgroupTransform(props.tags.subgroup) }}
    </v-chip>
    <v-chip
      v-if="props.tags.online"
      class="chip"
      size="x-small"
      variant="tonal"
      :bordered="false"
      color="blue"
      >{{ 'с возм. онлайн' }}</v-chip
    >
  </div>
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
