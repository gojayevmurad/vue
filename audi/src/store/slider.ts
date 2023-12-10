import { defineStore } from 'pinia'
import { ref } from 'vue'
import img1 from '@/assets/images/slider/slide_1.jpg'
import img2 from '@/assets/images/slider/slide_2.jpg'
import img3 from '@/assets/images/slider/slide_3.jpg'
import img4 from '@/assets/images/slider/slide_4.jpg'
import img5 from '@/assets/images/slider/slide_5.jpg'

interface ISliderItem {
  id: number
  title: string
  description: string
  image: string
}

export const useSliderStore = defineStore('alerts', () => {
  const data = ref<ISliderItem[]>([
    {
      id: 1,
      title: 'Performans',
      description: 'R8',
      image: img1
    },
    {
      id: 2,
      title: 'Lüks',
      description: 'A8',
      image: img2
    },
    {
      id: 3,
      title: 'Elektrik',
      description: 'Q4 e-tron',
      image: img3
    },
    {
      id: 4,
      title: 'SUV',
      description: 'Q7',
      image: img4
    },
    {
      id: 5,
      title: 'Sportif',
      description: 'R8',
      image: img5
    }
  ])

  return { data }
})
