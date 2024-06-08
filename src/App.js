import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/allproductpages';
import ProductPage from './pages/productpages';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={AllProductsPage} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
        </Router>
    );
};

export default App;
