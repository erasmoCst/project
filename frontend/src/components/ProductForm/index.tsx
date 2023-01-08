import React, { useEffect, useRef, useState } from "react";
import "./style.css";

import { formatBRL } from "../../functions";

import { ProductButton } from "../../components/ProductButton";

import StdImg from "./../../images/add-img.svg";

interface interfaceForm {
  id?: number;
  date?: Date;
  title?: string;
  brand?: string;
  price?: number | string;
  color?: string;
  images?: string;

  formTitle: string;
  formSubmit?: (e: any) => void;

  imageUrl: File | null;
  previewUrl: any;
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setColor: React.Dispatch<React.SetStateAction<string>>;
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
          <div className="field-label" style={{ position: "relative" }}>
            <label className="form-label">Valor</label>
            <input
              name="name"
              type="number"
              style={{ width: "25%", paddingLeft: "2.5em" }}
              placeholder="000,00"
              defaultValue={props.price}
            />
            <span className="unit">R$ </span>
          </div>

          {/* PRODUCT COLOR INPUT */}
          <div className="field-label">
            <label className="form-label">Cor</label>
            <select
              id="color"
              name="name"
              style={{ width: "20%" }}
              value={props.color}
              onChange={(event) => props.setColor(event.target.value)}
            >
              <option
                value=""
                disabled
              >
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
              defaultValue={
                props.date ? props.date.toISOString().split("T")[0] : today
              }
              disabled
            />
          </div>

          {/* PRODUCT IMAGES INPUT */}
          <div
            style={{
              maxHeight: "150px",
              maxWidth: "150px",
              marginBottom: "50px",
            }}
          >
            <div className="dashed">
              <input
                type="file"
                accept="image/*"
                ref={props.fileInputRef}
                onChange={props.handleChange}
                style={{ display: "none" }}
              />

              <img
                style={{
                  maxHeight: "150px",
                  maxWidth: "150px",
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
          </div>
          <div>
            <input
              type="submit"
              value={props.formTitle}
              style={{
                backgroundColor: "#0F4C81",
                border: "none",
                color: "white",
                fontWeight: "bold",
                padding: "15px 32px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                textTransform: "uppercase",
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};
