import React from "react";
import { Row } from "react-bootstrap";
import ViptechLogo from "./../../images/viptech-logo-color.png";

import "./style.css";

import { Link } from "react-router-dom";

import { FormInput } from "./../../components/FormInput/";
import { ProductButton } from "../../components/ProductButton";

const handleSubmit = () => {};

export const Login = (props: any) => {
  return (
    <>
      <div className="center-block-login">
        <div className="login-block-login">
          <div className="center-login" style={{ margin: "50px" }}>
            <img src={ViptechLogo} alt="Viptech Logo"></img>
          </div>
          <div className="center-login">
            <span className="login-txt-login">Acesse sua conta</span>
          </div>
          <form onSubmit={handleSubmit}>
            <Row>
              {/* USERNAME INPUT */}
              <FormInput
                inputName="Email"
                type="email"
                placeHolder="Digite seu nome de usuário"
                defaultValue=""
                errorMsg="Email ou senha inválidos"
                formValidate={false}
                width="80%"
                labelLeft="65px"
              />
            </Row>
            <Row>
              {/* PASSWORD INPUT */}
              <FormInput
                inputName="Senha"
                type="password"
                placeHolder="Digite sua senha"
                defaultValue=""
                errorMsg="Email ou senha inválidos"
                formValidate={false}
                width="80%"
                labelLeft="65px"
              />
            </Row>

            <Row>
              <div className="col-1"></div>
              <div
                className="col-5"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link to="/esqueci-senha">
                  <span className="forgot-password">Esqueceu a senha?</span>
                </Link>
              </div>
              <div className="col-1"></div>

              <div
                className="col-4"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input type="submit" value="Acessar" className="submit-login" />
              </div>
            </Row>
          </form>

          <br />
        </div>
        <div className="newAccount">
          <p>É novo na Viptech?</p>
        </div>
        <div>
          <Link to="/criar-conta">
            <button className="button-account"> Criar conta Viptech</button>
          </Link>
        </div>
      </div>
    </>
  );
};
