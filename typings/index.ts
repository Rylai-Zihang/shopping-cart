type FormatGroup = 'physical' | 'digital'
type Price = Record<FormatGroup, number>

export interface IProduct {
  id: number
  title: string
  description: string
  format: FormatGroup
  price: Price
  src: string
}

export interface ICartProduct extends IProduct {
  quantity: number
}
