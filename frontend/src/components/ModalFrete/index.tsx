import React from "react";

interface interfaceProps {
    status: boolean;
}

export const ModalFrete = (props: interfaceProps) => {
    return (
        <>
            <div
                style={{
                    borderRadius: "3px",
                    transform: "rotate(0.01deg)",
                    visibility: props.status ? "visible" : "hidden",
                    width: "100%",
                }}
            >
                <p
                    style={{
                      left:"-65px",
                        backgroundColor: "#FFFFFF",
                        width: "250px",
                        height: "25px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        borderRadius: "7px",
                        zIndex: "1",
                        color: "#181B2A",
                        fontSize: "12px",
                        filter: "drop-shadow(0px 4px 4px rgb(0,0,0,0.25))",
                    }}
                >
                    {" "}
                    Valor do frete: 10% do valor do produto{" "}
                </p>
            </div>
        </>
    );
};
