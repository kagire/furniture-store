import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from './components/homepage';
import Product from './components/product';
import Products from './components/products';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:productId" element={<Product />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);