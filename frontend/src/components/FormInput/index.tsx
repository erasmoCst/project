import React from "react";

import { Row } from "react-bootstrap";

import "./style.css";

interface interfaceFormInput {
  inputName: string;
  placeHolder: string;
  defaultValue: string;
  errorMsg: string;
  formValidate: boolean;
  width: string;
  labelLeft: string;
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

export const FormInput = (props: interfaceFormInput) => {
  return (
    <>
      <div className="row">
        <div style={{ marginLeft: "10px" }}>
          <div className="field-label-login">
            <label
              className="form-label-login"
              style={{
                color: props.formValidate ? "#D32F2F" : "#000000",
                left: props.labelLeft,
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
        </div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-11">
          <p
            className="input-txt-error"
            style={{
              visibility: props.formValidate ? "visible" : "hidden",
            }}
          >
            {props.errorMsg}
          </p>
        </div>
      </div>
    </>
  );
};
