import React, { ReactNode, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { FullSizeButton } from "../FullSizeButton";
import { ModalFrete } from "../ModalFrete";
import IconInfo from "./../../icons/icon-info.svg";

interface interfaceProps {
    qtdy: number;
    price: number;
    subtotal: string;
    status: boolean;
    changeStatus: any;
}

interface interfacePagamento {
    total: number;
    moneyQtdy: number;
    money: number;
    quantidade: number;
}

export const CartCheckout = (props: interfaceProps) => {
    const [freteModal, setFreteModal] = useState<boolean>(false);
    const [paymantModal, setPaymantModal] = useState<boolean>(false);

    function freteInfo(): void {
        setFreteModal(!freteModal);
        console.log({ freteModal });
    }

    let subtotal: number =
        /* parseFloat( */ props.price /* ) */ *
        /* parseFloat( */ props.qtdy; /* ) */
    let frete: number = subtotal * 0.1;
    let total: number = frete + subtotal;

    function paymentMoney(): any {
        let pagamento = {
            total: 645,
            moneyQtdy: [0, 0, 0, 0, 0, 0, 0],
            money: [200, 100, 50, 20, 10, 5, 2],
            quantidade: 0,
        };

        console.log(`Total: ${total}`);

        for (let i = 0; i < 7; i++) {
            while (total >= pagamento.money[i]) {
                pagamento.quantidade++;
                total = total - pagamento.money[i];

                pagamento.moneyQtdy[i] = pagamento.quantidade;
            }
            if (pagamento.moneyQtdy[i] > 0) {
                console.log(
                    `Cedulas de ${[pagamento.money[i]]}: ${
                        pagamento.quantidade
                    }`
                );
            }
            pagamento.quantidade = 0;
        }
        console.log(`Troco: ${total}`);
        /* return pagamento; */
    }

    function itemTxtPlural(): string {
        let itemTxt: string = "";
        if (props.qtdy > 1) return (itemTxt = "itens");
        return (itemTxt = "item");
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
        return "R$ 0,00";
    }

    return (
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
                                        <p>{formatBRL(subtotal)}</p>
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
                                                    backgroundColor: "#F5F5F5",
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
                                        </p>
                                    </div>
                                    <div
                                        className="col-6"
                                        style={{ textAlign: "end" }}
                                    >
                                        <p>{formatBRL(frete)}</p>
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
                                        <p>{formatBRL(total)}</p>
                                    </div>
                                </div>
                            </Container>
                        </Container>
                    </div>
                    <div>
                        <FullSizeButton
                            title="PAGAR"
                            to=""
                            status={props.status}
                            changeStatus={props.changeStatus}
                        />
                        <p>{/* {pagamento.total} */}</p>
                    </div>
                </div>
            </Row>
        </Container>
    );
};
