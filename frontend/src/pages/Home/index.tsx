import React/* , { useEffect, useState } */ from "react";
/* import axios from "axios"; */

import { Container } from "react-bootstrap";
import AddIcon from "./../../icons/icon-add.svg"

import { interfaceProducts } from "../../interfaces";

import { Header } from "../../components/Header";
import { Card } from "./../../components/Card";
import { ProductButton } from "../../components/ProductButton";
/* import { Footer } from "./../../components/Footer"; */

import cameraIM3 from "./../../images/camera-im3.png";

export const Home = () => {
/*     const [products, setProducts] = useState<Array<interfaceProducts>>([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []); */

    return (
        <>
            <Header />
            <Container>
                <div className="row">
                    <div className="col-8">
                        <h2 style={{ fontWeight: "bold", marginTop: "50px" }}>
                            Produtos
                        </h2>
                    </div>
                    <div
                        className="col-4"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "50px",
                        }}
                    >
                        <ProductButton
                            title="Adicionar Produto"
                            to="/add-produto"
                            icon={AddIcon}
                        ></ProductButton>
                    </div>
                </div>

                <Card
                    id={2}
                    title="Câmera DS-2CD 2583G2-I"
                    brand="Hikvision"
                    price={645.00}
                    color="Branco"
                    imagemp={cameraIM3}
                ></Card>
            </Container>
            {/* <Footer /> */}
        </>
    );
};
