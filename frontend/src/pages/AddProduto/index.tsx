import React from "react"
import { Header } from "../../components/Header"
import { Container } from "react-bootstrap";
import { ProductForm } from "../../components/ProductForm";

export const AddProduto = () => {
    return(
    <>
        <Header/>
        <Container>
            <ProductForm/>
        </Container>
    </>     
    );
};