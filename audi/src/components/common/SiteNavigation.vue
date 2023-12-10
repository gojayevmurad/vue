<template>
  <header
    :style="{ 'background-color': scrolled ? '#fff' : 'transparent' }"
    class="transition-all duration-700 fixed top-0 left-0 w-screen z-50 h-10 grid grid-cols-3 items-center px-9"
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
    <div class="place-self-center">
      <RouterLink to="/">
        <img src="../../assets/logo.png" alt="" class="h-16" />
      </RouterLink>
    </div>
    <nav class="flex gap-5 text-white text-xl justify-end font-fjalla">
      <RouterLink
        v-for="route in routes"
        :key="route.name"
        :class="[
          'border-b border-transparent hover:border-b-white',
          scrolled && 'text-black hover:border-b-black'
        ]"
        :to="route.path"
        >{{ route.name }}</RouterLink
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

const routes = [
  {
    name: 'Əsas',
    path: '/'
  },
  {
    name: 'Haqqımızda',
    path: '/about'
  },
  {
    name: 'Test Sürüşü',
    path: '/test-drive'
  }
]
</script>
