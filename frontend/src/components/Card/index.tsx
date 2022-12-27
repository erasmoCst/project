import { Card as CardBootstrap, Button, Container, Row } from "react-bootstrap";
import { FiTrash2 } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { Link, useNavigate } from "react-router-dom";
import IconCart from "./../../icons/icon-cart.svg";
import IconEdit from "./../../icons/icon-edit.svg";
import IconTrash from "./../../icons/icon-trash.svg";

interface interfaceProps {
    id: string;
    title: string;
    brand: string;
    price: string;
    color: string;
    imagemp: string;
}

export const Card = (props: interfaceProps) => {
    const navigate = useNavigate();

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
                        R$ {props.price}
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
