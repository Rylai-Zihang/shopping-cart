import {
  Button,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'
import { useState } from 'react'
import Image from 'next/image'
import { IProduct } from '../typings'

interface Props {
  product: IProduct
}

const Product: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const { id, title, description, format, price, src } = product
  const totalPrice = price[format] * quantity
  const priceStr = `$${totalPrice}`
  return (
    <div className="flex">
      <div className="left w-1/2">
        <h2 className="text-[40px] font-semibold mb-6">{title}</h2>
        <p className="text-xl mb-6">{description}</p>
        <div className="w-3/5 grid grid-cols-3 gap-3">
          <span className="text-xs flex text-slate-500">QUANTITY</span>
          <span className="text-xs flex text-slate-500 col-span-2">FORMAT</span>
          <div className="col-span-1">
            <NumberInput
              value={quantity}
              size="sm"
              min={1}
              onChange={(value: string) => setQuantity(parseInt(value))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <div className="col-span-2">
            <Select size="sm">
              <option value="physical">Physical Copy</option>
              <option value="digital">Digital Copy</option>
            </Select>
          </div>
          <div className="text-xl font-semibold leading-10">{priceStr}</div>
          <Button className="col-span-2" colorScheme="facebook">
            ADD TO CART
          </Button>
        </div>
      </div>
      <div className="relative right w-1/2">
        <Image
          className="image"
          src={src}
          alt={description}
          width={500}
          height={400}
        />
      </div>
    </div>
  )
}

export default Product
