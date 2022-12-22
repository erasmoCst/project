import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FiTrash2 } from "react-icons/fi";

import { Footer } from "./../../components/Footer";
import { Header } from "./../../components/Header";

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
                <h2>Carrinho</h2>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td width={600}>Product</td>
                            <td>Qtd.</td>
                            <td>Unit Value</td>
                            <td>Total Value</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {dataCart.map((product) => (
                            <tr key={product.id}>
                                <td width={600}>{product.nome}</td>
                                <td>{product.qtd}</td>
                                <td>{"R$ " + product.promo}</td>
                                <td>{formatBRL(product.total)}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => {
                                            removeProductCart(product.id);
                                        }}
                                    >
                                        <FiTrash2 />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td width={600}>Total:</td>
                            <td></td>
                            <td></td>
                            <td>{formatBRL(totalValue)}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-danger">
                        Delete All Itens
                    </button>
                    <button type="button" className="btn btn-success">
                        Buy Now
                    </button>
                </div>
            </Container>

            <Footer />
        </>
    );
};
