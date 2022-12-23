import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

interface interfacePath {
    path: string;
}

export const PathBreadcrum = (props:interfacePath) => {
    return (
        <div style={{ textDecoration: "none", color: "#0F4C81" }}>
            <Breadcrumb>
                <Breadcrumb.Item
                    style={{ textDecoration: "none", color: "#0F4C81" }}
                >
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#0F4C81" }}
                    >
                        Home
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0F4C81" }}>
                    {props.path}
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};
