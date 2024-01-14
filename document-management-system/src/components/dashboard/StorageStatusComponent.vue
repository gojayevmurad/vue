<template>
  <div>
    <!-- HEAD -->
    <h2 class="text-lg text-center">Storage</h2>
    <!-- CONTENT -->
    <div class="flex flex-col gap-2 mt-4">
      <div class="flex justify-between items-center">
        <!-- 48.02 GB (76%) of 64 GB used -->

        <div class="flex flex-col gap-1 w-full">
          <span class="text-sm text-secondary-text">48.02 GB (76%) of 64 GB used</span>
          <div class="h-2 bg-gray-200 rounded-full">
            <div class="h-full bg-primary rounded-full bg-blue-500"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storageStatus } from "@/data/storage.ts";
import { convertFileSize } from "@/utils/size-converter";



</script>

<style scoped></style>
