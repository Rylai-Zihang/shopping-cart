import Container from '@/components/layout/container'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
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
