import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { NavigateFunction, useParams, useNavigate } from "react-router-dom";
import { interfaceForm } from "../../interfaces";
import { Container } from "react-bootstrap";

import { Header } from "../../components/Header";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
import { ProductForm } from "../../components/ProductForm";
import { propTypes } from "react-bootstrap/esm/Image";
import { Footer } from "../../components/Footer";

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
        console.log(e.target);
        console.log(productSubmit);

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
            axios
                .put("http://localhost:3001/products/" + id, {
                    title: productSubmit.title,
                    brand: productSubmit.brand,
                    price: productSubmit.price,
                    color: productSubmit.color,
                    images: productSubmit.images,
                })
                .then((res) => {
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    useEffect(() => {
        axios
            .get("http://localhost:3001/products/" + id)
            .then((response) => {
                setProduct(response.data);
                setColor(response.data.color);
                /*                 product.price=response.data.price;
                console.log(product.price);

                console.log(response.data);
                console.log(product); */
            })
            .catch((error) => {
                console.log(error);
            });
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
