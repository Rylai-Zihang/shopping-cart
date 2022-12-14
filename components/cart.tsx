import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { selectAllCartProducts } from '@/store/cartSlice'
import { ICartProduct } from '@/typings/index'
import { formatPrice, getTotalPrice } from '@/utils/index'
import CartItem from '@/components/cartItem'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Cart: React.FC<Props> = ({ isOpen, onClose }) => {
  const cartProducts: ICartProduct[] = useSelector(selectAllCartProducts)
  const totalPrice = getTotalPrice(cartProducts)
  const formattedPrice = formatPrice(totalPrice)

  const headerBackgroundColor = useColorModeValue('#f7f7f8', 'gray.800')

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent className="flex flex-col">
        <DrawerHeader className="flex items-center leading-[4rem] !font-normal" bg={headerBackgroundColor}>
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
