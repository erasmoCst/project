import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Footer } from "./../../components/Footer";
import { Card } from "./../../components/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { Header } from "../../components/Header";
import { FaRegEdit } from "react-icons/fa";
import cameraIM3 from "./../../images/camera-im3.png";
import { ProductButton } from "../../components/Button";
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
                        <ProductButton
                            title="Adicionar Produto"
                            to="/add-produto"
                        ></ProductButton>
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
            <Footer />
        </>
    );
};
