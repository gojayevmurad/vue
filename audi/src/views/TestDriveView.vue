<template>
  <div class="bg-black min-h-screen text-white pt-10">
    <div class="container mx-auto">
      <h3 class="text-6xl text-center mt-10 font-fjalla">Test Sürüşü</h3>
      <form>
        <div v-if="step === 1" class="w-[1000px] mx-auto">
          <h5 class="text-4xl my-4 text-center mt-16 font-fjalla">Model Seçin</h5>
          <div class="flex gap-11 justify-around">
            <label
              :class="[
                'border-b-8 pb-5 transition duration-300 hover:scale-105 cursor-pointer',
                selectedCarId === availableCars[0].id ? 'border-green-800' : 'border-transparent'
              ]"
            >
              <input
                type="radio"
                name="car"
                :value="availableCars[0].id"
                v-model="selectedCarId"
                class="hidden"
              />
              <img
                :src="availableCars[0].image"
                alt=""
                class="w-[500px] h-[220px] object-contain"
              />
              <p
                :class="[
                  'font-fjalla transition duration-300',
                  selectedCarId === availableCars[0].id && 'text-green-800'
                ]"
              >
                {{ availableCars[0].title }}
              </p>
            </label>
            <label
              :class="[
                'border-b-8  pb-5 transition duration-300 hover:scale-105 cursor-pointer',
                selectedCarId === availableCars[1].id ? 'border-green-800' : 'border-transparent'
              ]"
            >
              <input
                type="radio"
                name="car"
                :value="availableCars[1].id"
                v-model="selectedCarId"
                class="hidden"
              />
              <img
                :src="availableCars[1].image"
                alt=""
                class="w-[500px] h-[220px] object-contain"
              />
              <p
                :class="[
                  'font-fjalla transition duration-300',
                  selectedCarId === availableCars[1].id && 'text-green-800'
                ]"
              >
                {{ availableCars[1].title }}
              </p>
            </label>
          </div>
        </div>

        <div v-if="step === 2" class="w-[1000px] mx-auto">
          <h5 class="text-4xl my-4 text-center mt-16 font-fjalla">Məlumatlarınızı daxil edin</h5>
          <div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Ad</label
                >
                <input
                  type="text"
                  id="first_name"
                  v-model="formState.firstName"
                  class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Soyad</label
                >
                <input
                  type="text"
                  id="last_name"
                  v-model="formState.lastName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Mobil Nömrə</label
                >
                <input
                  type="tel"
                  id="phone"
                  v-model="formState.phone"
                  class="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="055-555-55-55"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Email address</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="formState.email"
                  class="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div v-show="successMessage">
          <p class="text-green-800 text-center font-bold font-fjalla">{{ successMessage }}</p>
        </div>
        <div class="flex justify-around items-center my-9">
          <button
            type="button"
            class="bg-orange-500 h-full py-4 px-9 font-fjalla disabled:bg-gray-600"
            :disabled="step === 1"
            :onclick="prevStep"
          >
            Əvvəlki
          </button>
          <button
            type="button"
            class="bg-green-500 h-full py-4 px-9 font-fjalla disabled:bg-gray-600"
            :disabled="step === 3"
            :onclick="nextStep"
            v-show="step !== 2"
          >
            Növbəti
          </button>
          <button
            type="submit"
            class="bg-green-500 h-full py-4 px-9 font-fjalla disabled:bg-gray-600"
            :disabled="step !== 2"
            v-show="step === 2"
            :onclick="onSubmitHandler"
          >
            Təsdiqlə
          </button>
        </div>
      </form>
    </div>
    <button
      type="button"
      :onclick="router.back"
      class="absolute bottom-9 left-10 bg-red-800 py-4 px-9"
    >
      Geri
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import testDriveCar1 from '@/assets/images/test-drive/audi_a6_new.png'
import testDriveCar2 from '@/assets/images/test-drive/audi_q8_new.png'

const router = useRouter()
const step = ref(2)
const selectedCarId = ref(1)
const successMessage = ref('')
const formState = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: ''
})

const availableCars = [
  {
    id: 1,
    title: 'Audi A60 40 Sport',
    image: testDriveCar1
  },
  {
    id: 2,
    title: 'Audi Q8',
    image: testDriveCar2
  }
]

watch(selectedCarId, (newValue) => {
  console.log(newValue)
})

const nextStep = () => (step.value += 1)

const prevStep = () => (step.value -= 1)

const onSubmitHandler = (e: any) => {
  e.preventDefault()

  formState.value = {
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  }

  successMessage.value = 'Təşəkkürlər! Sizinlə əlaqə saxlanılacaq'

  setTimeout(() => {
    successMessage.value = ''
    router.back()
  }, 2000)
}
</script>
