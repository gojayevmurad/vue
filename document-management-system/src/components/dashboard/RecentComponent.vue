<template>
  <div class="w-full">
    <!-- RECENT HEADER -->
    <div class="flex justify-between items-center">
      <h2 class="text-lg">Recent</h2>
      <div class="flex justify-center items-center gap-3">
        <button>
          <p class="text-[13px]">View All</p>
        </button>
      </div>
    </div>
    <!-- RECENT CONTENT -->
    <table class="w-full">
      <thead class="text-sm">
        <tr class="border-b border-b-secondary-gray">
          <th class="px-6 py-3 text-start font-semibold">Name</th>
          <th class="px-6 py-3 text-start font-semibold">Date Modified</th>
          <th class="px-6 py-3 text-start font-semibold">Size</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="recentFile in recentOpened"
          :key="recentFile._id"
          class="border-b border-b-secondary-gray hover:bg-[#f8f9fA] transition"
        >
          <td class="px-6 py-4 flex justify-start items-center gap-1">
            <div>
              <img :src="fileIcons[recentFile.type]" alt="file icon" />
            </div>
            <p>{{ recentFile.name }}.{{ recentFile.type }}</p>
          </td>
          <td class="px-6 py-4">{{ recentFile.updatedAt }}</td>
          <td class="px-6 py-4">{{ recentFile.size }}KB</td>
          <td class="px-6 py-4">
            <button class="outline-none border-none">
              <img :src="moreIcon" alt="more" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import moreIcon from "@assets/icons/more.svg";
import { recentOpened } from "@/data/files.ts";
import { fileIcons } from "@/constants";
</script>

<style scoped></style>
