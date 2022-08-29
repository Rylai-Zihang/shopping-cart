import { IProduct } from '../typings'

interface Props {
  product: IProduct
}

const Product: React.FC<Props> = ({ product }) => {
  return <div className="container mx-auto px-5">单个商品</div>
}

export default Product
