<template>
  <main>
    <!-- Root transition  -->
    <div class="relative">
      <Swiper
        direction="vertical"
        :slidesPerView="1"
        :spaceBetween="0"
        :mousewheel="true"
        :pagination="{
          clickable: true
        }"
        :speed="1000"
        :modules="[Mousewheel, Pagination, Autoplay]"
        class="w-screen h-screen"
        @slideChange="slideChangeHandler"
        style="
          --swiper-pagination-color: rgb(23, 37, 84);
          --swiper-pagination-bullet-width: 5px;
          --swiper-pagination-bullet-height: 75px;
          --swiper-pagination-bullet-border-radius: 0;
          --swiper-pagination-bullet-inactive-color: rgb(255, 255, 255);
          --swiper-pagination-bullet-inactive-opacity: 0.5;
        "
      >
        <SwiperSlide
          v-for="(slide, index) in data"
          v-bind:key="slide.id"
          class="w-full h-full overflow-hidden"
        >
          <Transition
            name="fade"
            mode="out-in"
            :duration="1000"
            enter-active-class="transition ease-in duration-1000 overflow-hidden"
            leave-active-class="transition ease-out duration-1000 overflow-hidden"
            enterFromClass=" scale-95 opacity-80"
            enterToClass=" scale-100 opacity-100"
            leaveFromClass=" scale-100 opacity-100"
            leaveToClass=" scale-95 opacity-80"
          >
            <div v-show="activeIndex === index" class="relative image-container">
              <div
                class="before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[url('https://themezinho.net/brabus/images/bg-noise.gif')] before:opacity-10 grayscale-[0.5]"
              >
                <img :src="slide.image" class="w-full h-full" />
              </div>
              <div class="absolute inset-0 flex flex-col justify-center items-start pl-20">
                <h1 class="text-9xl font-bold text-[#e8293b]">
                  {{ slide.title }}
                </h1>
                <p
                  class="text-9xl font-bold text-transparent -mt-14 ml-4"
                  style="-webkit-text-stroke-color: #fff; -webkit-text-stroke-width: 1px"
                >
                  {{ slide.description }}
                </p>
              </div>
            </div>
          </Transition>
        </SwiperSlide>
      </Swiper>

      <div
        class="absolute top-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2 font-fjalla flex gap-4 -rotate-90 ml-9 text-white"
      >
        <RouterLink
          to="/about"
          class="border-b border-transparent hover:border-b-white transition-all"
        >
          FACEBOOK
        </RouterLink>
        <RouterLink
          to="/about"
          class="border-b border-transparent hover:border-b-white transition-all"
          >GITHUB</RouterLink
        >
        <RouterLink
          to="/about"
          class="border-b border-transparent hover:border-b-white transition-all"
          >YOUTUBE</RouterLink
        >
      </div>
      <div
        class="absolute bottom-16 z-40 transform -translate-x-1/2 -translate-y-1/2 font-fjalla flex justify-center items-center gap-4 -rotate-90 ml-9 text-white"
      >
        <div class="h-1 w-16 bg-white"></div>
        <p class="border-b border-transparent transition-all">SCROLL DOWN</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules'
import { useSliderStore } from '../store/slider'

import 'swiper/css'
import 'swiper/css/pagination'
import { ref } from 'vue'

const { data } = useSliderStore()
const activeIndex = ref(0)

const slideChangeHandler = (swiper: any) => {
  activeIndex.value = swiper.activeIndex
}
</script>
../store/slider
