import type { NextPage } from 'next'
import { Provider } from 'react-redux'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import store from '@/store/index'
import Header from '@/components/layout/header'
import Products from '@/components/products'
import Cart from '@/components/cart'
import Footer from '@/components/layout/footer'


const Home: NextPage = () => {
  const { isOpen, onClose, onToggle } = useDisclosure()
  return (

    <Provider store={store}>
      <ChakraProvider>
        <Header onToggle={onToggle}/>
        <Products onToggle={onToggle}/>
        <Cart isOpen={isOpen} onClose={onClose}></Cart>
        <Footer />
      </ChakraProvider>
    </Provider>
  )
}

export default Home
