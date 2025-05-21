// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'; // Import a preset like Aura

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import CustomCard from './components/CustomCard.vue';
import CardGrid from './components/CardGrid.vue';
import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css";


// PrimeIcons are usually automatically available with the PrimeVue plugin
// but importing the CSS ensures styles are loaded if not already by the preset.
import 'primeicons/primeicons.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app);

    app.use(PrimeVue, {
      unstyled: false, // Set to true if you want to style everything from scratch (PT)
      ripple: true,
      theme: {
        preset: Aura, // Apply the Aura preset
        options: {
          darkModeSelector: '.dark', // Tell PrimeVue to use VitePress's .dark class for dark mode
        }
      }
    });

    app.component('DataTable', DataTable);
    app.component('Column', Column);
    app.component('InputText', InputText);
    app.component('CustomCard', CustomCard);
    app.component('CardGrid', CardGrid);
    app.use(NolebaseGitChangelogPlugin);
  }
} satisfies Theme