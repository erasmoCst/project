import React from "react";

import { interfacePayment } from "../../interfaces";

import { formatBRL } from "../../functions";


interface interfaceProps {
    propStatePagamento: interfacePayment;
}

export const Payment = (props: interfaceProps) => {
    function moneyTxt(money: number, moneyQtdy: number): string {
        if (money >= 2 && moneyQtdy > 1) return "cédulas";
        else if (money >= 2 && moneyQtdy === 1) return "cédula";
        else if (money < 1 && moneyQtdy > 1) return "moedas";
        return "moeda";
    }

    return (
        <>
            <div
                style={{
                    width: "100%",
                    boxSizing: "border-box",
                    border: "1px solid #039000",
                    borderRadius: "7px",
                    color: "#039000",
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingTop: "20px",
                }}
            >
                <p style={{ paddingBottom: "8px" }}>
                    Pagamento realizado com Sucesso!
                </p>
                <div style={{ fontWeight: "normal", fontSize: "90%" }}>
                    <p>Este pagamento foi realizado com</p>
                    {props.propStatePagamento.moneyQtdy.map(
                        (moneyQtdy, index) => {
                            if (moneyQtdy > 0) {
                                return (
                                    <p
                                        key={index}
                                        style={{ fontWeight: "bold" }}
                                    >
                                        {moneyQtdy}{" "}
                                        {moneyTxt(
                                            props.propStatePagamento.money[
                                                index
                                            ],
                                            moneyQtdy
                                        )}{" "}
                                        <span style={{ fontWeight: "normal" }}>
                                            de{" "}
                                        </span>
                                        {formatBRL(
                                            props.propStatePagamento.money[
                                                index
                                            ]
                                        )}
                                    </p>
                                );
                            }
                        }
                    )}
                </div>
            </div>
        </>
    );
};
