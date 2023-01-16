import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

import { NavigateFunction, useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import { interfacePayment, interfaceProducts } from "../../interfaces";

import { Header } from "./../../components/Header";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
import { CartCard } from "../../components/CartCard";
import { CartCheckout } from "../../components/CartCheckout";
import { Payment } from "../../components/Payment";
import { Footer } from "./../../components/Footer";
import { getToken, permissionDenied } from "../../functions";

interface interfaceProductsID extends interfaceProducts {
    id: number;
}

export const Cart = () => {
    const { id } = useParams();
    const navigate: NavigateFunction = useNavigate();

    const [product, setProduct] = useState<interfaceProductsID>({
        id: 0,
        title: "",
        brand: "",
        price: 0,
        color: "",
        images: "",
    });

    /*---------Q U A N T I D A D E-------------*/
    const [qtdy, setQtdy] = useState(1);

    function increaseQtdy() {
        setStatus(false);
        setQtdy(qtdy + 1);
    }

    function decreaseQtdy() {
        setStatus(false);

        if (qtdy > 1) setQtdy(qtdy - 1);
    }
    /*------------------------------------------*/

    /*--------B U T T O N   S T A T U S---------*/
    const [status, setStatus] = useState(false);

    function changeStatus() {
        setStatus(!status);
    }
    /*------------------------------------------*/

    /* ------------V A L O R E S--------------- */
    function subtotal(price: number, qtdy: number): number {
        return price * qtdy;
    }
    function freight(price: number, qtdy: number): number {
        return subtotal(price, qtdy) * 0.1;
    }

    const totalValue: number =
        subtotal(product.price, qtdy) + freight(product.price, qtdy);
    /*------------------------------------------*/

    const [statePagamento, setStatePagamento] = useState<interfacePayment>({
        total: totalValue,
        moneyQtdy: [0],
        money: [0],
        quantity: 0,
    });

    function changeStatePagamento(pgto: interfacePayment): void {
        setStatePagamento(pgto);
    }

    let pagamento = {
        total: totalValue,
        moneyQtdy: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        money: [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01],
        quantity: 0,
    };

    function paymentCalc(): void {
        for (let i = 0; i < 13; i++) {
            while (pagamento.total >= pagamento.money[i]) {
                pagamento.quantity++;
                pagamento.total = pagamento.total - pagamento.money[i];
                pagamento.total = parseFloat(pagamento.total.toFixed(2));
                pagamento.moneyQtdy[i] = pagamento.quantity;
            }
            pagamento.quantity = 0;
        }
    }

    useEffect(() => {
        if (getToken()) {
            const token = getToken();
            if (token) {
                axios
                    .get("http://localhost:3001/products/" + id, {
                        headers: { Authorization: token },
                    })
                    .then((res) => {
                        setProduct(res.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        alert(error);
                    });
            } else {
                permissionDenied();
                navigate("/login");
            }
        } else {
            permissionDenied();
            navigate("/login");
        }
    }, [id]);

    return (
        <>
            <Header />
            <Container>
                <PathBreadcrum path="Carrinho" />
                <br />
                <>
                    <div className="row">
                        <div className="col-8 center-vertical">
                            <h3 className="cart-txt">Carrinho</h3>
                        </div>
                        <div className="col-4 center-vertical">
                            <h3 className="cart-txt">Resumo do Pedido</h3>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-8 cart-card-box">
                            <CartCard
                                id={product.id}
                                title={product.title}
                                brand={product.brand}
                                price={product.price}
                                color={product.color}
                                images={product.images}
                                qtdy={qtdy}
                                increaseQtdy={increaseQtdy}
                                decreaseQtdy={decreaseQtdy}
                            ></CartCard>
                        </div>
                        <div className="col-4">
                            <CartCheckout
                                price={product.price}
                                qtdy={qtdy}
                                status={status}
                                changeStatus={changeStatus}
                                subtotal={subtotal}
                                freight={freight}
                                totalValue={totalValue}
                                changeStatePagamento={changeStatePagamento}
                                paymentCalc={paymentCalc}
                            ></CartCheckout>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-8"></div>
                        <div
                            className="col-4"
                            style={{
                                visibility: status ? "visible" : "hidden",
                            }}
                        >
                            <Payment propStatePagamento={statePagamento} />
                        </div>
                    </div>
                </>
            </Container>
            <Footer />
        </>
    );
};
