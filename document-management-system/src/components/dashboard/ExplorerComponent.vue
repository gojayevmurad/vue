<template>
  <div class="w-full grid grid-cols-3 gap-1">
    <div
      v-for="folder in folders"
      :key="folder.id"
      draggable="true"
      @drop.prevent="drop(folder.id.toString())"
      @dragstart="dragStart(folder.id.toString())"
      @dragend="draggedItemId = null"
      @dragover.prevent
    >
      <div
        class="border-2 border-secondary-gray hover:bg-secondary-gray transition-all duration-300 h-32 rounded-md p-4 flex justify-between cursor-default"
        :class="{
          'pointer-events-none': draggedItemId != null,
          'opacity-20': draggedItemId === folder.id,
          'border-blue-500': draggedItemId === folder.id,
        }"
      >
        <!-- LEFT SIDE -->
        <div class="flex justify-between items-start flex-col h-full">
          <div>
            <img :src="folderIcon" alt="folder" />
          </div>
          <div>
            <p class="font-medium text-[14px] leading-3">{{ folder.name }}</p>
            <span class="text-[13px] text-secondary-text">{{ folder.files }} Files</span>
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
            <span class="text-[13px] text-secondary-text">{{ folder.size }}</span>
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

const folders = ref([
  {
    id: "1",
    name: "Folder 1",
    files: 12,
    size: "6GB",
    children: [
      {
        id: "6",
        name: "Folder 6",
        files: 12,
        size: "6GB",
      },
    ],
  },
  {
    id: "2",
    name: "Folder 2",
    files: 12,
    size: "6GB",
    children: [
      {
        id: "7",
        name: "Folder 7",
        files: 12,
        size: "6GB",
      },
    ],
  },
  {
    id: "3",
    name: "Folder 3",
    files: 12,
    size: "6GB",
    children: [
      {
        id: "4",
        name: "Folder 4",
        files: 12,
        size: "6GB",
      },
      {
        id: "5",
        name: "Folder 5",
        files: 12,
        size: "6GB",
      },
    ],
  },
]);

const draggedItemId = ref<null | string>(null);

/**
 *
 * @param itemId id of the item being dropped on
 * @returns void
 */
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
 * @returns void
 */
const completeTransfer = (droppedItemId: string) => {
  console.log("transfer completed : ", draggedItemId.value, "-", droppedItemId);
};
</script>

<style scoped></style>
