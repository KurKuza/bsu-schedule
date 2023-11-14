import { SearchResponse } from '@/entities/search';
import { scheduleApi, searchApi } from '@/shared/api';
import { VueInputEvent } from '@/shared/types';
import { defineStore } from 'pinia';
import { debounce } from 'radash';
import { ref } from 'vue';

export const useSearchStore = defineStore('search', () => {
  const searchSupply = ref<string[]>([]);
  const desired = ref<string>('');
  const searchBSU = ref<SearchResponse[]>([]);
  const desiredSchedule = ref<SearchResponse>({ id: '', name: '12002302', type: 'g' });

  const dateRange = ref({
    from: '',
    to: '',
  });

  const handleSearch = async (query: string) => {
    const res = (await searchApi.search(query)).data;
    searchBSU.value = res;

    return res;
  };

  const handleSearchSupply = debounce({ delay: 700 }, async (query: VueInputEvent) => {
    const res = await handleSearch(query.target.value);

    searchSupply.value = res.map((item) => item.name);
  });

  const setSearchedSupply = (value: string) => {
    desired.value = value;
  };

  const handleSaveInputSearch = (value: string) => {
    desiredSchedule.value = searchBSU.value.find((item) => item.name === value);
  };
  const handleDateRange = (value: { from: string; to: string }) => {
    dateRange.value = value;
  };

  const getDesiredSchedule = () => {
    return scheduleApi.getSchedule(desiredSchedule.value, dateRange.value);
  };

  return {
    desired,
    desiredSchedule,
    searchSupply,
    handleSearchSupply,
    setSearchedSupply,
    handleDateRange,
    handleSaveInputSearch,
    getDesiredSchedule,
  };
});
