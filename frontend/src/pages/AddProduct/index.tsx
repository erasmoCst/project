import React, { useEffect } from "react";
import axios from "axios";

import { Container } from "react-bootstrap";

import {
    NavigateFunction,
    useNavigate,
    useParams,
} from "react-router-dom";

import { interfaceProducts } from "../../interfaces";

import { Header } from "../../components/Header";
import { ProductForm } from "../../components/ProductForm";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
/* import { Footer } from "../../components/Footer"; */

let product: interfaceProducts = {
    id: 0,
    title:"",
    brand:"",
    price:0,
    color:"",
    imagemp:""
};

export const AddProduct = () => {
    //const { id } = useParams();
    const navigate: NavigateFunction = useNavigate();

    /*  useEffect(() => {
        const productID = Number(id);
        if(Number.isInteger(productID)){

        }
    }, [id]); */

    function formSubmit(e: any): void {
        e.preventDefault();

        product = e.target.value;

        console.log({product});
        axios
            .post("http://localhost:3001/products", { product })
            .then((res) => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <Header />
            <Container>
                <PathBreadcrum path="Adicionar Produto" />
                {/* <form onSubmit={formSubmit}> */}
                    <ProductForm formSubmit={formSubmit} formTitle="Adicionar Produto" />
                {/* </form> */}
            </Container>
            {/* <Footer /> */}
        </>
    );
};
