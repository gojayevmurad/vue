<template>
  <header
    :style="{ 'background-color': scrolled ? '#fff' : 'transparent' }"
    class="transition-all duration-700 fixed top-0 left-0 w-screen z-50 h-10 flex justify-between items-center py-7 px-9"
  >
    <div>
      <RouterLink to="/direction">
        <p
          :class="[
            'text-white border-b border-transparent hover:border-b-white text-xl font-fjalla',
            scrolled && 'text-black hover:border-b-black'
          ]"
        >
          Direction
        </p>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/">
        <img src="../../assets/logo.png" alt="" class="h-16" />
      </RouterLink>
    </div>
    <nav class="flex gap-5 text-white text-xl font-fjalla">
      <RouterLink
        :class="[
          'border-b border-transparent hover:border-b-white',
          scrolled && 'text-black hover:border-b-black'
        ]"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        :class="[
          'border-b border-transparent hover:border-b-white',
          scrolled && 'text-black hover:border-b-black'
        ]"
        to="/about"
        >About</RouterLink
      >
    </nav>
  </header>
</template>

<script setup lang="ts">
declare var window: any

import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 200
}
</script>
