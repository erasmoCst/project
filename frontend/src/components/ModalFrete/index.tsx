import React from "react";

import "./style.css";

interface interfaceProps {
  status: boolean;
}

export const ModalFrete = (props: interfaceProps) => {
  return (
    <>
      <div
        className="modal-shape"
        style={{
          visibility: props.status ? "visible" : "hidden",
        }}
      >
        <p className="modal-txt">Valor do frete: 10% do valor do produto </p>
      </div>
    </>
  );
};
