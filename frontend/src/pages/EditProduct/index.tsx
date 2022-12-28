import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Header } from "../../components/Header";
import { ProductButton } from "../../components/ProductButton";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
import { ProductForm } from "../../components/ProductForm";
/* import { Footer } from "../../components/Footer"; */

export const EditProduct = () => {
    return (
        <>
            <Header />
            <Container>
                <PathBreadcrum path="Editar Produto" />
                <ProductForm title="Editar Produto" />
                <Link to="/">
                    <ProductButton title="EDITAR PRODUTO" to="/" icon="" />
                </Link>
            </Container>
            {/* <Footer /> */}
        </>
    );
};
