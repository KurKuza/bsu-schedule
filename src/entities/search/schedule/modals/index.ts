export const handleSearch = (query: InputEvent & { target: HTMLInputElement }) => {
  console.log(query.target.value);
};
