import React, { useEffect, useState } from "react";
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
    const [loginError, setLoginError] = useState<boolean>(false);

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
                    if (res.status === 200) {
                        localStorage.setItem(
                            "tokens",
                            JSON.stringify(res.data.token)
                        );
                        navigate("/");
                    }
                })
                .catch((error) => {
                    console.log(error.response);
                    if (
                        error.response.status === 401 ||
                        error.response.status === 500
                    ) {
                        setLoginError(!loginError);
                        alert("Usuários ou senha Inválidos");
                    }
                });
        }
    };

    return (
        <>
            <div className="center-block-login">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="login-block-box">
                            <div
                                className="center-login"
                                style={{ margin: "50px" }}
                            >
                                <img src={ViptechLogo} alt="Viptech Logo"></img>
                            </div>

                            <div className="center-login">
                                <span className="login-txt-login">
                                    Acesse sua conta
                                </span>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* USERNAME INPUT */}
                                                <FormInput
                                                    inputName="Email"
                                                    type="email"
                                                    placeHolder="Digite seu email"
                                                    defaultValue=""
                                                    errorMsg="Por favor, preencha esse campo."
                                                    formValidate={
                                                        formEmptyEmail
                                                    }
                                                    width="100%"
                                                    labelLeft="15px"
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                {/* PASSWORD INPUT */}
                                                <FormInput
                                                    inputName="Senha"
                                                    type="password"
                                                    placeHolder="Digite sua senha"
                                                    defaultValue=""
                                                    errorMsg={
                                                        loginError
                                                            ? "Usuários ou senha Inválidos"
                                                            : formEmptyPassword ||
                                                              formEmptyEmail
                                                            ? " Por favor, preencha esse campo."
                                                            : "a"
                                                    }
                                                    formValidate={
                                                        formEmptyPassword
                                                    }
                                                    width="100%"
                                                    labelLeft="15px"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>

                                    <div className="col-1"></div>
                                    <div className="col-10 form-options-space">
                                        <Link to="/esqueci-senha">
                                            <span className="forgot-password">
                                                Esqueceu a senha?
                                            </span>
                                        </Link>

                                        <div>
                                            <input
                                                type="submit"
                                                value="Acessar"
                                                className="form-button-submit"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </form>
                            <br />
                        </div>

                        <div className="newAccount">
                            <p>É novo na Viptech?</p>
                        </div>

                        <div>
                            <Link to="/criar-conta">
                                <button className="button-account">
                                    {" "}
                                    Criar conta Viptech
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </>
    );
};
