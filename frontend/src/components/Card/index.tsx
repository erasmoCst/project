import React from "react";

import { interfaceProducts } from "../../interfaces";
import { formatBRL } from "../../functions";

import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

import IconCart from "./../../icons/icon-cart.svg";
import IconEdit from "./../../icons/icon-edit.svg";
import IconTrash from "./../../icons/icon-trash.svg";

export const Card = (props: interfaceProducts) => {
    return (
        <Container fluid>
            <Row>
                <div className="col-md-2">
                    <img className="w-50" src={props.imagemp} />
                </div>
                <div className="col-md-7">
                    <h3>{props.title}</h3>
                    <p>{props.brand}</p>
                    <p style={{ fontWeight: "bold", color: "#0F4C81" }}>
                        {formatBRL(props.price)}
                    </p>
                    <p>Cor: {props.color}</p>
                </div>

                <div
                    className="col-md-2"
                    style={{
                        verticalAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}
                >
                    <IconContext.Provider
                        value={{ size: "2em", color: "##0F4C81" }}
                    >
                        <Link to="/cart">
                            <img src={IconCart} alt="cart" />
                        </Link>
                        <Link to="/edit-produto">
                            <img src={IconEdit} alt="edit" />
                        </Link>
                    </IconContext.Provider>
                    <img src={IconTrash} alt="delete" />
                </div>
            </Row>
        </Container>
    );
};
