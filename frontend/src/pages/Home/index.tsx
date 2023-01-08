import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "react-bootstrap";
import AddIcon from "./../../icons/icon-add.svg";

import { interfaceProducts } from "../../interfaces";

import { Header } from "../../components/Header";
import { Card } from "./../../components/Card";
import { ProductButton } from "../../components/ProductButton";
/* import { Footer } from "./../../components/Footer"; */

export const Home = () => {
    const [products, setProducts] = useState<Array<interfaceProducts>>([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);

    const handleDelete = async (id: number) => {
        try{
            console.log(id);
            
            await axios
            .delete("http://localhost:3001/products/" + id)
                console.log("deleted");
        }catch(error) {
                console.log(error);
            }
        }

    return (
        <>
            <Header />
            <Container>
                <div className="row" style={{ marginTop: "3em" }}>
                    <div
                        className="col-md-2"
                        //style={{ display: "flex", alignItems: "center" }}
                    >
                        <h2
                            style={{
                                marginLeft: "1em",
                                textAlign: "right",
                                fontWeight: "bold",
                            }}
                        >
                            Produtos
                        </h2>
                    </div>
                    <div className="col-md-6"></div>
                    <div
                        className="col-4"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ProductButton
                            type="button"
                            title="Adicionar Produto"
                            to="/add-produto"
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
                        handleDelete={handleDelete}
                    ></Card>
                ))}
            </Container>
            {/* <Footer /> */}
        </>
    );
};
