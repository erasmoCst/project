import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FiTrash2 } from "react-icons/fi";

import { Footer } from "./../../components/Footer";
import { Header } from "./../../components/Header";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
import { Card } from "../../components/Card";
import cameraIM3 from "./../../images/camera-im3.png";
import { CartCard } from "../../components/CartCard";

interface interfaceProducts {
    id: string;
    id_categoria: number;
    nome: string;
    valor: string;
    promo: string;
    promoNum: string;
    qtd: string;
    total: number;
    imagemg: string;
    imagemp: string;
}

export const Cart = () => {
    const [dataCart, setDataCart] = useState<Array<interfaceProducts>>([]);
    const [totalValue, setTotalValue] = useState<number>(0);

    const [qtdy, setQtdy] = useState(0);

    function adicionar() {
        setQtdy(qtdy + 1);
    }

    function diminuir() {
        if (qtdy != 0) setQtdy(qtdy - 1);
    }

    function updateTotalValue(cart: Array<interfaceProducts>) {
        let total = 0;
        cart.forEach((product) => {
            total = product.total + total;
        });
        setTotalValue(total);
    }

    function formatBRL(value?: number | string | null) {
        if (value) {
            let valueUnformatted = parseFloat(value.toString());
            return (
                "R$ " +
                valueUnformatted.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                })
            );
        }
        return "R$0,00";
    }

    useEffect(() => {
        let lsCart = localStorage.getItem("@u2:cart");
        let cart: any = null;

        if (typeof lsCart === "string") {
            cart = JSON.parse(lsCart);
        }

        if (cart) {
            setDataCart(cart);
            updateTotalValue(cart);
        }
    }, []);

    function removeProductCart(id: string) {
        let cart = dataCart.filter((product) => product.id !== id);

        localStorage.setItem("@u2:cart", JSON.stringify(cart));
        setDataCart(cart);
        updateTotalValue(cart);
    }

    return (
        <>
            <Header />
            <Container style={{ marginTop: 20, marginBottom: 40 }}>
                <PathBreadcrum path="Carrinho" />
                <div className="row">
                    <div className="col-8">
                        <h3
                            style={{
                                fontWeight: "bold",
                                color: "#353535",
                                margin: "12px",
                                padding: "10px 0 20px",
                            }}
                        >
                            Carrinho
                        </h3>
                    </div>
                    <div className="col-4">
                        <h3
                            style={{
                                fontWeight: "bold",
                                color: "#353535",
                                margin: "12px",
                                padding: "10px 0 20px",
                            }}
                        >
                            Resumo do Pedido
                        </h3>
                    </div>
                </div>

                <div className="row">
                    <div
                        className="col-8"
                        style={{
                            boxSizing: "border-box",
                            border: "1px solid #B2B2B2",
                            borderRadius: "7px",
                        }}
                    >
                        <CartCard
                            adicionar={adicionar}
                            diminuir={diminuir}
                            qtdy={qtdy}
                            id="2"
                            title="Câmera DS-2CD 2583G2-I"
                            brand="Hikvision"
                            price="645,00"
                            color="Branco"
                            imagemp={cameraIM3}
                        ></CartCard>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
};
