<!-- CardGrid.vue -->

<!-- 

CardGrid is a wrapper for CustomCard. 

It provides control for layouts with multiple cards, contained within a CardGrid.

Use: 

<CardGrid>

<CustomCard />
<CustomCard />
<CustomCard />

</ CardGrid>

-->

<script setup>
import { computed } from 'vue'

const props = defineProps({
  columns: {
    type: [Number, String],
    // Defaulting to 'hero' style if no columns prop is passed
    // If a number is passed, it will use that for custom grid class
    default: 'hero'
  }
})

const gridClass = computed(() => {
  if (props.columns === 'hero') {
    return 'vp-hero-grid'; // Special class for hero-like layout
  }
  const cols = parseInt(props.columns);
  if (cols >= 1 && cols <= 4) { // Allow 1-4 for general purpose, can extend
    return `grid-${cols}`;
  }
  return 'vp-hero-grid'; // Fallback to hero style if invalid number
});
</script>

<template>
  <div :class="['card-grid-wrapper', { 'is-hero-style': props.columns === 'hero' }]">
    <div class="container"> <!-- Mimic VitePress's .container for max-width -->
      <div :class="['card-grid', gridClass]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-grid-wrapper {
  /* VPFeatures has 24px top margin, 40px bottom on mobile, 64px bottom on larger */
  margin-top: 24px;
  margin-bottom: 40px;
}

@media (min-width: 640px) {
  .card-grid-wrapper {
    margin-bottom: 64px;
  }
}

/*
  VitePress uses a .container class for centering and max-width.
  Let's replicate its core properties for consistent width with the rest of the theme.
  The actual .container in VitePress has more padding overrides based on sidebar state,
  but for content width this is the main part.
*/
.container {
  margin: 0 auto;
  max-width: 1152px; /* VPFeatures container max-width */
  padding: 0 24px; /* Horizontal padding like VitePress's .container */
}

@media (min-width: 960px) {
  .container {
    padding: 0 32px;
  }
}


.card-grid {
  display: grid;
  gap: 16px; /* Default gap, VPFeatures uses 24px but it can feel large */
              /* Let's try 16px or 20px */
}

/* --- Styling for 'vp-hero-grid' (to mimic VPFeatures) --- */
.card-grid.vp-hero-grid {
  grid-template-columns: repeat(1, 1fr); /* Mobile: 1 column */
}

@media (min-width: 640px) { /* sm breakpoint */
  .card-grid.vp-hero-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
  }
}

@media (min-width: 960px) { /* md breakpoint */
  .card-grid.vp-hero-grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
  }
}

/* --- Styling for general purpose grid-N (if props.columns is a number) --- */
/* Mobile First - 1 column default */
.card-grid.grid-1,
.card-grid.grid-2,
.card-grid.grid-3,
.card-grid.grid-4 {
  grid-template-columns: repeat(1, 1fr);
}

/* Small screens (sm breakpoint) */
@media (min-width: 640px) {
  .card-grid.grid-2 { grid-template-columns: repeat(2, 1fr); }
  .card-grid.grid-3 { grid-template-columns: repeat(2, 1fr); }
  .card-grid.grid-4 { grid-template-columns: repeat(2, 1fr); }
}

/* Medium screens (md breakpoint) */
@media (min-width: 960px) {
  .card-grid.grid-3 { grid-template-columns: repeat(3, 1fr); }
  .card-grid.grid-4 { grid-template-columns: repeat(3, 1fr); }
}

/* Large screens (lg breakpoint, for 4 columns if specified) */
@media (min-width: 1280px) {
   .card-grid.grid-4 { grid-template-columns: repeat(4, 1fr); }
}
</style>