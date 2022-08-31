import { useColorModeValue } from '@chakra-ui/react'
import Container from '@/components/layout/container'

const Footer = () => {
  const footerClass = useColorModeValue('light', 'dark')
  return (
    <footer className={footerClass}>
      <Container>
        <div className="py-8 flex items-center">
          <div className="text-xs text-center">
            Statically Generated with Next.js.
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
