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

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Cart: React.FC<Props> = ({ isOpen, onClose }) => {
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
        <DrawerHeader className="flex items-center leading-[4rem] bg-gray !font-normal">
          <DrawerCloseButton className="mt-6 hover:!bg-gray" />
          Cart Summary
        </DrawerHeader>

        <DrawerBody>body</DrawerBody>

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
