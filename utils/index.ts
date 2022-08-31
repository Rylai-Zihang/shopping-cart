import { ICartProduct } from './../typings/index'

export const formatPrice = (price: number) => {
  return `$${price.toFixed(2)}`
}

export const getTotalPrice = (list: ICartProduct[]) => {
  return list.reduce((sum, item) => {
    const { price, format, quantity } = item
    return sum + quantity * price[format]
  }, 0)
}
