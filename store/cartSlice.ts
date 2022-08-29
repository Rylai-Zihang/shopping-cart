// store/cartSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartProduct } from './../typings/index'

type SliceState = {
  cart: ICartProduct[]
}

const initialState: SliceState = {
  cart: [
    {
      id: 111,
      title: '111',
      description: '1111',
      format: 'physical',
      price: { physical: 111, digital: 222 },
      quantity: 1
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
