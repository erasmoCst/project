import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface interfaceButton {
    title: string;
    to: string;
}

export const ProductButton = (props: interfaceButton) => {
    return (
        <>
            <Link to={props.to}>
                <Button
                    variant="primary"
                    size="lg"
                    active
                    style={{ marginBottom: "20px" }}
                >
                    {props.title}
                </Button>{" "}
            </Link>
        </>
    );
};
