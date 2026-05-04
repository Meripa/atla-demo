import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import './index.css'

{/* Lehed */}
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import TermsPage from './pages/TermsPage'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="/products" element={<ProductsPage />} />
      <Route path='/products/:id' element={<ProductDetailPage />} />
      <Route path='/aboutus' element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/services' element={<TermsPage />} />
    </Route>
    
    )
)

const App = () => {
  return <RouterProvider router={router} />;
};

export default App