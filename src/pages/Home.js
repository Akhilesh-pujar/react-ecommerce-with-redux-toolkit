

import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product-list/ProductList'
import CartPage from './CartPage'

function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  )
}

export default Home
