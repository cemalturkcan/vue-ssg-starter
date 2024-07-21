---
title: Vite + Vue 3 SSG Starter
description: A simple starter template for Vite + Vue 3 with Server-Side Generation (SSG) support.

name: John
surname: Doe
personalTitle: Full Stack Developer
extraDescription: My name is John Doe
projects:
  Full Time:
    - name: Project 1
      description: Project 1 description
---

<Example :frontmatter="frontmatter"/>

<route lang="yaml">
    meta:
      layout: home
</route>
