import React from "react";

import { Row } from "react-bootstrap";

import "./style.css";

interface interfaceCreateAccForm {
  inputName: string;
  placeHolder: string;
  defaultValue: string;
  errorMsg: string;
  formValidate: boolean;
  width: string;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
}

export const CreateAccForm = (props: interfaceCreateAccForm) => {
  return (
    <>
      <Row>
          <div className="field-label-login">
            <label
              className="form-label-login"
              style={{
                color: props.formValidate ? "#D32F2F" : "#000000",
              }}
            >
              {props.inputName}
            </label>
            <input
              name="name"
              type={props.type}
              className={
                props.formValidate ? "input-field-error-login" : "input-field"
              }
              style={{
                width: props.width,
              }}
              placeholder={props.placeHolder}
              defaultValue={props.defaultValue}
            />
        </div>
      </Row>

      <Row>
        {
          <p
            style={{
              visibility: props.formValidate ? "visible" : "hidden",
              color: "#D32F2F",
              fontWeight: "normal",
              letterSpacing: "0.4px",
              fontSize: "14px",
            }}
          >
            {props.errorMsg}
          </p>
        }
      </Row>
    </>
  );
};
