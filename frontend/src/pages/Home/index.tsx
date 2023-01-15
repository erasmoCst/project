import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavigateFunction, useParams, useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";
import AddIcon from "./../../icons/icon-add.svg";

import { interfaceProducts } from "../../interfaces";

import "./style.css";
import { Header } from "../../components/Header";
import { Card } from "./../../components/Card";
import { ProductButton } from "../../components/ProductButton";
import { Footer } from "./../../components/Footer";

interface interfaceProductsID extends interfaceProducts {
    id: number;
}

export const Home = () => {
    const [products, setProducts] = useState<Array<interfaceProductsID>>([]);
    const [modal, setModal] = useState<boolean>(false);
    const [deleteID, setDeleteID] = useState<number>(0);
    const [deleteTitle, setDeleteTitle] = useState<string>("");
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("tokens")) {
            const isValidated = localStorage.getItem("tokens");
            if (isValidated) {
                axios
                    .get("http://localhost:3001/products")
                    .then((response) => {
                        setProducts(response.data);
                    })
                    .catch((erro) => {
                        console.log(erro);
                    });
            } else {
                navigate("/login");
            }
        } else {
            navigate("/login");
        }
    }, []);

    const handleClick = (id: number, title: string) => {
        setModal(true);
        setDeleteID(id);
        setDeleteTitle(title);
    };

    const handleCancel = () => {
        setModal(false);
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete("http://localhost:3001/products/" + id);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <Container>
                <br />
                <div className="row">
                    <div className="col-md-2">
                        <h2 className="home-title">Produtos</h2>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-4 home-center">
                        <ProductButton
                            type="button"
                            title="Adicionar Produto"
                            to="/adicionar-produto"
                            icon={AddIcon}
                        ></ProductButton>
                    </div>
                </div>
                {products.map((product) => (
                    <Card
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        brand={product.brand}
                        price={product.price}
                        color={product.color}
                        images={product.images}
                        modal={modal}
                        deleteID={deleteID}
                        deleteTitle={deleteTitle}
                        handleDelete={handleDelete}
                        handleClick={handleClick}
                        handleCancel={handleCancel}
                    ></Card>
                ))}
            </Container>
            <Footer />
        </>
    );
};
