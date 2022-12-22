import React from "react";
import { Header } from "../../components/Header";
import { Container } from "react-bootstrap";
import { ProductForm } from "../../components/ProductForm";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { ProductButton } from "../../components/Button";

export const EditProduct = () => {
    return (
        <>
            <Header />
            <Container>
                <ProductForm title="Editar Produto" />
                <Link to="/">
                    <ProductButton title="EDITAR PRODUTO" to="/" />
                </Link>
            </Container>
            <Footer />
        </>
    );
};
