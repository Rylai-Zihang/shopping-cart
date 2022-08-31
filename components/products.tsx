import { useSelector } from 'react-redux'
import { RootState } from '@/store/index'
import { IProduct } from '@/typings/index'
import Product from '@/components/product'
import Container from '@/components/layout/container'

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