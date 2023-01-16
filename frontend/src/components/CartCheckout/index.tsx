import React, { useState } from "react";
import "./style.css";

import { interfacePayment } from "../../interfaces";

import { formatBRL } from "../../functions";

import { Row } from "react-bootstrap";
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
            <div className="container">
                <div className="row">
                    <div className="cart-checkout-box">
                        <div className="row">
                            <div className="container card-chekcout-mt">
                                <div className="container">
                                    <div className="row card-checkout-border">
                                        <div className="col-6">
                                            <p>
                                                Subtotal ({props.qtdy}{" "}
                                                {itemTxtPlural()}):
                                            </p>
                                        </div>
                                        <div className="col-6 txt-end">
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
                                </div>
                            </div>
                            <div className="container card-chekcout-mt">
                                <div className="container">
                                    <div className="row card-chekcout-freight ">
                                        <div className="col-6">
                                            <p>
                                                {" "}
                                                Frete{" "}
                                                <button
                                                    className="card-chekcout-button "
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
                                        <div className="col-6 txt-end">
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
                                </div>
                            </div>
                            <div className="container card-chekcout-mt">
                                <div className="container">
                                    <div className="row card-checkout-pbn">
                                        <div className="col-6">
                                            <p> Valor Total </p>
                                        </div>
                                        <div className="col-6 txt-end">
                                            <p>{formatBRL(props.totalValue)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="container">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
