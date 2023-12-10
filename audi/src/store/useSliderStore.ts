import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

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
      description: 'AUDI R8',
      image: 'https://wallpapersmug.com/download/1920x1080/35a345/basement-audi-r8.jpg'
    },
    {
      id: 2,
      title: 'Lüks',
      description: 'AUDI A8',
      image:
        'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/73dDzJyBTDan7vaUVNDS'
    },
    {
      id: 3,
      title: 'Elektrik',
      description: 'Audi Q4 e-tron',
      image: 'https://images.alphacoders.com/114/1142391.jpg'
    },
    {
      id: 4,
      title: 'SUV',
      description: 'Audi Q7',
      image: 'https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/538/2017-audi-q7_100538458.jpg'
    },
    {
      id: 5,
      title: 'Sportif',
      description: 'AUDI R8',
      image:
        'https://s1.1zoom.me/b5264/298/Audi_Coast_A3_Sportback_30_g-tron_2020_White_593144_1920x1080.jpg'
    }
  ])

  return { data }
})
