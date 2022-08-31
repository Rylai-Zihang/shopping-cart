import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '@/typings'

type SliceState = {
  product: IProduct[]
}

const initialState: SliceState = {
  product: [
    {
      id: 1,
      title: 'Starry Night',
      description:
        'High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.',
      format: 'physical',
      price: { physical: 79.85, digital: 27.95 },
      src: 'https://demo.snipcart.com/images/starry-night.jpg'
    },
    {
      id: 2,
      title: 'Irises',
      description:
        'Irises is yet again, another painting by the Dutch artist Vincent van Gogh.',
      format: 'physical',
      price: { physical: 69.95, digital: 29.75 },
      src: 'https://demo.snipcart.com/images/irises.jpg'
    }
  ]
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {}
})

export const productReducer = productSlice.reducer
