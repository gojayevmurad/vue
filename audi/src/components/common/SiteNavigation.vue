<template>
  <header class="fixed top-0 left-0 w-screen z-50 h-10 flex justify-between items-center py-7 px-9">
    <div>
      <RouterLink to="/direction">
        <p class="text-white border-b border-transparent hover:border-b-white text-xl font-fjalla">
          Direction
        </p>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/">
        <img src="../../assets/logo.png" alt="" class="h-16" />
      </RouterLink>
    </div>
    <nav class="flex gap-5">
      <RouterLink
        class="text-white border-b border-transparent hover:border-b-white text-xl font-fjalla"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="text-white border-b border-transparent hover:border-b-white text-xl font-fjalla"
        to="/about"
        >About</RouterLink
      >
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
