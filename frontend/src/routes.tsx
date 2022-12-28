import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import cameraIM3 from "./../src/images/camera-im3.png"

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
                <Route
                    path="cart"
                    element={
                        <Cart
                            id={2}
                            title="Câmera DS-2CD 2583G2-I"
                            brand="Hikvision"
                            price={645.0}
                            color="Branco"
                            imagemp={cameraIM3}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
