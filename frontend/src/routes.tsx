import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContext } from "./context/auth";
import { useAuth } from "./context/auth";

import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { AddProduct } from "./pages/AddProduct";
import { EditProduct } from "./pages/EditProduct";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export const Rotas = () => {
    const isAuthenticated = useAuth();

    return (
        <BrowserRouter>
            <AuthContext.Provider value={false}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/criar-conta" element={<SignUp />} />

                    <Route path="/" element={<Home />} />
                    <Route path="/adicionar-produto" element={<AddProduct />} />
                    <Route
                        path="/editar-produto/:id"
                        element={<EditProduct />}
                    />
                    <Route path="/carrinho/:id" element={<Cart />} />
                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    );
};
