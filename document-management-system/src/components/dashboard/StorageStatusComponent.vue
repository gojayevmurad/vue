<template>
  <div>
    <!-- HEAD -->
    <h2 class="text-[15px] text-center">Storage</h2>
    <!-- CONTENT -->
    <div class="flex flex-col gap-4 mt-4">
      <div class="flex justify-between items-center">
        <!-- 48.02 GB (76%) of 64 GB used -->

        <div class="flex flex-col gap-1 w-full">
          <span class="text-[13px] text-secondary-text text-center"
            >{{ usedStorage }} GB ({{ percentageUsed }}%) of {{ totalStorage }} used</span
          >
          <div class="h-2 bg-gray-200 rounded-full">
            <div
              class="h-full bg-primary rounded-full bg-blue-500 w-[--progress-width]"
              :style="{ '--progress-width': percentageUsed + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storageStatus } from "@/data/storage.ts";
import { convertFileSize } from "@/utils/size-converter";

const totalStorage = convertFileSize(storageStatus.sizeInKB).gb;
const usedStorage = convertFileSize(storageStatus.usedInKB).gb;
const percentageUsed = ((usedStorage / totalStorage) * 100).toFixed(2);
</script>

<style scoped></style>
