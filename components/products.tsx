import Product from './product'
import Container from './container'
import { ICartProduct, IProduct } from '../typings'
import { RootState } from '../store'
import useSelector from '../hooks/useSelector'


const Products = () => {
  const cart = useSelector(state => state.cart.cart)
  console.log({ cart })
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