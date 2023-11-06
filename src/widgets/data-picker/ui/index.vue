<script setup lang="ts">
import { useSearchStore } from '@/entities/schedule';
import { getWeek } from '@/shared/schedule';
import { ref } from 'vue';

const store = useSearchStore();
const week = getWeek();

const handleSelectPrevious = () => {
  store.desiredSchedule;
};
const handleSelectNext = () => {};

const getWeekRange = () => {
  return week.currentDay === new Date().toLocaleDateString('sv') ? 'Текущая неделя' : 'undef';
};

const isActive = ref(false);
console.log('🚀  isActive:', isActive.value);
</script>

<template>
  <div class="date-picker">
    <p class="text-h5">Группа</p>
    <div class="icons">
      <v-btn icon variant="text" size="small" @click="handleSelectPrevious">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn
        class="week-text"
        variant="text"
        append-icon="mdi-calendar-blank-multiple"
        @click="isActive = true"
      >
        <p>{{ getWeekRange() }}</p>

        <v-dialog v-model="isActive">
          <v-locale-provider>
            <v-date-picker full-width show-adjacent-months show-current />
          </v-locale-provider>
        </v-dialog>
      </v-btn>
      <v-btn icon variant="text" size="small" @click="handleSelectNext">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.date-picker {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: rgb(var(--v-theme-surface));
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.week-text {
  text-transform: none;
}
</style>
