import Product from './product'
import Container from './container'
import { ICartProduct, IProduct } from '../typings'
import { RootState } from '../store'
import useSelector from '../hooks/useSelector'


const Products = () => {
  const products:IProduct[] = useSelector(state => state.cart.cart)
  return (
    <Container className="py-10">
      {products?.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </Container>
  )
}

export default Products