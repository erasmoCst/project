import React from "react";

import "./style.css";

import { handleExit } from "../../functions";

import { Link } from "react-router-dom";
import ViptechLogo from "./../../images/viptech-logo.svg";

export const Header = () => {
    return (
        <header
            style={{
                backgroundColor: "#00264B",
                width: "100%",
                padding: "1.2rem 0 1.2rem",
                marginBottom: "20px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
        >
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="center-horizontal">
                        <Link className="navbar-brand" to="/">
                            <img
                                style={{ alignItems: "center" }}
                                src={ViptechLogo}
                                alt="Viptech Logo"
                            />
                        </Link>
                    </div>
                </div>

                <div className="col-1 center-vertical">
                    <Link to="/login">
                        <button
                            className="button-exit"
                            onClick={() => {
                                handleExit();
                            }}
                        >
                            Sair
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};
