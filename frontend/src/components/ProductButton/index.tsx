import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface interfaceButton {
    title: string;
    to: string;
    type: "button" | "submit" | "reset" | undefined;
    icon: string | null;
    width?: string;
}

export const ProductButton = (props: interfaceButton) => {
    return (
        <>
            <Link to={props.to}>
                <Button
                    type={props.type}
                    variant="primary"
                    size="lg"
                    active
                    style={{
                        fontWeight: "bold",
                        backgroundColor: "#0F4C81",
                        width: "100%"
                    }}
                >
                    {props?.icon && (
                        <img
                            src={props.icon}
                            alt="add-product"
                            style={{ marginRight: "0.8rem" }}
                        />
                    )}

                    {`${props.title}`}
                </Button>{" "}
            </Link>
        </>
    );
};
