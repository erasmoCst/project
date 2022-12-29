import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { AddProduct } from "./pages/AddProduct";
import { EditProduct } from "./pages/EditProduct";

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-produto" element={<AddProduct />} />
                <Route path="/edit-produto/:id" element={<EditProduct />} />
                <Route path="/cart/:id" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
};
