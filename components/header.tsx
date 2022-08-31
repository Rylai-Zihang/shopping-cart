import { MoonIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { Switch, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import Container from './container'

const Header = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <div className="border-b-1 ">
      <Container className="py-5 flex justify-between">
        <div className="flex ite ms-center">
          <TriangleUpIcon h={6} className="mr-2" />
          <Link href="/">
            <h1 className="text-2xl"> ReplicaZone</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <Switch colorScheme="facebook" size="lg" onChange={toggleColorMode} />
          <MoonIcon className="ml-2" />
        </div>
      </Container>
    </div>
  )
}

export default Header
