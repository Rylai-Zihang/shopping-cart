import { MoonIcon, TriangleUpIcon } from '@chakra-ui/icons'
import {
  Switch,
  useColorMode,
  Button,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectAllCartProducts } from '@/store/cartSlice'
import { formatPrice, getTotalPrice } from '@/utils/index'
import { ICartProduct } from '@/typings/index'
import { ShoppingCart } from '@/components/icon'
import Container from '@/components/layout/container'

interface Props {
  onToggle: () => void
}

const Header: React.FC<Props> = ({ onToggle }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const cartProducts: ICartProduct[] = useSelector(selectAllCartProducts)
  const totalPrice = getTotalPrice(cartProducts)
  const formattedPrice = formatPrice(totalPrice)

  const headerClass = useColorModeValue('light', 'dark')

  return (
    <header className={`header ${headerClass}`}>
      <Container className="py-5 flex justify-between">
        <div className="flex ite ms-center">
          <TriangleUpIcon h={9} className="mr-4" />
          <Link href="/">
            <h1 className="text-2xl font-bold">ReplicaZone</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <Switch
            colorScheme="facebook"
            size="lg"
            isChecked={colorMode === 'dark'}
            onChange={toggleColorMode}
          />
          <MoonIcon className="ml-2 mr-4" />

          <Button colorScheme="facebook" variant="outline" onClick={onToggle}>
            <Icon as={ShoppingCart} className="mr-2" />
            {formattedPrice}
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Header
