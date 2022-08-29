import type { NextPage } from 'next'
import { Provider } from 'react-redux'
import { ChakraProvider, Button, useDisclosure } from '@chakra-ui/react'
import Header from '../components/header'
import Products from '../components/products'
import Cart from '../components/cart'
import Footer from '../components/footer'
import store from '../store'

const Home: NextPage = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <Provider store={store}>
        <ChakraProvider>
            <Header />
            <Products />
            <Cart isOpen={isOpen} onClose={onClose}></Cart>
            {/* <Button onClick={onToggle}>Open Drawer</Button> */}
            {/* <Footer /> */}
        </ChakraProvider>
    </Provider>
  )
}

export default Home
