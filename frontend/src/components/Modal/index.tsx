import React from "react";

import "./style.css";

interface interfaceProps {
  id: number;
  title: string;

  modal: boolean;

  handleDelete: (id: number) => any;
  handleCancel: () => void;
}

export const Modal = (props: interfaceProps) => {

  return (
    <div
      style={{
        visibility: props.modal ? "visible" : "hidden",
        position: "fixed",
        zIndex: "3",
        left: "0",
        top: "0",
        width: " 100%",
        height: "100%",
        backgroundColor: "rgb(217,217,217,0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="modalCard">
        <div>
          <div className="row">
            <p
              className="delete"
              style={{
                marginBottom: "0px",
                display: "flex",
                alignItems:
                  "center" /* paddingTop: "15%", paddingLeft: "15%"  */,
                justifyContent: "center",
              }}
            >
              Deseja realmente deletar o produto
            </p>
            <p
              className="delete"
              style={{
                marginTop: "0px",
                display: "flex",
                alignItems:
                  "center" /* paddingTop: "15%", paddingLeft: "15%"  */,
                justifyContent: "center",
              }}
            >
              {props.title}?
            </p>
          </div>
          <div className="row">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button className="button" onClick={() => props.handleCancel()}>
                Cancelar
              </button>
              <button
                className="button"
                style={{ backgroundColor: "#D32f2f" }}
                onClick={() => props.handleDelete(props.id)}
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
