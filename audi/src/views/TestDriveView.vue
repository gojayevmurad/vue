<template>
  <div class="bg-black min-h-screen text-white pt-10">

  </div>
</template>

<script setup lang="ts">
import { useTestDriveStore } from '../store/test-drive'

const { availableCars } = useTestDriveStore()
</script>
