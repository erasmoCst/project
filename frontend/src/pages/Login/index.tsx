import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import ViptechLogo from "./../../images/viptech-logo-color.png";

import "./style.css";

import { Link } from "react-router-dom";

import { FormInput } from "./../../components/FormInput/";
import { ProductButton } from "../../components/ProductButton";
import axios from "axios";

interface interfacelogin {
  email: string;
  password: string;
}

let loginSubmit: interfacelogin = {
  email: "",
  password: "",
};

export const Login = () => {
  const navigate: NavigateFunction = useNavigate();

  const [formEmptyEmail, setFormEmptyEmail] = useState<boolean>(false);
  const [formEmptyPassword, setFormEmptyPassword] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let isValid = true;

    loginSubmit.email = e.target.name[0].value;
    loginSubmit.password = e.target.name[1].value;

    if (loginSubmit.email === "") {
      setFormEmptyEmail(true);
      isValid = false;
    } else {
      setFormEmptyEmail(false);
    }

    if (loginSubmit.password === "") {
      setFormEmptyPassword(true);
      isValid = false;
    } else {
      setFormEmptyPassword(false);
    }
    if (isValid) {
      axios
        .post("http://localhost:3001/login", {
          email: loginSubmit.email,
          password: loginSubmit.password,
        })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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

          <div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* USERNAME INPUT */}
                <FormInput
                  inputName="Email"
                  type="email"
                  placeHolder="Digite seu nome de usuário"
                  defaultValue=""
                  errorMsg="Por favor, preencha esse campo."
                  formValidate={formEmptyEmail}
                  width="80%"
                  labelLeft="60px"
                />
              </div>

              <div className="row">
                {/* PASSWORD INPUT */}
                <FormInput
                  inputName="Senha"
                  type="password"
                  placeHolder="Digite sua senha"
                  defaultValue=""
                  errorMsg={
                    formEmptyPassword || formEmptyEmail
                      ? "Por favor, preencha esse campo."
                      : "a"
                  }
                  formValidate={formEmptyPassword}
                  width="80%"
                  labelLeft="60px"
                />
              </div>

              <div className="row">
                <div className="col-1"></div>
                <div
                  className="col-5 center-vertical"
                  style={{ marginLeft: "14px" }}
                >
                  <Link to="/esqueci-senha">
                    <span className="forgot-password">Esqueceu a senha?</span>
                  </Link>
                </div>
                <div className="col-1"></div>

                <div className="col-4 center-vertical">
                  <input
                    type="submit"
                    value="Acessar"
                    className="submit-login"
                  />
                </div>
              </div>
            </form>
          </div>
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
