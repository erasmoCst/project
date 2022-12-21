import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { AddProduto } from "./pages/AddProduto";

export const Rotas = () => {/*Cria "Rotas" e exporta*/
    return(
        <BrowserRouter>{/*ambiente*/}
            <Routes>{/*Rotas*/}
                <Route path="/" element={<Home/>}/>{/*Qual a rota --> '/' é a rota raiz(pagina principal)*/}
                <Route path="add-product" element={<AddProduto/>}/>
                <Route path="cart" element={<Cart/>}/>{/* Rota "Cart"*/}
            </Routes>
        </BrowserRouter>

    )

} 