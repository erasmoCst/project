import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Container } from "react-bootstrap";
import { ProductForm } from "../../components/ProductForm";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
import { ProductButton } from "../../components/ProductButton";
/* import { Footer } from "../../components/Footer"; */

export const AddProduct = () => {
    return (
        <>
            <Header />
            <Container>
                <PathBreadcrum path="Adicionar Produto" />
                <ProductForm title="Adicionar Produto" />
                <Link to="/">
                    <ProductButton
                        title="ADICIONAR PRODUTO"
                        to="/"
                        icon=""
                    />
                </Link>
            </Container>
            {/* <Footer /> */}
        </>
    );
};
