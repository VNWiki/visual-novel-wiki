// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// PrimeVue config and theme
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'; // Import a preset like Aura

// PrimeVue components
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import ImageCompare from 'primevue/imagecompare'

// Tabs plugin
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

// Custom components
import CustomCard from './components/CustomCard.vue'
import CardGrid from './components/CardGrid.vue'

// Custom layouts
import DashboardLayout from './layouts/DashboardLayout.vue'

// Git changelog plugin
import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client"
import "@nolebase/vitepress-plugin-git-changelog/client/style.css"

// Enhanced Readabilities plugin (menus for different screen sizes)
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { InjectionKey, SpotlightStyle } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

// PrimeIcons are usually automatically available with the PrimeVue plugin
// but importing the CSS ensures styles are loaded if not already by the preset.
import 'primeicons/primeicons.css';

export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
    })
  },

  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app);

    app.use(PrimeVue, {
      unstyled: false,
      ripple: false,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        }
      }
    });

    // Register frequently used components
    app.component('DataTable', DataTable);
    app.component('Column', Column);
    app.component('InputText', InputText);
    app.component('CustomCard', CustomCard);
    app.component('CardGrid', CardGrid);
    app.component('ImageCompare', ImageCompare)
    
    // Register custom layouts
    app.component('dashboard-layout', DashboardLayout);
    
    // Enable changelog plugin
    app.use(NolebaseGitChangelogPlugin);

    app.provide(InjectionKey, {
      spotlight: {
        defaultStyle: SpotlightStyle.Aside,
        defaultToggle: true
      }
    } as Options)
  }
} satisfies Theme
