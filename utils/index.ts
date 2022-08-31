import { ICartProduct } from '@/typings/index'

export const formatPrice = (price: number) => {
  return `$${price.toFixed(2)}`
}

export const getTotalPrice = (list: ICartProduct[]) => {
  return list.reduce((sum, item) => {
    const { price, format, quantity } = item
    return sum + quantity * price[format]
  }, 0)
}

interface ClassToggles {
  [key: string]: boolean
}

interface Options {
  extra: string | undefined
}

export const classesHelper = (
  name: string | ClassToggles,
  options?: Options
) => {
  const nameObject = name instanceof Object ? name : { [name]: name }

  const result = Object.entries(nameObject)
    .filter(kv => kv[1] !== false)
    .map(kv => kv[0])
    .map(name => {
      return [name].filter(Boolean).join('-')
    })
    .concat((options && options.extra) || [])
    .join(' ')

  return result
}
