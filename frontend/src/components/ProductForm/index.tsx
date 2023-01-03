import React from "react";
import "./style.css";

import { formatBRL } from "../../functions";

import { ProductButton } from "../../components/ProductButton";

interface interfaceForm {
    formTitle: string;
    formSubmit?: (e: any) => void;
    id?: number;
    date?: Date;
    title?: string;
    brand?: string;
    price?: number;
    color?: string;
    imagemp?: string;
}

export const ProductForm = (props: interfaceForm) => {
    const today: string = new Date().toISOString().split("T")[0];

    return (
        <>
            <div className="example">
                <h3
                    style={{
                        fontWeight: "bold",
                        color: "#353535",
                        padding: "10px 0 20px",
                    }}
                >
                    {props.formTitle}
                </h3>
                <form onSubmit={props.formSubmit}>
                    {/* PRODUCT NAME INPUT */}
                    <div className="field-label">
                        <label className="form-label">Nome do produto</label>
                        <input
                            type="text"
                            style={{ width: "50%" }}
                            placeholder="Digite o nome do produto"
                            defaultValue={props.title}
                        />
                    </div>

                    {/* PRODUCT BRAND INPUT */}
                    <div className="field-label">
                        <label className="form-label">Marca</label>
                        <input
                            type="text"
                            style={{ width: "50%" }}
                            placeholder="Digite a marca do produto"
                            defaultValue={props.brand}
                        />
                    </div>

                    {/* PRODUCT VALUE INPUT */}
                    <div
                        className="field-label"
                        style={{ position: "relative" }}
                    >
                        <label className="form-label">Valor</label>
                        <input
                            inputMode="numeric"
                            style={{ width: "25%", paddingLeft: "2.5em" }}
                            placeholder="000,00"
                            readOnly={false}
                            defaultValue={props.price}
                        />
                        <span className="unit">R$ </span>
                    </div>

                    {/* PRODUCT COLOR INPUT */}
                    <div className="field-label">
                        <label className="form-label">Cor</label>
                        <select
                            id="color"
                            name="color"
                            style={{ width: "20%" }}
                        >
                            <option value="white">Branco</option>
                            <option value="gray">Cinza</option>
                            <option value="black">Preto</option>
                        </select>
                    </div>

                    {/* PRODUCT DATE INPUT */}
                    <div className="field-label">
                        <label className="form-label">Data de Cadastro</label>
                        <input
                            type="date"
                            style={{ width: "20%" }}
                            placeholder="Digite o nome do produto"
                            defaultValue={today}
                        />
                    </div>

                    {/* PRODUCT IMAGES INPUT */}
                    <div className="field-label">
                        <label className="form-label">Adicionar Imagens</label>
                        {/* <img src="" alt="add-product" /> */}
                        <input
                            id="images"
                            name="images"
                            type="file"
                            accept="image/*"
                            style={{ width: "20%" }}
                        />
                    </div>
                    <div>
                        <input type="submit" value="submit"/>
                    </div>
                    {/*                    <ProductButton
                        type="submit"
                        title="ADICIONAR PRODUTO"
                        to="/"
                        icon=""
                    /> */}
                </form>
            </div>
        </>
    );
};
