import type { NextPage } from 'next'
import { ChakraProvider, Button, useDisclosure } from '@chakra-ui/react'
import Header from '../components/header'
import Products from '../components/products'
import Cart from '../components/cart'
import Footer from '../components/footer'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <ChakraProvider>
        <Header />
        <Button onClick={onToggle}>Open Drawer</Button>
        <Products />
        <Cart isOpen={isOpen} onClose={onClose}></Cart>
        <Footer />
    </ChakraProvider>
  )
}

export default Home
