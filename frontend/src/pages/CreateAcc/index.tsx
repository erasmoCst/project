import React from "react";
import { Row } from "react-bootstrap";
import ViptechLogo from "./../../images/viptech-logo-color.png";

import "./style.css";

import { Link } from "react-router-dom";

import { FormInput } from "../../components/FormInput";
import { ProductButton } from "../../components/ProductButton";
import { ProductForm } from "../../components/ProductForm";

const handleSubmit = () => {};

export const CreateAcc = (props: any) => {
  return (
    <>
      <div className="center-block-create-acc">
        <div className="create-acc-block-box">
          <div className="center" style={{ margin: "30px" }}>
            <Link to="/login">
              <img
                src={ViptechLogo}
                alt="Viptech Logo"
                height="36"
                width="195"
              ></img>
            </Link>
          </div>
          <div>
            <span className="std-txt">Crie sua conta Viptech</span>
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <form onSubmit={handleSubmit}>
              <div>
                <Row>
                  <div className="col-6">
                    <FormInput
                      inputName="Nome"
                      type="text"
                      placeHolder="Primeiro Nome"
                      defaultValue=""
                      errorMsg="Por favor, preencha este campo"
                      formValidate={false}
                      width="95%"
                      labelLeft="30px"
                    />
                  </div>
                  <div className="col-6">
                    <FormInput
                      inputName="Sobrenome"
                      type="text"
                      placeHolder="Sobrenome"
                      defaultValue=""
                      errorMsg="Por favor, preencha este campo"
                      formValidate={false}
                      width="95%"
                      labelLeft="30px"
                    />
                  </div>
                </Row>

                <Row>
                  <div className="col-12">
                    <FormInput
                      inputName="Email"
                      type="email"
                      placeHolder="exemplo@email.com"
                      defaultValue=""
                      errorMsg="Email errado ou inválido"
                      formValidate={false}
                      width="98%"
                      labelLeft="30px"
                    />
                  </div>
                </Row>

                <Row>
                  <div className="col-12">
                    <FormInput
                      inputName="Senha"
                      type="password"
                      placeHolder="Pelo menos 6 caracteres"
                      defaultValue=""
                      errorMsg="Pelo menos 6 caracteres"
                      formValidate={false}
                      width="98%"
                      labelLeft="30px"
                    />
                  </div>
                </Row>
                <Row>
                  <div className="col-12">
                    <FormInput
                      inputName="Confirmar Senha"
                      type="password"
                      placeHolder=""
                      defaultValue=""
                      errorMsg="As senha não são iguais"
                      formValidate={false}
                      width="98%"
                      labelLeft="30px"
                    />
                  </div>
                </Row>
              </div>
              <Row>
                <div
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="center">
                    <Link to="/login">
                      <span className="forgot-password">Fazer login</span>
                    </Link>
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Criar Conta"
                      className="button-create-acc"
                    />
                  </div>
                </div>
              </Row>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
