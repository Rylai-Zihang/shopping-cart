import { useSelector } from 'react-redux'
import Product from './product'
import Container from './container'
import { RootState } from '@/store'
import { IProduct } from '@/typings'

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