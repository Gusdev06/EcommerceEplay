import { Route, Routes } from 'react-router-dom'
import { Categories } from './pages/Categories'
import { Home } from './pages/Home'
import { Product } from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Categories" element={<Categories />}></Route>
    <Route path="/products/:id" element={<Product />}></Route>
  </Routes>
)

export default Rotas
