import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { AuthContext } from "./context/auth";
import { useAuth } from "./context/auth";

import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { AddProduct } from "./pages/AddProduct";
import { EditProduct } from "./pages/EditProduct";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export const Rotas = () => {
    const loggedIn = () => {
        return localStorage.getItem("token") ? true : false;
    };
    const checkPermission = () => {
        return localStorage.getItem("permission");
    };

    return (
        <BrowserRouter>
            <AuthContext.Provider value={false}>
                <Routes>
                    <Route
                        path="/login"
                        element=/* {loggedIn() ? <Login /> : <Home />} */ {
                            <Login />
                        }
                    />
                    <Route
                        path="/criar-conta"
                        element={loggedIn() ? <Home /> : <SignUp />}
                    />

                    <Route
                        path="/"
                        element={
                            loggedIn() ? (
                                /* checkPermission() === "1" ? (
                                    <Home />
                                ) : ( */
                                    <Home />
                                /* ) */
                            ) : (
                                <Navigate replace to={"/login"} />
                            )
                        }
                    />
                    <Route
                        path="/adicionar-produto"
                        element={
                            loggedIn() ? (
                                <AddProduct />
                            ) : (
                                <Navigate replace to={"/login"} />
                            )
                        }
                    />
                    <Route
                        path="/editar-produto/:id"
                        element={
                            loggedIn() ? (
                                <EditProduct />
                            ) : (
                                <Navigate replace to={"/login"} />
                            )
                        }
                    />
                    <Route
                        path="/carrinho/:id"
                        element={
                            loggedIn() ? (
                                <Cart />
                            ) : (
                                <Navigate replace to={"/login"} />
                            )
                        }
                    />
                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    );
};
