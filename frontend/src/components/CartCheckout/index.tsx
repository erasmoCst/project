import React, { useState } from "react";

import { interfacePayment } from "../../interfaces";

import { formatBRL } from "../../functions";

import { Container, Row } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { FullSizeButton } from "../FullSizeButton";

/* import { ModalFrete } from "../ModalFrete"; */
import IconInfo from "./../../icons/icon-info.svg";
import { ModalFrete } from "../ModalFrete";

interface interfaceProps {
    qtdy: number;
    price: number;
    totalValue: number;
    status: boolean;
    changeStatus: () => void;
    subtotal: (price: number, qtdy: number) => number;
    freight: (price: number, qtdy: number) => number;
    changeStatePagamento: (pgto: interfacePayment) => void;
    paymentCalc: () => void;
    //pgto: interfacePayment;
}

export const CartCheckout = (props: interfaceProps) => {
    const [freteModal, setFreteModal] = useState<boolean>(false);

    function freteInfo(): void {
        setFreteModal(!freteModal);
        console.log({ freteModal });
    }

    function itemTxtPlural(): string {
        if (props.qtdy > 1) return "itens";
        return "item";
    }

    return (
        <>
            <Container>
                <Row>
                    <div
                        style={{
                            backgroundColor: "#F5F5F5",
                            borderRadius: "7px",
                            color: "#353535",
                            fontWeight: "bold",
                        }}
                    >
                        <div className="row">
                            <Container style={{ marginTop: "1rem" }}>
                                <Container>
                                    <div
                                        className="row"
                                        style={{
                                            borderBottom: "1px solid #B2B2B2",
                                        }}
                                    >
                                        <div className="col-6">
                                            <p>
                                                Subtotal ({props.qtdy}{" "}
                                                {itemTxtPlural()}):
                                            </p>
                                        </div>
                                        <div
                                            className="col-6"
                                            style={{ textAlign: "end" }}
                                        >
                                            <p>
                                                {formatBRL(
                                                    props.subtotal(
                                                        props.price,
                                                        props.qtdy
                                                    )
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </Container>
                            </Container>
                            <Container style={{ marginTop: "1rem" }}>
                                <Container>
                                    <div
                                        className="row"
                                        style={{
                                            borderBottom: "1px solid #B2B2B2",
                                            display: "flex",
                                            alignItems: "center",
                                            verticalAlign: "middle",
                                        }}
                                    >
                                        <div className="col-6">
                                            <p>
                                                {" "}
                                                Frete{" "}
                                                <button
                                                    style={{
                                                        border: "none",
                                                        backgroundColor:
                                                            "#F5F5F5",
                                                    }}
                                                    onClick={() => {
                                                        freteInfo();
                                                    }}
                                                >
                                                    <IconContext.Provider
                                                        value={{}}
                                                    >
                                                        <img
                                                            src={IconInfo}
                                                            alt="icon-info"
                                                        />
                                                    </IconContext.Provider>
                                                </button>
                                                <ModalFrete
                                                    status={freteModal}
                                                ></ModalFrete>
                                            </p>
                                        </div>
                                        <div
                                            className="col-6"
                                            style={{ textAlign: "end" }}
                                        >
                                            <p>
                                                {formatBRL(
                                                    props.freight(
                                                        props.price,
                                                        props.qtdy
                                                    )
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </Container>
                            </Container>
                            <Container style={{ marginTop: "1rem" }}>
                                <Container>
                                    <div
                                        className="row"
                                        style={{ paddingBottom: "0px" }}
                                    >
                                        <div className="col-6">
                                            <p> Valor Total </p>
                                        </div>
                                        <div
                                            className="col-6"
                                            style={{ textAlign: "end" }}
                                        >
                                            <p>{formatBRL(props.totalValue)}</p>
                                        </div>
                                    </div>
                                </Container>
                            </Container>
                            <Container /* style={{ marginTop: "1rem" }} */>
                                <Container>
                                    <FullSizeButton
                                        title="PAGAR"
                                        to=""
                                        totalValue={props.totalValue}
                                        status={props.status}
                                        changeStatus={props.changeStatus}
                                        changeStatePagamento={
                                            props.changeStatePagamento
                                        }
                                        paymentCalc={props.paymentCalc}
                                    />
                                </Container>
                            </Container>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};
