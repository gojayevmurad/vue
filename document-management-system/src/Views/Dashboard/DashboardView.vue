<template>
  <div class="container py-3 font-poppins text-primary-text">
    <div>
      <h1 class="text-xl">Dashboard</h1>
    </div>
    <div class="grid grid-cols-dashboard-layout gap-4 mt-2">
      <!-- aside -->
      <aside :class="gridColStyles">
        <CreateNewComponent />
      </aside>
      <div :class="gridColStyles" class="flex flex-col gap-2">
        <!-- main content header -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg">My Files</h2>
          <div class="flex justify-center items-center gap-3">
            <button>
              <img :src="moreIcon" alt="more" />
            </button>
          </div>
        </div>
        <!-- FOLDERS -->
        <ExplorerComponent />
        <!-- RECENTS -->
        <RecentComponent />
      </div>
      <div :class="gridColStyles">
        <StorageStatusComponent />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExplorerComponent from "@/components/dashboard/ExplorerComponent.vue";
import CreateNewComponent from "@components/dashboard/CreateNewComponent.vue";
import StorageStatusComponent from "@/components/dashboard/StorageStatusComponent.vue";

import moreIcon from "@assets/icons/more.svg";
import RecentComponent from "@/components/dashboard/RecentComponent.vue";

const gridColStyles = "bg-white h-full rounded-md p-5";
</script>

<style scoped></style>
