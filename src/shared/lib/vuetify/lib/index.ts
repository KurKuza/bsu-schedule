import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import 'vuetify/styles';
import { VDatePicker } from 'vuetify/labs/VDatePicker';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export const vuetify = createVuetify({
  components: {
    ...components,
    VDatePicker,
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
});
