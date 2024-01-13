<template>
  <div>
    <div class="bg-red-500 w-screen h-screen flex items-center justify-center">
      <p class="text-5xl text-white">PAGE NOT FOUND</p>
      <!-- button goes to / -->
      <button @click="data.setIsAuth()">asdf</button>
      <button>{{ data.isAuth ? "true" : "false" }}</button>
      <router-link to="/" class="text-2xl text-white underline">Go Home</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../../store/auth";

const data = useAuthStore();
</script>

<style scoped></style>
