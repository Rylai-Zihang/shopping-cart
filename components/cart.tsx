import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { ICartProduct } from '../typings'
import { formatPrice } from '../utils'
import CartItem from './cartItem'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Cart: React.FC<Props> = ({ isOpen, onClose }) => {
  const cartProducts: ICartProduct[] = useSelector<RootState, ICartProduct[]>(
    state => state.cart.cartProducts
  )

  const totalPrice = cartProducts.reduce((sum, product) => {
    const { price, format, quantity } = product
    return sum + quantity * price[format]
  }, 0)
  const formattedPrice = formatPrice(totalPrice)

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent className="flex flex-col">
        <DrawerHeader className="flex items-center leading-[4rem] bg-lightGray !font-normal">
          <DrawerCloseButton className="mt-6 hover:!bg-gray" />
          Cart Summary
        </DrawerHeader>

        <DrawerBody className="!flex-grow !p-0 overflow-scroll">
          {cartProducts?.map((cartProduct) => (
            <CartItem key={`${cartProduct.id} - ${cartProduct.format}`} cartProduct={cartProduct}/>
          ))}
        </DrawerBody>

        <DrawerFooter className="!p-8 flex-col">
          <div className="w-full mb-4 flex justify-between leading-8">
            <span>Total</span>
            <span>{formattedPrice}</span>
          </div>
          <Button size="lg" width="100%" colorScheme="facebook" onClick={onClose}>
            Checkout
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>)
}

export default Cart
