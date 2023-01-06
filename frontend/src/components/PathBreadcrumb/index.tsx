import React from "react";
import "./style.css";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
interface interfacePath {
    path: string;
}

export const PathBreadcrum = (props: interfacePath) => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/" style={{ color: "#0F4C81" }}>
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
