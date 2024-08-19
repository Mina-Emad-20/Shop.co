import TopHeader from './components/TopHeader'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './sass/App.scss'
import SiteFooter from './components/SiteFooter'
import SiteNav from './layout/SiteNav'
import { Route, Routes } from 'react-router-dom'
import Home from './layout/Home'
import NewArrivals from './layout/NewArrivals'
import Products from './layout/Products'
import ErrorPage from './views/ErrorPage'
import ProductDetails from './components/ProductDetails'
import EditProduct from './components/EditProduct'



function App() {
  return (
    <>
      <TopHeader />
      <SiteNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new arrivals' element={<NewArrivals />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/products/edit/:id' element={<EditProduct />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes >
      <SiteFooter />
    </>
  )
}

export default App
