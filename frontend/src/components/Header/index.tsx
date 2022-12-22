import React from "react";
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
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Link className="navbar-brand" to="/">
                    <img
                        style={{ alignItems: "center" }}
                        src={ViptechLogo}
                        alt="Viptech Logo"
                    />
                </Link>
            </div>
        </header>
    );
};
