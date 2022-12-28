import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { interfacePayment, interfaceProducts } from "../../interfaces";
import { formatBRL } from "../../functions";

import { Header } from "./../../components/Header";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
import { CartCard } from "../../components/CartCard";
import { CartCheckout } from "../../components/CartCheckout";
import { Payment } from "../../components/Payment";
/* import { Footer } from "./../../components/Footer"; */

import cameraIM3 from "./../../images/camera-im3.png";

export const Cart = (props: interfaceProducts) => {
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
        console.log(status);
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
        subtotal(props.price, qtdy) + freight(props.price, qtdy);
    /*------------------------------------------*/

    const [statePagamento, setStatePagamento] = useState<interfacePayment>({
        total: 0,
        moneyQtdy: [0],
        money: [0],
        quantity: 0,
    });

    function changeStatePagamento(pgto: interfacePayment): void {
        setStatePagamento(pgto);
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
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <CartCard
                            id={props.id}
                            title={props.title}
                            brand={props.brand}
                            price={props.price}
                            color={props.color}
                            imagemp={props.imagemp}
                            qtdy={qtdy}
                            increaseQtdy={increaseQtdy}
                            decreaseQtdy={decreaseQtdy}
                        ></CartCard>
                    </div>
                    <div className="col-4">
                        <CartCheckout
                            price={props.price}
                            qtdy={qtdy}
                            status={status}
                            changeStatus={changeStatus}
                            subtotal={subtotal}
                            freight={freight}
                            totalValue={totalValue}
                            changeStatePagamento={changeStatePagamento}
                        ></CartCheckout>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-8"></div>
                    <div
                        style={{ visibility: status ? "visible" : "hidden" }}
                        className="col-4"
                    >
                        <Payment propStatePagamento={statePagamento} />
                    </div>
                </div>
            </Container>
            {/* <Footer /> */}
        </>
    );
};
