import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <footer
                style={{
                    position: "fixed",
                    left: "0",
                    bottom: "0",
                    width: "100%",
                    backgroundColor: "#00264B",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                }}
            >
                <p
                    className="text-center"
                    style={{
                        color: "#FFFFFF",
                        margin: "0",
                    }}
                >
                    Developted by Erasus
                </p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <a href="https://github.com/erasmocst" target="_blank">
                        <FaGithub
                            style={{
                                margin: "5px",
                                color: "#FFFFFF",
                            }}
                        />
                    </a>
                    <a href="https://linkedin.com/in/erasmocst" target="_blank">
                        <FaLinkedin
                            style={{
                                margin: "5px",
                                color: "#FFFFFF",
                            }}
                        />
                    </a>
                </div>
            </footer>
        </>
    );
};
