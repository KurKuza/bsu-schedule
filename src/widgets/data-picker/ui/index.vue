<script setup lang="ts">
import { useSearchStore } from '@/entities/schedule';
import { getWeek } from '@/shared/schedule';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { addWeeksToDate } from '../modals';

const week = getWeek();

const store = useSearchStore();
const { dateRange } = storeToRefs(store);

const handleSelectPrevious = () => {
  store.handleDateRange({
    from: addWeeksToDate(new Date(dateRange.value.from), -1).toLocaleDateString('sv'),
    to: addWeeksToDate(new Date(dateRange.value.to), -1).toLocaleDateString('sv'),
  });
};
const handleSelectNext = () => {
  store.handleDateRange({
    from: addWeeksToDate(new Date(dateRange.value.from), 1).toLocaleDateString('sv'),
    to: addWeeksToDate(new Date(dateRange.value.to), 1).toLocaleDateString('sv'),
  });
};

const getWeekRange = () => {
  return week.currentDay === new Date().toLocaleDateString('sv') ? 'Текущая неделя' : 'undef';
};

const isActive = ref(false);

const handleSelectedDate = (event: Date[]) => {
  const from = event[0].toLocaleDateString('sv');
  const to = event[1].toLocaleDateString('sv');

  store.handleDateRange({ from, to });
  isActive.value = false;
};
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
            <v-date-picker
              :model-value="[week.monday, week.sunday]"
              multiple
              show-adjacent-months
              @update:modelValue="handleSelectedDate"
            />
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
