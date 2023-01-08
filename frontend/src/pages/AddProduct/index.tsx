import React, { useRef, useState } from "react";
import axios from "axios";

import { Container } from "react-bootstrap";

import { NavigateFunction, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { ProductForm } from "../../components/ProductForm";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
/* import { Footer } from "../../components/Footer"; */

export const AddProduct = () => {
  const navigate: NavigateFunction = useNavigate();

  const [color, setColor] = useState<string>("");


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

  function formSubmit(e: any): void {
    e.preventDefault();
    let title: string = e.target.name[0].value;
    let brand: string = e.target.name[1].value;
    let price: number = e.target.name[2].value;
    let color: string = e.target.name[3].value;
    let date: Date = e.target.name[4].value;
    let images: string = previewUrl;

    axios
      .post("http://localhost:3001/products", {
        title,
        brand,
        price,
        color,
        images,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
          formSubmit={formSubmit}
          formTitle="Adicionar Produto"
          color={color}
          setColor={setColor}
        />
      </Container>
      {/* <Footer /> */}
    </>
  );
};
