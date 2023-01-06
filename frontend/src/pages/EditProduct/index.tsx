import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { interfaceProducts } from "../../interfaces";

import {
    Link,
    NavigateFunction,
    useParams,
    useNavigate,
} from "react-router-dom";

import { Container } from "react-bootstrap";

import { Header } from "../../components/Header";
import { ProductButton } from "../../components/ProductButton";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
import { ProductForm } from "../../components/ProductForm";
/* import { Footer } from "../../components/Footer"; */

interface interfaceForm {
    id: number;
    date?: Date;
    title: string;
    brand: string;
    price: string;
    color: string;
    images: string;
}


export const EditProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<interfaceForm>({
        id: 0,
        title: "",
        brand: "",
        price: "",
        color: "",
        images: "",
    });

    const navigate: NavigateFunction = useNavigate();

    const [color, setColor] = useState<string>("");

    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | any>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }

        setImage(file);

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
            .put("http://localhost:3001/products/" + id, {
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

    useEffect(() => {
        axios
            .get("http://localhost:3001/products/" + id)
            .then((response) => {
                setProduct(response.data);
                setColor(response.data.color);
                console.log(color)
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
                    color={product.color}
                    images={
                        "https://raw.githubusercontent.com/erasmocst/ViptechProjectImages/main/" +
                        product.images
                    }
                    image={image}
                    previewUrl={previewUrl}
                    fileInputRef={fileInputRef}
                    handleChange={handleChange}
                    formSubmit={formSubmit}
                />
                <Link to="/">
                    <ProductButton
                        type={undefined}
                        title="EDITAR PRODUTO"
                        to="/"
                        icon=""
                    />
                </Link>
            </Container>
            {/* <Footer /> */}
        </>
    );
};
