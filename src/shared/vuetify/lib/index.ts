import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { en, ru } from 'vuetify/locale';
import 'vuetify/styles';

export const vuetify = createVuetify({
  components: {
    ...components,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'dark',
    variations: {
      colors: ['primary', 'secondary'],
      lighten: 1,
      darken: 2,
    },
  },
  locale: {
    locale: 'ru',
    fallback: 'en',
    messages: {
      ru,
      en,
    },
  },
});
