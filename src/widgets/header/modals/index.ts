import { searchApi } from '@/shared/api';

export const handleSearch = async (query: InputEvent & { target: HTMLInputElement }) => {
  console.log(query.target.value);
  await searchApi.search(query.target.value);
};
