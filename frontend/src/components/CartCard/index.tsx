import react from "react";

import { interfaceProducts } from "../../interfaces";
import { formatBRL } from "../../functions";

import { Container, Row } from "react-bootstrap";
import IconMinus from "./../../icons/icon-minus.svg";
import IconPlus from "./../../icons/icon-plus.svg";

interface interfaceCart extends interfaceProducts {
    qtdy: number;
    increaseQtdy: () => void;
    decreaseQtdy: () => void;
}

export const CartCard = (props: interfaceCart) => {
    return (
        <>
            <Container
                fluid
                style={{
                    height: "100%",
                    /*                     display: "flex",
                    alignItems: "center", */
                }}
            >
                <Row style={{ height: "50%" }}>
                    <div
                        className="col-md-2"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img className="w-75" src={props.images} />
                    </div>
                    <div
                        className="col-md-6"
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <p style={{ margin: "0", fontWeight: "bold" }}>
                                {props.title}
                            </p>
                            <p
                                style={{
                                    margin: "0",
                                    fontSize: "90%",
                                    fontWeight: "normal",
                                }}
                            >
                                {props.brand}
                            </p>
                            <p
                                style={{
                                    margin: "0",
                                    fontSize: "90%",
                                    fontWeight: "normal",
                                }}
                            >
                                Cor: {props.color}
                            </p>
                        </div>
                    </div>
                </Row>

                <Row style={{ height: "50%", borderTop: "1px solid #B2B2B2" }}>
                    <Container
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div className="col-12">
                            <div
                                style={{
                                    marginTop: "15px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <p
                                    style={{
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        margin: "0px",
                                    }}
                                >
                                    Quantidade:{" "}
                                </p>

                                <button
                                    onClick={props.decreaseQtdy}
                                    style={{
                                        border: "none",
                                        backgroundColor: "#FFFFFF",
                                    }}
                                >
                                    <img src={IconMinus} alt="minus-button" />
                                </button>
                                <div
                                    style={{
                                        textAlign: "center",
                                        width: "35px",
                                        height: "35px",
                                        boxSizing: "border-box",
                                        border: "1px solid #353535",
                                        borderRadius: "7px",
                                    }}
                                >
                                    <p style={{ marginTop: "5px" }}>
                                        {props.qtdy}
                                    </p>
                                </div>

                                <button
                                    onClick={props.increaseQtdy}
                                    style={{
                                        border: "none",
                                        backgroundColor: "#FFFFFF",
                                    }}
                                >
                                    <img src={IconPlus} alt="plus-button" />
                                </button>
                                <div className="col-8">
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            textAlign: "center",
                                            margin: "0px",
                                        }}
                                    >
                                        {formatBRL(props.price * props.qtdy)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Row>
            </Container>
        </>
    );
};
