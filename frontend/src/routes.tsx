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

  return (
    <BrowserRouter>
      <AuthContext.Provider value={false}>
        <Routes>
          <Route
            path="/login"
            element={/* !loggedIn() ? <Navigate replace to={"/"} /> : */ <Login />}
          />
          <Route
            path="/criar-conta"
            element={/* !loggedIn() ? <Navigate replace to={"/"} /> : */ <SignUp />}
          />

          <Route path="/" element={<Home />}/>
          
          <Route
            path="/adicionar-produto"
            element={<AddProduct />
              /* loggedIn() ? <AddProduct /> : <Navigate replace to={"/login"} /> */
            }
          />
          <Route
            path="/editar-produto/:id"
            element={<EditProduct />
              /* loggedIn() ? <EditProduct /> : <Navigate replace to={"/login"} /> */
            }
          />
          <Route
            path="/carrinho/:id"
            element={<Cart />/* loggedIn() ? <Cart /> : <Navigate replace to={"/login"} /> */}
          />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};
