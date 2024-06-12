import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import TransactionTable from './pages/Transaction.jsx';
import PaymentScreen from './pages/PaymentScreen.jsx';
import UploadPage from './pages/upload.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction" element={<TransactionTable />} />
          <Route path="/payments" element={<PaymentScreen />} />
          <Route path="/upload" element={<UploadPage />} />

         
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;