import React, { useState } from "react";
import "./style.css";

import { formatBRL } from "../../functions";

import { ProductButton } from "../../components/ProductButton";

import AddImage from "./../../images/add-img.svg";
import Dashed from "./../../images/dashed-square.svg";

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

    const [image, setImage] = useState("");
    const [stdImage, setStdImage] = useState(AddImage);

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
                            name="name"
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
                            name="name"
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
                            name="name"
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
                        <select id="color" name="name" style={{ width: "20%" }}>
                            <option value="" disabled>
                                Selecione uma cor
                            </option>
                            <option value="Branco">Branco</option>
                            <option value="Cinza">Cinza</option>
                            <option value="Preto">Preto</option>
                        </select>
                    </div>

                    {/* PRODUCT DATE INPUT */}
                    <div className="field-label">
                        <label className="form-label">Data de Cadastro</label>
                        <input
                            name="name"
                            type="date"
                            style={{ width: "20%" }}
                            placeholder="Digite o nome do produto"
                            defaultValue={today}
                            disabled
                        />
                    </div>

                    {/* PRODUCT IMAGES INPUT */}
                    <div>
                        <div className="dashed">
                            <img src={AddImage} alt="Adicionar Imagem" />
                        </div>
                        <br />
                        <br />
                        <input
                            id="image"
                            name="name"
                            type="file"
                            accept="image/*"
                            style={{
                                width: "20%" /* , display: "none"  */,
                            }}
                            /* onChange={e => 
                                setImage(e.target.files[0]) 
                            }*/
                            /* {image ? <img src={URL.createObjectURL(image)} alt="Uploaded Image"/> : <img src={URL.createObjectURL(stdImage)} alt="Standard Image"/>} */
                        />
                    </div>
                    <div>
                        <input type="submit" value="submit" />
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
