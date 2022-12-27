import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddIcon from "./../../icons/icon-add.svg"

interface interfaceButton {
    title: string;
    to: string;
    icon: string;
}

export const IconButton = (props: interfaceButton) => {
    return (
        <>
            <Link to={props.to}>
                <Button
                    variant="primary"
                    size="lg"
                    active
                    style={{ fontWeight: "bold", backgroundColor:"#0F4C81", margin: "20px 0px 20px 0px" }}
                >
                    <img src={props.icon} alt="add-product" />
                    {`\t  ${props.title}`}
                </Button>{" "}
            </Link>
        </>
    );
};
