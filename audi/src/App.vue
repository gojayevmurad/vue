<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteNavigation from './components/common/SiteNavigation.vue'
</script>

<template>
  <SiteNavigation />
  <div class="bg-black">
    <RouterView v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="transition duration-500"
        leave-active-class="transition duration-500"
        leave-from-class="opacity-100"
        enter-to-class="opacity-100"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style>
#nprogress .bar {
  height: 3px !important;
}
</style>
