import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavigateFunction, useParams, useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";
import AddIcon from "./../../icons/icon-add.svg";

import { interfaceProducts } from "../../interfaces";

import "./style.css";
import { Header } from "../../components/Header";
import { Card } from "./../../components/Card";
import { ProductButton } from "../../components/ProductButton";
import { Footer } from "./../../components/Footer";
import { checkPermission } from "../../functions";

interface interfaceProductsID extends interfaceProducts {
    id: number;
}

export const HomeUser = () => {
    const [products, setProducts] = useState<Array<interfaceProductsID>>([]);
    const [modal, setModal] = useState<boolean>(false);
    const [deleteID, setDeleteID] = useState<number>(0);
    const [deleteTitle, setDeleteTitle] = useState<string>("");
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        console.log(checkPermission());
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token");
            if (token) {
                axios
                    .get("http://localhost:3001/products", {
                        headers: { Authorization: token },
                    })
                    .then((response) => {
                        setProducts(response.data);
                    })
                    .catch((erro) => {
                        localStorage.removeItem("tokens");
                        navigate("/login");
                    });
            } else {
                navigate("/login");
            }
        } else {
            navigate("/login");
        }
    }, []);

    const handleClick = (id: number, title: string) => {
        setModal(true);
        setDeleteID(id);
        setDeleteTitle(title);
    };

    const handleCancel = () => {
        setModal(false);
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete("http://localhost:3001/products/" + id);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <Container>
                <br />
                <div className="row">
                    <div className="col-md-2">
                        <h2 className="home-title">Produtos</h2>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-4 home-center">
                        <ProductButton
                            type="button"
                            title="Adicionar Produto"
                            to="/adicionar-produto"
                            icon={AddIcon}
                        ></ProductButton>
                    </div>
                </div>
               
            </Container>
            <Footer />
        </>
    );
};
