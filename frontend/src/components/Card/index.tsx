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
            <Row style={{ marginTop: "3.5em", marginBottom: "3.5em" }}>
                <div className="col-md-2" style={{ textAlign: "center" }}>
                    <img className="w-50" src={props.imagemp} />
                </div>
                <div className="col-md-6">
                    <p style={{ margin: "0", fontWeight: "bold" }}>
                        {props.title}
                    </p>
                    <p
                        style={{
                            margin: "0",
                            fontSize: "90%",
                            fontWeight: "normal",
                        }}
                    >
                        {props.brand}
                    </p>
                    <p
                        style={{
                            margin: "0",
                            fontSize: "150%",
                            fontWeight: "bold",
                            color: "#0F4C81",
                        }}
                    >
                        {formatBRL(props.price)}
                    </p>
                    <p
                        style={{
                            margin: "0",
                            fontSize: "90%",
                            fontWeight: "normal",
                        }}
                    >
                        Cor: {props.color}
                    </p>
                </div>

                <div
                    className="col-md-4"
                    style={{
                        verticalAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    <IconContext.Provider
                        value={{ size: "2em", color: "#0F4C81" }}
                    >
                        <Link to={"/cart/" + props.id}>
                            <img src={IconCart} alt="cart" />
                        </Link>
                        <Link to={"/edit-produto/" + props.id}>
                            <img src={IconEdit} alt="edit" />
                        </Link>
                    </IconContext.Provider>
                    <img src={IconTrash} alt="delete" />
                </div>
            </Row>
        </Container>
    );
};
