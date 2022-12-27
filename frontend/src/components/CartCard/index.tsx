import react from "react";
import { Container, Row } from "react-bootstrap";
import IconMinus from "./../../icons/icon-minus.svg";
import IconPlus from "./../../icons/icon-plus.svg";
import "./style.css";

interface interfaceCart {
    id: string;
    title: string;
    brand: string;
    price: string;
    color: string;
    imagemp: string;
    qtdy: any;
    increaseQtdy: any;
    decreaseQtdy: any;
}

export const CartCard = (props: interfaceCart) => {
    let subtotal: string = formatBRL(parseFloat(props.price) * parseFloat(props.qtdy));

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
        return "R$ 0,00";
    }

    return (
        <Container fluid>
            <Row>
                <div
                    className="col-md-2"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img className="w-50" src={props.imagemp} />
                </div>
                <div className="col-md-7">
                    <h3>{props.title}</h3>
                    <p>{props.brand}</p>
                    <p>Cor: {props.color}</p>
                </div>

                <Container>
                    <div className="row">
                        <div
                            className="col-12"
                            style={{
                                borderTop: "1px solid #B2B2B2",
                            }}
                        >
                            <div
                                style={{
                                    marginTop: "15px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <p style={{ fontWeight: "bold" }}>
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
                                            fontWeight: "700",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        {subtotal}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Row>
        </Container>
    );
};
