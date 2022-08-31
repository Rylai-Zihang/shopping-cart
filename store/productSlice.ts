import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '@/typings/index'
import { productList } from '../mock'

type SliceState = {
  product: IProduct[]
}

const initialState: SliceState = {
  product: productList
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {}
})

export const productReducer = productSlice.reducer
