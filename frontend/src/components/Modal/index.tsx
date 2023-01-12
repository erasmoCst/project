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
      className="modal-show"
      style={{
        visibility: props.modal ? "visible" : "hidden",
      }}
    >
      <div className="modal-card">
        <div>
          <div className="row">
            <p className="delete">Deseja realmente deletar o produto</p>
            <p className="delete">{props.title}?</p>
          </div>
          <br />
          <div className="row">
            <div className="button-space">
              <button className="button" onClick={() => props.handleCancel()}>
                Cancelar
              </button>
              <button
                className="button button-red"
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
