import { searchApi } from '@/shared/api';
import { defineStore } from 'pinia';
import { debounce } from 'radash';
import { ref } from 'vue';

export const useSearchStore = defineStore('search', () => {
  const searchSupply = ref<string[]>();

  const handleSearch = debounce(
    { delay: 700 },
    async (query: InputEvent & { target: HTMLInputElement }) => {
      const res = (await searchApi.search(query.target.value)).data;
      searchSupply.value = res.map((item) => item.name);
    },
  );

  return { searchSupply, handleSearch };
});
