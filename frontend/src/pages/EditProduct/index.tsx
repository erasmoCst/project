import React, { useEffect, useState } from "react";
import axios from "axios";

import { interfaceProducts } from "../../interfaces";

import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Header } from "../../components/Header";
import { ProductButton } from "../../components/ProductButton";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
import { ProductForm } from "../../components/ProductForm";
/* import { Footer } from "../../components/Footer"; */

export const EditProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<interfaceProducts>({
        id: 0,
        title: "",
        brand: "",
        price: 0,
        color: "",
        imagemp: "",
    });

    useEffect(() => {
        axios
            .get("http://localhost:3001/products?id=" + id)
            .then((response) => {
                //console.log(response.data);
                setProduct(response.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <>
            <Header />
            <Container>
                <PathBreadcrum path="Editar Produto" />
                <ProductForm
                    formTitle="Editar Produto"
                    id={product.id}
                    title={product.title}
                    brand={product.brand}
                    price={product.price}
                    color={product.color}
                    imagemp={
                        "https://raw.githubusercontent.com/erasmocst/ViptechProjectImages/main/" +
                        product.imagemp
                    }
                    
                />
                  <Link to="/">
                    <ProductButton type={undefined} title="EDITAR PRODUTO" to="/" icon="" />
                </Link>
            </Container>
            {/* <Footer /> */}
        </>
    );
};
