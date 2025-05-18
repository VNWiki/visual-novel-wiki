<!-- CoreContributors.vue -->

<!-- Uses vitepress's team card component to display a person

https://vitepress.dev/reference/default-theme-team-page

To add people, adjust coreMembers.

-->

<script setup>

import { VPTeamMembers } from 'vitepress/theme'

const coreMembers = [
  {
    avatar: "https://avatars.githubusercontent.com/u/113186192?v=4",
    name: "Saetron",
    title: "Contributor",
    links: [
      { icon: "github", link: "https://github.com/Saetron" }
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/51835548?v=4",
    name: "Amb0s",
    title: "Contributor",
    links: [
      { icon: "github", link: "https://github.com/Amb0s" }
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/36089203?v=4",
    name: "uunniiblog",
    title: "Contributor",
    links: [
      { icon: "github", link: "https://github.com/uunniiblog" }
    ]
  },
  {
  avatar: "https://avatars.githubusercontent.com/u/131207849?v=4",
  name: "b-fission",
  title: "Developer",
  links: [
    { icon: "github", link: "https://github.com/b-fission" }
  ]
}
]

</script>

<template>
    <VPTeamMembers size="small" :members="coreMembers" />
</template>