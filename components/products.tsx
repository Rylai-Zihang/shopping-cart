import Product from './product'
import Container from './container'
import { ICartProduct, IProduct } from '../typings'
import { RootState } from '../store'
import useSelector from '../hooks/useSelector'

interface Props { onToggle: () => void }

const Products: React.FC<Props> = ({ onToggle }) => {
  const products: ICartProduct[] = useSelector<RootState, ICartProduct[]>((state) => state.cart.cart)
  return (
    <Container className="py-10">
      {products?.map((p) => (
        <Product product={p} key={p.id} onToggle={onToggle}/>
      ))}
    </Container>
  )
}

export default Products