import React from "react";

export const ModalFrete = (props: any) => {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "3px",
                    transform: "rotate(0.01deg)",
                    visibility: props.show ? "visible" : "hidden",
                }}
            >
                <p style={{ color: "#181B2A" }}> Valor do frete: 10% do valor do produto </p>
            </div>
        </>
    );
};
