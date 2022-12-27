import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import AddIcon from "./../../icons/icon-add.svg"

import axios from "axios";

import { Header } from "../../components/Header";
import { Card } from "./../../components/Card";
import { IconButton } from "./../../components/IconButton";
import { ProductButton } from "../../components/ProductButton";
import { Footer } from "./../../components/Footer";

import cameraIM3 from "./../../images/camera-im3.png";

interface interfaceProducts {
    id: string;
    id_categoria: number;
    nome: string;
    valor: string;
    promo: string;
    imagemg: string;
    imagemp: string;
}

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
                        <IconButton
                            title="Adicionar Produto"
                            to="/add-produto"
                            icon={AddIcon}
                        ></IconButton>
                    </div>
                </div>

                <Card
                    id="2"
                    title="Câmera DS-2CD 2583G2-I"
                    brand="Hikvision"
                    price="645,00"
                    color="Branco"
                    imagemp={cameraIM3}
                ></Card>
            </Container>
            {/* <Footer /> */}
        </>
    );
};
