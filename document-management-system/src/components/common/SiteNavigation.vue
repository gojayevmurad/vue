<script setup lang="ts">
import { computed, ref } from "vue";
import { languages } from "@/constants";

import fullScreenIcon from "@assets/icons/openFS.svg";
import settingsIcon from "@assets/icons/settings.svg";

//#region LANG
const isLanguageDropdownOpen = ref(false);
const selectedLang = ref(languages[0].code);
const selectedLangObj = computed(() => {
  return languages.find((lang) => lang.code === selectedLang.value);
});
//#endregion LANG

//#region FULLSCREEN

const isFullscreen = ref(false);

const toggleFullscreen = () => {
  if (!isFullscreen.value) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
  isFullscreen.value = !isFullscreen.value;
};

//#endregion FULLSCREEN
</script>

<template>
  <div class="shadow-md bg-white">
    <div
      v-if="isLanguageDropdownOpen"
      @mousedown="isLanguageDropdownOpen = false"
      class="z-10 fixed top-0 left-0 w-screen h-screen"
    ></div>
    <div class="container">
      <div class="flex justify-between items-center h-[70px] font-poppins">
        <!-- LEFT SIDE -->
        <div>
          <!--TODO HAMBURGER -->

          <!-- SEARCH -->

          <div class="relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute top-1/2 left-3 transform -translate-y-1/2"
            >
              <g stroke-linecap="round" stroke-linejoin="round"></g>
              <g>
                <path
                  d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#74788d"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <input
              type="text"
              class="w-[300px] border-0 outline-0 pl-10 pr-5 h-[38px] bg-[#f3f3f9] rounded-2xl text-[13px]"
              placeholder="Search..."
            />
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="flex justify-center items-center gap-3 h-full">
          <!-- LANGUAGE CUSTOM SELECT -->
          <div class="relative w-[30px] h-full flex justify-center items-center">
            <div class="absolute top-0 left-0 w-full h-full">
              <div class="flex justify-center items-center h-full gap-1">
                <!-- clickable  -->
                <button
                  class="border-none outline-none bg-transparent"
                  @click="isLanguageDropdownOpen = !isLanguageDropdownOpen"
                >
                  <img
                    :src="selectedLangObj?.flag"
                    :alt="`flag-${selectedLang}`"
                    class="h-5 object-cover"
                  />
                </button>
              </div>
              <!-- dropdown -->
              <!-- transition from top 120% to top 100% -->
              <Transition
                name="fade"
                mode="out-in"
                enter-active-class="transition-all duration-300"
                enter-from-class="opacity-0 top-[120%]"
                enter-to-class="opacity-100 top-full"
                leave-active-class="transition-all duration-300"
                leave-from-class="opacity-100 top-full"
                leave-to-class="opacity-0 top-[120%]  "
              >
                <div
                  v-if="isLanguageDropdownOpen"
                  class="absolute z-20 shadow-2xl shadow-slate-400 top-full -translate-x-1/2 left-1/2 border flex justify-center items-center flex-col w-max"
                >
                  <button
                    v-for="(lang, index) in languages"
                    :key="index"
                    @click="
                      selectedLang = lang.code;
                      isLanguageDropdownOpen = false;
                    "
                    class="flex justify-start items-center gap-2 w-full bg-white px-3 py-2 hover:bg-[#f3f3f9]"
                  >
                    <img :src="lang.flag" :alt="`flag-${lang}`" class="h-5" />
                    <p>{{ lang.name }}</p>
                  </button>
                </div>
              </Transition>
            </div>
          </div>
          <!-- FULLSCREEN -->
          <button class="border-none outline-none bg-transparent" @click="toggleFullscreen()">
            <img :src="fullScreenIcon" class="h-5" />
          </button>
          <!-- PROFILE -->
          <!-- SETTINGS -->
          <button
            class="border-none outline-none bg-transparent"
            @click="$router.push('/settings')"
          >
            <img :src="settingsIcon" class="h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
