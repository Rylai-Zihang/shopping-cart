import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import Image from 'next/image'
import NumberInput from './numberInput'
import { ICartProduct } from '../typings'
import { useDispatch } from 'react-redux'
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from '../store/cartSlice'

interface Props {
  cartProduct: ICartProduct
}

const CartItem: React.FC<Props> = ({ cartProduct }) => {
  const { id, title, price, src, format, quantity } = cartProduct
  const totalTitle = title + (format === 'digital' ? '(.jpg)' : '')
  const totalPrice = price[format] * quantity
  const priceStr = `$${totalPrice.toFixed(2)}`

  const dispatch = useDispatch()

  const clickRemove = () => {
    dispatch(removeItem({ id, format }))
  }

  const clickIncrease = () => {
    dispatch(increaseQuantity({ id, format }))
  }

  const clickDecrease = () => {
    dispatch(decreaseQuantity({ id, format }))
  }

  return (
    <div className="p-8 border-b-normalGray border-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={src} alt={title} width={40} height={32} quality={20} />
          <h2 className="ml-3 text-lg font-semibold">{totalTitle}</h2>
        </div>

        <IconButton
          onClick={clickRemove}
          variant="outline"
          color="#9e2215"
          aria-label="Call Sage"
          fontSize="16px"
          borderRadius={8}
          icon={<DeleteIcon />}
        />
      </div>
      <div className="mt-8 mb-2 text-xs text-normalGray opacity-60">
        Quantity
      </div>
      <div className="flex items-center justify-between mb-10">
        <NumberInput
          quantity={quantity}
          increaseCb={clickIncrease}
          decreaseCb={clickDecrease}
        />
        <span>{priceStr}</span>
      </div>
    </div>
  )
}

export default CartItem
