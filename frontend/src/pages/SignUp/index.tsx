import React, { useState } from "react";
import ViptechLogo from "./../../images/viptech-logo-color.png";

import "./style.css";

import { Link, NavigateFunction, useNavigate } from "react-router-dom";

import { isUserValidated } from "../../interfaces";

import { FormInput } from "../../components/FormInput";
import { ProductButton } from "../../components/ProductButton";
import { ProductForm } from "../../components/ProductForm";
import axios from "axios";

interface interfaceUser {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirm: string;
}

let userSubmit: interfaceUser = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirm: "",
};

export const SignUp = ({ setGlobalValue }: any) => {
    const navigate: NavigateFunction = useNavigate();

    const [formValidateEmail, setFormValidateEmail] = useState<boolean>(false);
    const [formValidateUsedEmail, setFormValidateUsedEmail] =
        useState<boolean>(false);

    const [formValidateFirstName, setFormValidateFirstName] =
        useState<boolean>(false);
    const [formValidateLastName, setFormValidateLastName] =
        useState<boolean>(false);

    const [formValidatePassword, setFormValidatePassword] =
        useState<boolean>(false);
    const [formValidatePasswordConfirm, setFormValidatePasswordConfirm] =
        useState<boolean>(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        let isValid = true;

        userSubmit.first_name = e.target.name[0].value;
        userSubmit.last_name = e.target.name[1].value;
        userSubmit.email = e.target.name[2].value;
        userSubmit.password = e.target.name[3].value;
        userSubmit.password_confirm = e.target.name[4].value;

        axios
            .get("http://localhost:3001/users/" + userSubmit.email)
            .then((res) => {
                if (res.data) {
                    setFormValidateUsedEmail(true);
                    isValid = false;
                } else {
                    setFormValidateUsedEmail(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });

        if (userSubmit.password_confirm != userSubmit.password) {
            setFormValidatePasswordConfirm(true);
            isValid = false;
        } else {
            setFormValidatePasswordConfirm(false);
        }

        if (userSubmit.first_name === "") {
            setFormValidateFirstName(true);
            isValid = false;
        } else {
            setFormValidateFirstName(false);
        }

        if (userSubmit.last_name === "") {
            setFormValidateLastName(true);
            isValid = false;
        } else {
            setFormValidateLastName(false);
        }

        if (userSubmit.email === "") {
            setFormValidateEmail(true);
            isValid = false;
        } else {
            setFormValidateEmail(false);
        }

        if (userSubmit.password === "") {
            setFormValidatePassword(true);
            isValid = false;
        } else {
            setFormValidatePassword(false);
        }

        if (isValid) {
            axios
                .post("http://localhost:3001/users", {
                    first_name: userSubmit.first_name,
                    last_name: userSubmit.last_name,
                    email: userSubmit.email,
                    password: userSubmit.password,
                })
                .then((res) => {
                    alert("Usuário criado com sucesso!");
                    navigate("/login");
                })
                .catch((error) => {
                    alert(error);
                });
        }
    };

    return (
        <>
            <div className="center-block-create-acc">
                <div className="create-acc-block-box">
                    <div className="center"/*  style={{ margin: "20px" }} */>
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

                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="row">
                                <div className="col-6">
                                    <FormInput
                                        inputName="Nome"
                                        type="text"
                                        placeHolder="Primeiro Nome"
                                        defaultValue=""
                                        errorMsg="Por favor, preencha este campo"
                                        formValidate={formValidateFirstName}
                                        width="95%"
                                        labelLeft="20px"
                                    />
                                </div>

                                <div className="col-6">
                                    <FormInput
                                        inputName="Sobrenome"
                                        type="text"
                                        placeHolder="Sobrenome"
                                        defaultValue=""
                                        errorMsg="Por favor, preencha este campo"
                                        formValidate={formValidateLastName}
                                        width="95%"
                                        labelLeft="20px"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <FormInput
                                        inputName="Email"
                                        type="email"
                                        placeHolder="exemplo@email.com"
                                        defaultValue=""
                                        errorMsg={
                                            formValidateEmail
                                                ? "Por favor, preencha este campo"
                                                : formValidateUsedEmail
                                                ? "Email já cadastrado. Insira outro email."
                                                : "a"
                                        }
                                        formValidate={
                                            formValidateEmail
                                                ? formValidateEmail
                                                : formValidateUsedEmail
                                        }
                                        width="98%"
                                        labelLeft="20px"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <FormInput
                                        inputName="Senha"
                                        type="password"
                                        placeHolder="Pelo menos 6 caracteres"
                                        defaultValue=""
                                        errorMsg="Pelo menos 6 caracteres"
                                        formValidate={formValidatePassword}
                                        width="98%"
                                        labelLeft="20px"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <FormInput
                                        inputName="Confirmar Senha"
                                        type="password"
                                        placeHolder=""
                                        defaultValue=""
                                        errorMsg="As senha não são iguais. Tente novamente."
                                        formValidate={
                                            formValidatePasswordConfirm
                                        }
                                        width="98%"
                                        labelLeft="20px"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
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
                                        <span className="forgot-password">
                                            Fazer login
                                        </span>
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
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
