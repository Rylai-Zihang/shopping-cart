import { TriangleUpIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Container from './container'

const Header = () => {
  return (
    <div className="border-b-1 ">
      <Container className="py-5">
        <div className="flex items-center">
          <TriangleUpIcon h={6} className="mr-2" />
          <Link href="/">
            <h1 className="text-2xl"> ReplicaZone</h1>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Header
