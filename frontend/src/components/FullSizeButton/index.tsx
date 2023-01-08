import React, { useState } from "react";

import { interfacePayment } from "../../interfaces";

import { ToggleButton } from "react-bootstrap";

interface interfaceButton {
    title: string;
    to: string;
    totalValue: number;
    status: boolean;
    changeStatus: () => void;
    changeStatePagamento: (pgto: interfacePayment) => void;
    paymentCalc: () => void;
    /* onClick: () => void; */
}

export const FullSizeButton = (props: interfaceButton) => {
    /* const [status, setStatus] = useState(false); */

    let pagamento = {
        total: props.totalValue,
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

    function buttonChange(): void {
        props.changeStatus();
        paymentCalc();
        //props.paymentCalc();
        props.changeStatePagamento(pagamento);
    }

    return (
        <>
            {/* <Link to={props.to}> */}
            {/* <ToggleButtonGroup type="checkbox"> */}
            <ToggleButton
                id="toggle-check"
                type="checkbox"
                value="1"
                variant="outline-primary"
                size="lg"
                style={{
                    fontWeight: "bold",
                    width: "100%",
                    margin: "20px 0px 20px 0px",
                    color: "#FFFFFF", 
                    border: "none",
                    backgroundColor: props.status? "#D9D9D9" :  "#0F4C81",
                }}
                onChange={buttonChange}
                /* onClick={props.onClick} */
                /* onChange={props.changeStatus} */
                checked={!props.status}
            >
                {props.title}
            </ToggleButton>{" "}
            {/* </ToggleButtonGroup> */}
            {/* </Link> */}
        </>
    );
};
