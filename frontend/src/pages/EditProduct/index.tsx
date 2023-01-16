import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { NavigateFunction, useParams, useNavigate } from "react-router-dom";
import { interfaceForm } from "../../interfaces";
import { Container } from "react-bootstrap";

import { Header } from "../../components/Header";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
import { ProductForm } from "../../components/ProductForm";
import { Footer } from "../../components/Footer";
import { checkPermission, getToken, permissionDenied } from "../../functions";

interface interfaceFormID extends interfaceForm {
  id: number;
}

let productSubmit: interfaceForm = {
  title: "",
  brand: "",
  price: "",
  color: "",
  date: new Date(),
  images: "",
};

export const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<interfaceFormID>({
    id: 0,
    title: "",
    brand: "",
    price: "",
    color: "",
    date: new Date(),
    images: "",
  });

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

    setImageUrl(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  function handleSubmit(e: any): void {
    e.preventDefault(productSubmit.title);
    let isValid = true;

    productSubmit.title = e.target.name[0].value;
    productSubmit.brand = e.target.name[1].value;
    productSubmit.price = e.target.name[2].value;
    productSubmit.color = e.target.name[3].value;
    productSubmit.date = e.target.name[4].value;
    /* productSubmit.images = e.target.name[5].value; */
    productSubmit.images = previewUrl ? previewUrl : product.images;

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
      if (localStorage.getItem("token")) {
        const token = getToken();
        const permission = checkPermission();
        if (token && permission === "1") {
          axios
            .put(
              "http://localhost:3001/products/" + id,
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
              alert("Produto Editado com Sucesso!");
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
              /*               localStorage.removeItem("token");
              localStorage.removeItem("permission");
              navigate("/login"); */
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
    if (getToken()) {
      const token = getToken();
      const permission = checkPermission();
      if (token && permission === "1") {
        axios
          .get("http://localhost:3001/products/" + id, {
            headers: { Authorization: token },
          })
          .then((res) => {
            setProduct(res.data);
            setColor(res.data.color);
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
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <PathBreadcrum path="Editar Produto" />
        <ProductForm
          formTitle="Editar Produto"
          id={product.id}
          title={product.title}
          brand={product.brand}
          price={product.price}
          color={color}
          images={product.images}
          imageUrl={imageUrl}
          previewUrl={previewUrl}
          fileInputRef={fileInputRef}
          handleChange={handleChange}
          setColor={setColor}
          handleSubmit={handleSubmit}
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
