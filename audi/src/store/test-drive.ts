import { defineStore } from 'pinia'
import { ref } from 'vue'
import testDriveCar1 from '@/assets/images/test-drive/audi_a6_new.png'
import testDriveCar2 from '@/assets/images/test-drive/audi_q8_new.png'

export const useTestDriveStore = defineStore('alerts', () => {
  const availableCars = ref([
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
  ])

  return { availableCars }
})
