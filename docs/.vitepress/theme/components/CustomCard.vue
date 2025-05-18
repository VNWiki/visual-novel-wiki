<!-- CustomCard.vue -->

<!-- 

Custom Card component based on the card that shows up on the Home page (index.md at docs/ dir (root))

-->

<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  icon: String,
  title: String,
  details: String,
  link: String,
  linkText: {
    type: String,
    default: '' // Default to empty string, handle fallback in template
  }
})

const hasLink = computed(() => !!props.link && props.link.trim().length > 0)

const isExternal = computed(() => {
  return hasLink.value && /^[a-z][a-z0-9+.-]*:/.test(props.link)
})

const resolvedLink = computed(() => {
  if (!hasLink.value) return undefined // No href attribute if no link
  if (isExternal.value) return props.link
  return withBase(props.link)
})

const isIconSvg = computed(() => props.icon && props.icon.trim().startsWith('<svg'))
</script>

<template>
  <component
    :is="hasLink ? 'a' : 'div'"
    :href="hasLink ? resolvedLink : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :aria-label="hasLink && !linkText ? title || 'Link' : undefined"
    class="custom-card"
  >
    <div v-if="icon" class="custom-card-icon">
      <div v-if="isIconSvg" v-html="icon" />
      <span v-else>{{ icon }}</span>
    </div>

    <h2 v-if="title" class="custom-card-title">{{ title }}</h2>
    <!--
      Note: Ensure `details` content is sanitized before using v-html to avoid XSS.
    -->
    <p v-if="details" class="custom-card-details" v-html="details" />

    <div v-if="hasLink && linkText" class="custom-card-action">
      <span class="custom-card-link vp-button">
        {{ linkText }}
        <span class="vpi-arrow-right link-text-icon">
          <svg
            class="link-text-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            style="margin-left: 4px;"
          >
            <path fill-rule="evenodd" d="M4.646 3.646a.5.5 0 0 1 .708 0L10 8l-4.646 4.354a.5.5 0 1 1-.708-.708L8.793 8 4.646 4.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </span>
      </span>
    </div>
  </component>
</template>


<!-- Styles remain the same -->
<style scoped>
.custom-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-decoration: none; /* Remove underline */
  color: inherit; /* Prevent blue links */
  transition: border-color 0.25s, background-color 0.25s;
  margin-bottom: 20px;
}

.custom-card:hover {
  border-color: var(--vp-c-brand-1);
  cursor: pointer;
}


.custom-card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 6px;
    background-color: var(--vp-c-default-soft);
    width: 48px;
    height: 48px;
    font-size: 24px;
    transition: background-color 0.25s;
}

.custom-card-link {
  color: var(--vp-c-brand-1);
}

.custom-card-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.375em;
}

.custom-card-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.custom-card-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0 0 8px 0; /* Added bottom margin for spacing from details */
  color: var(--vp-c-text-1);
}

.custom-card-details {
  flex-grow: 1;
  /* padding-top: 8px; removed as title has margin-bottom now */
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.custom-card-action {
  padding-top: 16px; /* Increased padding a bit */
  margin-top: auto; /* Pushes action to the bottom */
}

[class^="vpi-"], [class*=" vpi-"] {
  font-family: "vpi" !important;
  font-style: normal;
  font-weight: 400;
  width: 1em;
  height: 1em;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
}



</style>