// store/cartSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartProduct } from './../typings/index'

type SliceState = {
  cart: ICartProduct[]
}

const initialState: SliceState = {
  cart: [
    {
      id: 1,
      title: 'Starry Night',
      description:
        'High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.',
      format: 'physical',
      price: { physical: 79.85, digital: 27.95 },
      quantity: 1,
      src: 'https://demo.snipcart.com/images/starry-night.jpg'
    }
  ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct>) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id)
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(item => item.id === action.payload)
      item!.quantity++
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(item => item.id === action.payload)
      if (item!.quantity === 1) {
        item!.quantity = 1
      } else {
        item!.quantity--
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const removeItem = state.cart.filter(item => item.id !== action.payload)
      state.cart = removeItem
    }
  }
})

export const cartReducer = cartSlice.reducer
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem
} = cartSlice.actions
