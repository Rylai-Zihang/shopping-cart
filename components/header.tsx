import { MoonIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { Switch, useColorMode, Button, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectAllCartProducts } from '../store/cartSlice'
import { ICartProduct } from '../typings'
import { formatPrice, getTotalPrice } from '../utils'
import { ShoppingCart } from './icon'
import Container from './container'

interface Props {
  onToggle: () => void
}

const Header: React.FC<Props> = ({ onToggle }) => {
  const { toggleColorMode } = useColorMode()

  const cartProducts: ICartProduct[] = useSelector(selectAllCartProducts)
  const totalPrice = getTotalPrice(cartProducts)
  const formattedPrice = formatPrice(totalPrice)

  return (
    <div className="border-b-1 ">
      <Container className="py-5 flex justify-between">
        <div className="flex ite ms-center">
          <TriangleUpIcon h={9} className="mr-4" />
          <Link href="/">
            <h1 className="text-2xl"> ReplicaZone</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <Switch colorScheme="facebook" size="lg" onChange={toggleColorMode} />
          <MoonIcon className="ml-2 mr-4" />

          <Button colorScheme="facebook" variant="outline" onClick={onToggle}>
            <Icon as={ShoppingCart} className="mr-2" />
            {formattedPrice}
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Header
