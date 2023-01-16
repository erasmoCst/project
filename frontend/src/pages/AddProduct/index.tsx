import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { interfaceForm } from "../../interfaces";

import { Container } from "react-bootstrap";

import { NavigateFunction, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { ProductForm } from "../../components/ProductForm";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
import { Footer } from "../../components/Footer";
import { checkPermission, getToken, permissionDenied } from "../../functions";

let productSubmit: interfaceForm = {
  title: "",
  brand: "",
  price: "",
  color: "",
  date: new Date(),
  images: "",
};

/* const maxImageSize = 3000000 //3MB in bytes */

export const AddProduct = () => {
  const navigate: NavigateFunction = useNavigate();

  const [color, setColor] = useState<string>("");

  const [formValidateTitle, setFormValidateTitle] = useState<boolean>(false);
  const [formValidateBrand, setFormValidateBrand] = useState<boolean>(false);
  const [formValidatePrice, setFormValidatePrice] = useState<boolean>(false);
  const [formValidateColor, setFormValidateColor] = useState<boolean>(false);

  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | any>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    /*     if (file.size > maxImageSize) {
       alert(`Image size is larger than ${maxImageSize/1000000}MB, please select a smaller image`);
       return;
    } */

    setImageUrl(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  function handleSubmit(e: any): void {
    e.preventDefault();

    let isValid = true;

    productSubmit.title = e.target.name[0].value;
    productSubmit.brand = e.target.name[1].value;
    productSubmit.price = e.target.name[2].value;
    productSubmit.color = e.target.name[3].value;
    productSubmit.date = e.target.name[4].value;
    productSubmit.images = previewUrl;

    if (productSubmit.title === "") {
      setFormValidateTitle(true);
      isValid = false;
    } else {
      setFormValidateTitle(false);
    }

    if (productSubmit.brand === "") {
      setFormValidateBrand(true);
      isValid = false;
    } else {
      setFormValidateBrand(false);
    }

    if (productSubmit.price === "") {
      setFormValidatePrice(true);
      isValid = false;
    } else {
      setFormValidatePrice(false);
    }

    if (productSubmit.color === "") {
      setFormValidateColor(true);
      isValid = false;
    } else {
      setFormValidateColor(false);
    }

    if (isValid) {
      if (getToken()) {
        const token = getToken();
        const permission = checkPermission();
        if (token && permission === "1") {
          axios
            .post(
              "http://localhost:3001/products",
              {
                title: productSubmit.title,
                brand: productSubmit.brand,
                price: productSubmit.price,
                color: productSubmit.color,
                images: productSubmit.images,
              },
              { headers: { Authorization: token } }
            )
            .then((res) => {
              alert("Produto Adicionado com Sucesso!");
              navigate("/");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        } else if (token && permission !== "1") {
          alert("Você não tem permissão para acessar está pagina!");
          navigate("/");
        } else if (!token && permission === "1") {
          permissionDenied();
          alert("Token Inválido");
          navigate("/login");
        } else {
          permissionDenied();
          alert("Token Inválido");
          navigate("/login");
        }
      } else {
        permissionDenied();
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = getToken();
      const permission = checkPermission();
      if (token && permission === "1") {
      } else if (token && permission !== "1") {
        alert("Você não tem permissão para acessar está pagina!");
        navigate("/");
      } else if (!token && permission === "1") {
        permissionDenied();
        alert("Token Inválido");
        navigate("/login");
      } else {
        permissionDenied();
        alert("Token Inválido");
        navigate("/login");
      }
    } else {
      permissionDenied();
      navigate("/login");
    }
  });

  return (
    <>
      <Header />
      <Container>
        <PathBreadcrum path="Adicionar Produto" />
        <ProductForm
          imageUrl={imageUrl}
          previewUrl={previewUrl}
          fileInputRef={fileInputRef}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formTitle="Adicionar Produto"
          color={color}
          setColor={setColor}
          formValidateTitle={formValidateTitle}
          formValidateBrand={formValidateBrand}
          formValidatePrice={formValidatePrice}
          formValidateColor={formValidateColor}
        />
      </Container>
      <Footer />
    </>
  );
};
