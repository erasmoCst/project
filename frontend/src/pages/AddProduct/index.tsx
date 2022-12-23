import React from "react";
import { Header } from "../../components/Header";
import { Container } from "react-bootstrap";
import { ProductForm } from "../../components/ProductForm";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { ProductButton } from "../../components/Button";
import { PathBreadcrum } from "../../components/PathBreadcrumb";

export const AddProduct = () => {
    return (
        <>
            <Header />
            <Container>
            <PathBreadcrum path="Adicionar Produto" />
                <ProductForm title="Adicionar Produto" />
                <Link to="/">
                    <ProductButton title="ADICIONAR PRODUTO" to="/" />
                </Link>
            </Container>
            <Footer />
        </>
    );
};
