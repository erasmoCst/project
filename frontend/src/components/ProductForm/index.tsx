import React from "react";
import "./style.css";

import StdImg from "./../../images/add-img.svg";
interface interfaceValidation {
    validateTitle: boolean;
    validateBrand: boolean;
}

interface interfaceForm {
    id?: number;
    date?: Date;
    title?: string;
    brand?: string;
    price?: number | string;
    color?: string;
    images?: string;

    formTitle: string;
    handleSubmit: (e: any) => void;

    imageUrl: File | null;
    previewUrl: any;
    fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setColor: React.Dispatch<React.SetStateAction<string>>;

    formValidateTitle: boolean;
    formValidateBrand: boolean;
    formValidatePrice: boolean;
    formValidateColor: boolean;
}

export const ProductForm = (props: interfaceForm) => {
    const today: string = new Date().toISOString().split("T")[0];

    return (
        <>
            <div /* className="example" */>
                <h3
                    style={{
                        fontWeight: "bold",
                        color: "#353535",
                        padding: "10px 0 20px",
                    }}
                >
                    {props.formTitle}
                </h3>

                <form onSubmit={props.handleSubmit}>
                    {/* PRODUCT NAME INPUT */}
                    <div className="field-label">
                        <label
                            className="form-label"
                            style={{
                                color: props.formValidateTitle
                                    ? "#D32F2F"
                                    : "#000000",
                            }}
                        >
                            Nome do produto
                        </label>
                        <input
                            name="name"
                            type="text"
                            className={
                                props.formValidateTitle
                                    ? "input-field-error"
                                    : "input-field"
                            }
                            style={{
                                width: "50%",
                            }}
                            placeholder="Digite o nome do produto"
                            defaultValue={props.title}
                        />
                        {
                            <p
                                style={{
                                    visibility: props.formValidateTitle
                                        ? "visible"
                                        : "hidden",
                                    color: "#D32F2F",
                                    fontWeight: "normal",
                                    letterSpacing: "0.4px",
                                    fontSize: "14px",
                                }}
                            >
                                Por favor, preencha o nome do produto
                            </p>
                        }
                    </div>

                    {/* PRODUCT BRAND INPUT */}
                    <div className="field-label">
                        <label
                            className="form-label"
                            style={{
                                color: props.formValidateBrand
                                    ? "#D32F2F"
                                    : "#000000",
                            }}
                        >
                            Marca
                        </label>
                        <input
                            name="name"
                            type="text"
                            className={
                                props.formValidateBrand
                                    ? "input-field-error"
                                    : "input-field"
                            }
                            style={{
                                width: "50%",
                            }}
                            placeholder="Digite o nome do produto"
                            defaultValue={props.brand}
                        />
                        <p
                            style={{
                                visibility: props.formValidateBrand
                                    ? "visible"
                                    : "hidden",
                                color: "#D32F2F",
                                fontWeight: "normal",
                                letterSpacing: "0.4px",
                                fontSize: "14px",
                            }}
                        >
                            Por favor, preencha a marca do produto
                        </p>
                    </div>

                    {/* PRODUCT VALUE INPUT */}
                    <div
                        className="field-label"
                        style={{ position: "relative" }}
                    >
                        <label
                            className="form-label"
                            style={{
                                color: props.formValidatePrice
                                    ? "#D32F2F"
                                    : "#000000",
                            }}
                        >
                            Valor
                        </label>
                        <input
                            name="name"
                            type="number"
                            className={
                                props.formValidatePrice
                                    ? "input-field-error"
                                    : "input-field"
                            }
                            style={{ width: "25%", paddingLeft: "2.5em" }}
                            placeholder="000,00"
                            defaultValue={props.price}
                        />
                        <p
                            style={{
                                visibility: props.formValidatePrice
                                    ? "visible"
                                    : "hidden",
                                color: "#D32F2F",
                                fontWeight: "normal",
                                letterSpacing: "0.4px",
                                fontSize: "14px",
                            }}
                        >
                            Por favor, preencha o preço do produto
                        </p>
                        <span className="unit">R$ </span>
                    </div>

                    {/* PRODUCT COLOR INPUT */}
                    <div className="field-label">
                        <label
                            className="form-label"
                            style={{
                                color: props.formValidateColor
                                    ? "#D32F2F"
                                    : "#000000",
                            }}
                        >
                            Cor
                        </label>
                        <select
                            id="color"
                            name="name"
                            className={
                                props.formValidateColor
                                    ? "input-field-error"
                                    : "input-field"
                            }
                            style={{ width: "20%" }}
                            value={props.color}
                            onChange={(event) =>
                                props.setColor(event.target.value)
                            }
                        >
                            <option value="" disabled>
                                Selecione uma cor
                            </option>
                            <option value="Branco">Branco</option>
                            <option value="Cinza">Cinza</option>
                            <option value="Preto">Preto</option>
                        </select>
                        <p
                            style={{
                                visibility: props.formValidateColor
                                    ? "visible"
                                    : "hidden",
                                color: "#D32F2F",
                                fontWeight: "normal",
                                letterSpacing: "0.4px",
                                fontSize: "14px",
                            }}
                        >
                            Por favor, escolha a cor do produto
                        </p>
                    </div>

                    {/* PRODUCT DATE INPUT */}
                    <div className="field-label">
                        <label className="form-label">Data de Cadastro</label>
                        <input
                            name="name"
                            type="date"
                            className="input-field"
                            style={{ width: "20%" }}
                            defaultValue={
                                props.date
                                    ? props.date.toISOString().split("T")[0]
                                    : today
                            }
                            disabled
                        />
                    </div>

                    {/* PRODUCT IMAGES INPUT */}
                    <div
                        className="dashed"
                        style={{
                            height: "130px",
                            width: "130px",
                            marginBottom: "0.5em",
                        }}
                    >
                        <input
                            name="name"
                            type="file"
                            accept="image/*"
                            ref={props.fileInputRef}
                            onChange={props.handleChange}
                            style={{ display: "none" }}
                        />

                        <img
                            style={{
                                maxHeight: "130px",
                                maxWidth: "130px",
                            }}
                            alt="Image Preview"
                            onClick={() => props.fileInputRef.current?.click()}
                            src={
                                props.previewUrl
                                    ? props.previewUrl
                                    : props.images
                                    ? props.images
                                    : StdImg
                            }
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value={props.formTitle}
                            className="submit"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};
