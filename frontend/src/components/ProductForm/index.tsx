import React, { useState } from "react";
import { Input, TreeSelect, Select } from "antd";
import { Breadcrumb } from "react-bootstrap";
import FormField from "../FormField";
import "./style.css";

const { Option } = Select;

export const ProductForm = () => {
    const [productName, setProductName] = useState("Câmera");
    const [productBrand, setProductBrand] = useState("Intelbras");
    const [treeValue, setTreeValue] = useState(["0-0-0"]);
    const [selectValue, setSelectValue] = useState();

    return (
        <>
            <div style={{ textDecoration: "none", color: "#0F4C81" }}>
                <Breadcrumb>
                    <Breadcrumb.Item
                        href="/"
                        style={{ textDecoration: "none", color: "#0F4C81" }}
                        
                    >
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: "#0F4C81" }}>
                        Adicionar Produto
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
                    Adicionar Produto
                </h3>
                <FormField
                    label="Nome do Produto"
                    name="productName"
                    value={productName}
                >
                    <Input
                        placeholder="Digite o nome do produto"
                        value={productName}
                        style={{ width: "50%", marginBottom: "20px" }}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </FormField>
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
                <FormField label="Valor" name="productPrice" value="R$">
                    <Input
                        //value="R$"
                        placeholder="R$ 000,00"
                        style={{ width: "25%", marginBottom: "20px" }}
                    />
                </FormField>

                <FormField label="Cor" name="productColor">
                    <Select
                        className="teste"
                        showSearch
                        style={{ width: "20%" }}
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
            </div>

            {/* <Form>
                <Form.Group style={{width: "50%"}}>
                    <Form.Label>Nome do Produto</Form.Label>
                    <Form.Control type="email" placeholder="Digite o nome do produto" />
                </Form.Group>

                <Form.Group style={{width: "50%"}}>
                    <Form.Label>Marca</Form.Label>
                    <Form.Control type="text" placeholder="Digite a marca do produto" />
                </Form.Group>

                <Form.Group style={{width: "25%"}}>
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="text" placeholder="R$0,00" />
                </Form.Group>

                <Form.Group style={{width: "20%"}}>
                    <Form.Label>Cor</Form.Label>
                    <Form.Control type="text" placeholder="Branco" />
                </Form.Group>

                <Form.Group style={{width: "20%"}}>
                    <Form.Label>Data de Cadastro</Form.Label>
                    <Form.Control type="date" placeholder="20/12/2022" />
                </Form.Group>
            </Form> */}
        </>
    );
};
