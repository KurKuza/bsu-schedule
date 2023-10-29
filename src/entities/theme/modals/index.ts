import { ThemeInstance } from 'vuetify';

export function handleToggleTheme(theme: ThemeInstance) {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
