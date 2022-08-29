import Product from './product'
import Container from './container'
import { IProduct } from '../typings'

const Products = () => {
  const products:IProduct[] = []
  return (
    <Container>
      {products?.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </Container>
  )
}

export default Products