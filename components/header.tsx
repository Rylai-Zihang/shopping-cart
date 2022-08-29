import { Heading } from '@chakra-ui/react'
import Link from 'next/link'

const Header = () => {
  return (
    <Link href="/">
      <Heading as="h2" size="3xl" noOfLines={1}>
        ReplicaZone
      </Heading>
    </Link>
  )
}

export default Header
