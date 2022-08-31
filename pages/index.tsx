import type { NextPage } from 'next'
import { Provider } from 'react-redux'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import Header from '../components/header'
import Products from '../components/products'
import Cart from '../components/cart'
import Footer from '../components/footer'
import store from '../store'


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
