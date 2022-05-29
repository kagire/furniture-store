import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from './components/homepage';
import Product from './components/product';
import Products from './components/products';
import Footer from './components/footer';
import About from './components/about';
import Contacts from './components/contacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);