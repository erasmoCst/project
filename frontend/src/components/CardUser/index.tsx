import React, { useEffect, useState } from "react";
import axios from "axios";

import { interfaceProducts } from "../../interfaces";
import { formatBRL } from "../../functions";

import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

import IconCart from "./../../icons/icon-cart.svg";
import IconEdit from "./../../icons/icon-edit.svg";
import IconTrash from "./../../icons/icon-trash.svg";

import "./style.css";
import { Modal } from "../Modal";

interface interfaceProps extends interfaceProducts {
  id: number;
}

export const CardUser = (props: interfaceProps) => {
  return (
    <Container fluid>
      <div className="row card-space">
        <div className="col-2 card-txt-center">
          <img className="w-50" src={props.images} />
        </div>

        <div className="col-6 center-vertical">
          <div className="container">
            <div className="row">
              <span>
                <strong>{props.title}</strong>
              </span>
            </div>
            <div className="row">
              <p className="card-txt">{props.brand}</p>
            </div>
            <div className="row">
              <p className="card-txt-price">{formatBRL(props.price)}</p>
            </div>
            <div className="row">
              <p className="card-txt">Cor: {props.color}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 card-icon">
          <IconContext.Provider value={{ size: "2em", color: "#0F4C81" }}>
            <Link to={"/carrinho/" + props.id}>
              <img src={IconCart} alt="cart" />
            </Link>
          </IconContext.Provider>
        </div>
      </div>
    </Container>
  );
};
