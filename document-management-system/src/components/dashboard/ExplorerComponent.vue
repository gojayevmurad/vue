<template>
  <div class="w-full grid grid-cols-3 gap-1">
    <div
      v-for="i in 3"
      :key="i"
      draggable="true"
      @drop.prevent="drop(i.toString())"
      @dragstart="dragStart(i.toString())"
      @dragend="draggedItemId = null"
      @dragover.prevent
    >
      <div
        class="border-2 border-secondary-gray hover:bg-secondary-gray transition-all duration-300 h-32 rounded-md p-4 flex justify-between cursor-default"
        :class="{
          'pointer-events-none': draggedItemId != null,
          'opacity-20': draggedItemId === i.toString(),
          'border-blue-500': draggedItemId === i.toString(),
        }"
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import folderIcon from "@assets/icons/folder.svg";
import moreIcon from "@assets/icons/more.svg";

const draggedItemId = ref<null | string>(null);

const drop = (itemId: string) => {
  // if no item is being dragged, return
  if (!draggedItemId.value) return;
  // if the item being dragged is the same as the item being dropped on, return
  if (draggedItemId.value === itemId) return;

  // otherwise, complete the transfer
  completeTransfer(itemId);
};

/**
 *
 * @param itemId id of the item being dragged
 * @returns void
 */
const dragStart = (itemId: string) => {
  // set the dragged item id
  draggedItemId.value = itemId;
};

/**
 *
 * @param itemId id of the item being dropped on
 */
const completeTransfer = (droppedItemId: string) => {
  console.log("transfer completed : ", draggedItemId.value, " - ", droppedItemId);
};
</script>

<style scoped></style>
