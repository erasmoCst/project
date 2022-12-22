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
                <Route path="add-produto" element={<AddProduct />} />
                <Route path="edit-produto" element={<EditProduct />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
};