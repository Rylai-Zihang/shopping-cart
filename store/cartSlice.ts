// store/cartSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartProduct } from './../typings/index'

type SliceState = {
  cartProducts: ICartProduct[]
}

const initialState: SliceState = {
    cartProducts: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct>) => {
      const itemInCart = state.cartProducts.find(item => item.id === action.payload.id)
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartProducts.find(item => item.id === action.payload)
      item!.quantity++
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartProducts.find(item => item.id === action.payload)
      if (item!.quantity === 1) {
        item!.quantity = 1
      } else {
        item!.quantity--
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const removeItem = state.cartProducts.filter(item => item.id !== action.payload)
      state.cartProducts = removeItem
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
