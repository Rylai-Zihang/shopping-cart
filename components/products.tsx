import Product from './product'
import Container from './container'
import { ICartProduct, IProduct } from '../typings'
import { RootState } from '../store'
import useSelector from '../hooks/useSelector'

interface Props { onToggle: () => void }

const Products: React.FC<Props> = ({ onToggle }) => {
  const products: IProduct[] = useSelector<RootState, IProduct[]>((state) => state.product.product)
  return (
    <Container className="py-10">
      {products?.map((p, index) => (
        <Product product={p} key={p.id} index={index} onToggle={onToggle}/>
      ))}
    </Container>
  )
}

export default Products