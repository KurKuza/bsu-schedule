import { SearchResponse } from '@/entities/search';
import { scheduleApi, searchApi } from '@/shared/api';
import { PropsGetSchedule } from '@/shared/api/schedule';
import { VueInputEvent } from '@/shared/types';
import { defineStore } from 'pinia';
import { debounce } from 'radash';
import { ref } from 'vue';

export const useSearchStore = defineStore('search', () => {
  const searchSupply = ref<string[]>([]);
  const desired = ref<string>('');
  const searchBSU = ref<SearchResponse[]>([]);
  const desiredSchedule = ref<SearchResponse>({ id: '', name: '12002305', type: 'g' });

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

  const getDesiredSchedule = () => {
    return scheduleApi.getSchedule(desiredSchedule.value as PropsGetSchedule);
  };

  return {
    desired,
    desiredSchedule,
    searchSupply,
    handleSearchSupply,
    setSearchedSupply,
    handleSaveInputSearch,
    getDesiredSchedule,
  };
});
