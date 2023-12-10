import { defineStore } from 'pinia'
import { ref } from 'vue'
import testDriveCar1 from '@/assets/images/test-drive/audi_a6.png'
import testDriveCar2 from '@/assets/images/test-drive/audi_q8.png'

export const useTestDriveStore = defineStore('alerts', () => {
  const availableCars = ref([
    {
      id: 1,
      title: 'Audi A6',
      description: 'Audi A6 40 TDI 204 HP S tronic',
      image: testDriveCar1
    },
    {
      id: 2,
      title: 'Audi Q8',
      description: 'Audi Q8 50 TDI 286 HP tiptronic',
      image: testDriveCar2
    }
  ])

  return { availableCars }
})
