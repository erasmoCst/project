import React, { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, Select } from "antd";
import FormField from "../FormField";

import "./style.css";

interface interfaceTitle {
    title: string;
}

export const  ProductForm = (props: interfaceTitle) => {
    const [productName, setProductName] = useState(null);
    const [productBrand, setProductBrand] = useState("Intelbras");
    const [treeValue, setTreeValue] = useState(["0-0-0"]);
    const [selectValue, setSelectValue] = useState();

    const today: string = new Date().toISOString().split("T")[0];

    return (
        <>
            <div style={{ textDecoration: "none", color: "#0F4C81" }}>
                <Breadcrumb>
                    <Breadcrumb.Item
                        style={{ textDecoration: "none", color: "#0F4C81" }}
                    >
                        <Link
                            to="/"
                            style={{ textDecoration: "none", color: "#0F4C81" }}
                        >
                            Home
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: "#0F4C81" }}>
                        {props.title}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="example">
                <h3
                    style={{
                        fontWeight: "bold",
                        color: "#353535",
                        padding: "10px 0 20px",
                    }}
                >
                    {props.title}
                </h3>

                {/* PRODUCT NAME INPUT */}
                <FormField
                    label="Nome do Produto"
                    name="productName"
                    value={null}
                >
                    <Input
                        placeholder="Digite o nome do produto"
                        style={{ width: "50%", marginBottom: "20px" }}
                        onChange={(e) => setProductName(null)}
                    />
                </FormField>

                {/* PRODUCT BRAND INPUT */}
                <FormField
                    label="Marca"
                    name="productBrand"
                    value={productBrand}
                >
                    <Input
                        placeholder="Digite a marca do produto"
                        value={productBrand}
                        style={{ width: "50%", marginBottom: "20px" }}
                        onChange={(e) => setProductBrand(e.target.value)}
                    />
                </FormField>

                {/* PRODUCT PRICE INPUT */}
                <FormField label="Valor" name="productPrice" value="R$">
                    <Input
                        //value="R$"
                        placeholder="R$ 000,00"
                        style={{ width: "25%", marginBottom: "20px" }}
                    />
                </FormField>

                {/* PRODUCT COLOR INPUT */}
                <FormField label="Cor" name="productColor">
                    <Select
                        className="teste"
                        showSearch
                        style={{ width: "20%", marginBottom: "20px" }}
                        placeholder="Selecione a cor"
                        options={[
                            {
                                value: "white",
                                label: "Branco",
                            },
                            {
                                value: "gray",
                                label: "Cinza",
                            },
                            {
                                value: "black",
                                label: "Preto",
                            },
                        ]}
                    ></Select>
                </FormField>

                {/* PRODUCT REGISTRATION DATE INPUT */}
                <FormField label="Data de Cadastro" name="regDate">
                    <Input
                        type="date"
                        defaultValue={today}
                        style={{ width: "20%", marginBottom: "20px" }}
                    />
                </FormField>

                <FormField>
                    <Input
                        accept="image/*"
                        type="file"
                        style={{ width: "20%", marginBottom: "20px" }}
                    />
                </FormField>
            </div>
        </>
    );
};
