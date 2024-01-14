<script setup lang="ts">
import SiteNavigation from "@components/common/SiteNavigation.vue";
</script>

<template>
  <SiteNavigation />
  <RouterView v-slot="{ Component }">
    <Transition
      name="fade"
      mode="out-in"
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped></style>
