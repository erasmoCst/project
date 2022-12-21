import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Footer } from "./../../components/Footer";
import { Card } from "./../../components/Card";
import axios from "axios";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";


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
                <h2 style={{ fontWeight: "bold", marginTop: "50px" }}>
                    Produtos
                </h2>
                <Link className="navbar-brand" to="/add-product">
                    <button>Adicionar Produtos</button>
                </Link>
            </Container>
            {/*<Footer />*/}
        </>
    );
};
