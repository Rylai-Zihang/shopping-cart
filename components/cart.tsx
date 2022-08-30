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
import CartItem from './cartItem'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Cart: React.FC<Props> = ({ isOpen, onClose }) => {
  const cartProducts: ICartProduct[] = useSelector<RootState, ICartProduct[]>(
    state => state.cart.cartProducts
  )

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="md"
      //   finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader className="flex items-center leading-[4rem] bg-lightGray !font-normal">
          <DrawerCloseButton className="mt-6 hover:!bg-gray" />
          Cart Summary
        </DrawerHeader>

        <DrawerBody className='!p-0'>
          {cartProducts?.map((cartProduct) => (
            <CartItem key={`${cartProduct.id} - ${cartProduct.format}`} cartProduct={cartProduct}/>
          ))}
        </DrawerBody>

        <DrawerFooter>
          <Button size="sm" variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Cart
