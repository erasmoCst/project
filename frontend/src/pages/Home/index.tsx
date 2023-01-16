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
import { checkPermission, getToken, permissionDenied } from "../../functions";
import { CardUser } from "../../components/CardUser";

interface interfaceProductsID extends interfaceProducts {
  id: number;
}

export const Home = () => {
  const [products, setProducts] = useState<Array<interfaceProductsID>>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [deleteID, setDeleteID] = useState<number>(0);
  const [deleteTitle, setDeleteTitle] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();

  const handleClick = (id: number, title: string) => {
    const permission = checkPermission();
    if (permission !== "1") {
      alert("Você não tem permissão para esta função!");
      navigate("/");
    } else {
      setModal(true);
      setDeleteID(id);
      setDeleteTitle(title);
    }
  };

  const handleCancel = () => {
    setModal(false);
  };

  const handleDelete = async (id: number) => {
    if (localStorage.getItem("token")) {
      const token = getToken();
      const permission = checkPermission();
      if (token && permission === "1") {
        axios
          .delete("http://localhost:3001/products/" + id, {
            headers: { Authorization: token },
          })
          .then((res) => {
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });
      } else if (token && permission !== "1") {
        alert("Você não tem permissão para esta função");
        navigate("/");
      } else if (!token && permission === "1") {
        permissionDenied();
        alert("Token Inválido");
        navigate("/login");
      } else {
        permissionDenied();
        alert("Acesso Negado");
        navigate("/login");
      }
    } else {
      permissionDenied();
      navigate("/login");
    }
  };

  useEffect(() => {
    if (getToken()) {
      const token = getToken();
      if (token) {
        axios
          .get("http://localhost:3001/products", {
            headers: { Authorization: token },
          })
          .then((res) => {
            setProducts(res.data);
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });
      } else {
        permissionDenied();
        navigate("/login");
      }
    } else {
      permissionDenied();
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <br />
        <div className="row">
          <div className="col-2">
            <h2 className="home-title">Produtos</h2>
          </div>
          <div className="col-6"></div>
          {checkPermission() === "1" ? (
            <div className="col-4 center">
              <ProductButton
                type="button"
                title="Adicionar Produto"
                to="/adicionar-produto"
                icon={AddIcon}
              ></ProductButton>
            </div>
          ) : (
            ""
          )}
        </div>
        {checkPermission() === "1"
          ? products.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                brand={product.brand}
                price={product.price}
                color={product.color}
                images={product.images}
                modal={modal}
                deleteID={deleteID}
                deleteTitle={deleteTitle}
                handleDelete={handleDelete}
                handleClick={handleClick}
                handleCancel={handleCancel}
              ></Card>
            ))
          : products.map((product) => (
              <CardUser
                key={product.id}
                id={product.id}
                title={product.title}
                brand={product.brand}
                price={product.price}
                color={product.color}
                images={product.images}
              ></CardUser>
            ))}
      </Container>
      <Footer />
    </>
  );
};
