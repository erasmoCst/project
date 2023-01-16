import React from "react";
import "./style.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <p className="text-center footer-txt">Developted by Erasus</p>
                <div className="center-horizontal">
                    <a href="https://github.com/erasmocst" target="_blank">
                        <FaGithub className="footer-margin" />
                    </a>
                    <a href="https://linkedin.com/in/erasmocst" target="_blank">
                        <FaLinkedin className="footer-margin" />
                    </a>
                </div>
            </footer>
        </>
    );
};
