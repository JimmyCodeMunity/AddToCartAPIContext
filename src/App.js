import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import CartPage from './components/CartPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment/checkout" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;
