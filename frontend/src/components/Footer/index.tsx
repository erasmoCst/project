import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#00264B",
          paddingBottom: 15,
          paddingTop: 15,
        }}
      >
        <p
          className="text-center"
          style={{
            color: "#FFFFFF",
            margin: 0,
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
          <FaTwitter
            style={{
              margin: 10,
              color: "#FFFFFF",
            }}
          />

          <a href="https://translate.google.com/?sl=pt&tl=en&text=arvore%20de%20natal%0A&op=translate" target="_blank">
          <FaFacebook
            style={{
              margin: 10,
              color: "#FFFFFF",
            }}
          />
          </a>
          <FaInstagram
            style={{
              margin: 10,
              color: "#FFFFFF",
            }}
          />
        </div>
      </footer>
    </>
  );
};
