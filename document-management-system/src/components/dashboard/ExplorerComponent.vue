<template>
  <div class="w-full grid grid-cols-3 gap-1">
    <div
      v-for="i in 3"
      :key="i"
      class="border border-secondary-gray hover:bg-secondary-gray transition-all h-32 rounded-md p-4 flex justify-between"
    >
      <!-- LEFT SIDE -->
      <div class="flex justify-between items-start flex-col h-full">
        <div>
          <img :src="folderIcon" alt="folder" />
        </div>
        <div>
          <p class="font-medium text-[14px] leading-3">Folder Name</p>
          <span class="text-[13px] text-secondary-text">12 Files</span>
        </div>
      </div>
      <!-- RIGHT SIDE -->
      <div class="flex justify-between items-end flex-col h-full">
        <div>
          <button class="outline-none border-none">
            <img :src="moreIcon" alt="more" class="rotate-90" />
          </button>
        </div>
        <div>
          <span class="text-[13px] text-secondary-text">6GB</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import folderIcon from "@assets/icons/folder.svg";
import moreIcon from "@assets/icons/more.svg";
</script>

<style scoped></style>
