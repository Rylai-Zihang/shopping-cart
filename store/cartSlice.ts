import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormatGroup, ICartProduct } from './../typings/index'
import { RootState } from './index'

type SliceState = {
  cartProducts: ICartProduct[]
}

type CartInfo = { id: number; format: FormatGroup }

const initialState: SliceState = {
  cartProducts: []
}

type K = (keyof ICartProduct)[]

const findTarget = (
  list: ICartProduct[],
  source: Partial<ICartProduct>,
  keys: K
) => {
  return list.find(item => {
    return keys.reduce((pre, key) => pre && source[key] === item[key], true)
  })
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct>) => {
      const target = findTarget(state.cartProducts, action.payload, [
        'id',
        'format'
      ])
      if (target) {
        target.quantity++
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 })
      }
    },
    increaseQuantity: (state, action: PayloadAction<CartInfo>) => {
      const target = findTarget(state.cartProducts, action.payload, [
        'id',
        'format'
      ])
      target!.quantity++
    },
    decreaseQuantity: (state, action: PayloadAction<CartInfo>) => {
      const target = findTarget(state.cartProducts, action.payload, [
        'id',
        'format'
      ])
      if (target!.quantity === 1) {
        const { id, format } = action.payload
        // remove the target from list
        const items = state.cartProducts.filter(
          item => item.id !== id || item.format !== format
        )
        state.cartProducts = items
      } else {
        target!.quantity--
      }
    },
    removeItem: (state, action: PayloadAction<CartInfo>) => {
      const { id, format } = action.payload
      const items = state.cartProducts.filter(
        item => item.id !== id || item.format !== format
      )
      state.cartProducts = items
    }
  }
})

export const cartReducer = cartSlice.reducer
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem
} = cartSlice.actions

export const selectAllCartProducts = (state: RootState) =>
  state.cart.cartProducts
