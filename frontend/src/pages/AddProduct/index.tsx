import React, { useEffect, useState } from "react";
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

/* let product: interfaceProducts = {
    id: 0,
    title:"aaa",
    brand:"",
    price:0,
    color:"",
    images:""
}; */

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

        
        let title: string  = e.target.name[0].value;
        let brand: string  = e.target.name[1].value;
        let price: number  = e.target.name[2].value;
        let color: string  = e.target.name[3].value;
        let date:  Date    = e.target.name[4].value;
        let images: string = e.target.name[5].value;

         axios
            .post("http://localhost:3001/products", {title, brand, price, color, images})
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
                    <ProductForm formSubmit={formSubmit} formTitle="Adicionar Produto"/>
                {/* </form> */}
            </Container>
            {/* <Footer /> */}
        </>
    );
};
