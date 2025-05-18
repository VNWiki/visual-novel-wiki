<!-- GitHubContributer.vue -->

<!-- Displays all contributors from github as a list, with their avatars. -->

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Type for GitHub contributor, simplified for relevant fields
interface Contributor {
  login: string
  avatar_url: string
  html_url: string
}

const contributors = ref<Contributor[]>([])
const nonExistent = ref<string[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  loading.value = true
  error.value = null
  try {
    const res = await fetch('https://api.github.com/repos/VNWiki/vnwiki.github.io/contributors')
    if (!res.ok) throw new Error('Failed to fetch contributors')
    const data = await res.json()
    contributors.value = data.filter((user: Contributor) => !user.login.includes('[bot]'))
  } catch (err: any) {
    console.error(err)
    error.value = err.message || 'Unknown error'
  } finally {
    loading.value = false
  }
})

function addToNonExistent(user: string) {
  if (!nonExistent.value.includes(user))
    nonExistent.value.push(user)
}

const visibleContributors = computed(() =>
  contributors.value.filter(c => !nonExistent.value.includes(c.login))
)

const listFormatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
})

const contributorsText = computed(() => {
  if (visibleContributors.value.length <= 3)
    return listFormatter.format(visibleContributors.value.map(c => c.login))

  return listFormatter.format([
    ...visibleContributors.value.slice(0, 2).map(c => c.login),
    `${visibleContributors.value.length - 2} others`,
  ])
})
</script>

<template>
  <div class="contributors">
    <template v-if="loading">Loading contributors...</template>
    <template v-else-if="error">Error: {{ error }}</template>
    <template v-else-if="visibleContributors.length">
      <ul role="list">
        <li
          v-for="user in visibleContributors"
          :key="user.login"
          role="listitem"
        >
          <a
            :href="user.html_url ?? '#'"
            target="_blank"
            rel="noopener noreferrer"
            :title="`${user.login} on GitHub`"
            :aria-label="`${user.login} on GitHub`"
          >
            <img
              v-if="user.avatar_url"
              :src="`${user.avatar_url}?s=40`"
              :alt="user.login"
              class="avatar"
              @error="addToNonExistent(user.login)"
              loading="lazy"
              decoding="async"
            />
            <div v-else class="avatar avatar-fallback" aria-hidden="true"></div>
          </a>
        </li>
      </ul>
      <div class="names" aria-live="polite">
        {{ contributorsText }}
      </div>
    </template>
  </div>
</template>

<style scoped>
.contributors {
  text-align: center;
  margin-top: 1.5rem;
  font-family: system-ui, sans-serif;
}

ul {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-left: 0;
  list-style: none;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-1);
  object-fit: cover;
  display: block;
}

.avatar-fallback {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-1);
}

.names {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
  user-select: none;
}
</style>
