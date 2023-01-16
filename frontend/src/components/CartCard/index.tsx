import react from "react";

import { interfaceProducts } from "../../interfaces";
import { formatBRL } from "../../functions";

import IconMinus from "./../../icons/icon-minus.svg";
import IconPlus from "./../../icons/icon-plus.svg";

import "./style.css";

interface interfaceCart extends interfaceProducts {
    id: number;
    qtdy: number;

    increaseQtdy: () => void;
    decreaseQtdy: () => void;
}

export const CartCard = (props: interfaceCart) => {
    return (
        <>
            <div className="container cart-card-full-row">
                <div className="row" style={{ height: "50%" }}>
                    <div className="col-2 center">
                        <img className="w-50" src={props.images} />
                    </div>
                    <div className="col-6 center-vertical">
                        <div>
                            <span>
                                <strong>{props.title}</strong>
                            </span>
                            <p className="card-txt">{props.brand}</p>
                            <p className="card-txt">Cor: {props.color}</p>
                        </div>
                    </div>
                </div>

                <div className="row cart-card-row">
                    <div className="container center-vertical">
                        <div className="col-1.5">
                            <span>
                                <strong>Quantidade:</strong>
                            </span>
                        </div>

                        <div className="col-1 right-horizontal  ">
                            <button
                                className="cart-card-button"
                                onClick={props.decreaseQtdy}
                            >
                                <img src={IconMinus} alt="minus-button" />
                            </button>
                        </div>

                        <div className="col-1 center-horizontal">
                            <div className="card-cart-box">
                                <p style={{ marginTop: "5px" }}>{props.qtdy}</p>
                            </div>
                        </div>

                        <div className="col-1">
                            <button
                                className="clean"
                                onClick={props.increaseQtdy}
                            >
                                <img src={IconPlus} alt="plus-button" />
                            </button>
                        </div>

                        <div className="col-7">
                            <div>
                                <p className="cart-card-price">
                                    {formatBRL(props.price * props.qtdy)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
