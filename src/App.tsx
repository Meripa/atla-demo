import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import './index.css'

{/* Lehed */}
import ProductsPage from './pages/ProductsPage';
import TehasetuurPage from './pages/TehasetuurPage'
import ProductDetailPage from './pages/ProductDetailPage';
import TermsPage from './pages/TermsPage'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="/tooted" element={<ProductsPage />} />
      <Route path="/tehasetuur" element={<TehasetuurPage />} />
      <Route path='/tooted/:id' element={<ProductDetailPage />} />
      <Route path='/meist' element={<AboutPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path='/tingimused' element={<TermsPage />} />
    </Route>
    )
)

const App = () => {
  return <RouterProvider router={router} />;
};

export default App