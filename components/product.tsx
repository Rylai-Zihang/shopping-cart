import {
  Button,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { addToCart } from '@/store/cartSlice'
import { classesHelper, formatPrice } from '@/utils/index'
import { IProduct, FormatGroup, ICartProduct } from '@/typings/index'

interface Props {
  product: IProduct
  onToggle: () => void
  index: number
}

const Product: React.FC<Props> = ({ product, onToggle, index }) => {
  const [quantity, setQuantity] = useState(1)
  const [format, setFormat] = useState<FormatGroup>('physical')
  const { id, title, description, price, src } = product
  const totalPrice = price[format] * quantity
  const formattedPrice = formatPrice(totalPrice)

  const containerClass = classesHelper(
    {
      'flex-row-reverse': index % 2 === 1
    },
    {
      extra: 'py-8 flex'
    }
  )

  const imageClass = classesHelper(
    {
      left: index % 2 === 1
    },
    {
      extra: 'image'
    }
  )

  const dispatch = useDispatch()

  const clickAddToChart = () => {
    const cartProduct: ICartProduct = {
      id,
      title,
      description,
      price,
      src,
      format,
      quantity
    }
    dispatch(addToCart(cartProduct))
    onToggle()
  }

  const changeFormat = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormat(event.target.value as FormatGroup)
  }

  return (
    <div className={containerClass}>
      <div className="w-1/2">
        <h2 className="text-[40px] mb-6 font-bold">{title}</h2>
        <p className="text-xl mb-6">{description}</p>
        <div className="w-3/5 grid grid-cols-3 gap-3">
          <span className="text-xs flex text-slate-500">QUANTITY</span>
          <span className="text-xs flex text-slate-500 col-span-2">FORMAT</span>
          <div className="col-span-1">
            <NumberInput
              value={quantity}
              size="sm"
              min={1}
              onChange={(value: string) => setQuantity(parseInt(value || '0'))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <div className="col-span-2">
            <Select size="sm" value={format} onChange={changeFormat}>
              <option value="physical">Physical Copy</option>
              <option value="digital">Digital Copy</option>
            </Select>
          </div>
          <div className="text-xl font-semibold leading-10">
            {formattedPrice}
          </div>
          <Button
            className="col-span-2 !text-xs"
            colorScheme="facebook"
            onClick={clickAddToChart}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      <div className="relative w-1/2">
        <Image
          className={imageClass}
          src={src}
          alt={title}
          width={500}
          height={400}
          quality={50}
          priority={index === 0}
        />
      </div>
    </div>
  )
}

export default Product
