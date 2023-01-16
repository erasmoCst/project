const jwt = require("jsonwebtoken");
const { check } = require("express-validator");
const { secretKey } = require("../config/token.json");

const tokenValidation = [
    check("authorization")
        .notEmpty()
        .withMessage("Token não informado")
        .isJWT()
        .withMessage("Token inválido"),
    (req, res, next) => {
        const token = req.headers.authorization;

        if (!token) {
            return res
                .status(401)
                .send({ mensagem: "Token não foi informado" });
        }

        jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                return res.status(401).send({ mensagem: "Token inválido" });
            }

            req.userID = decoded.id;

            next();
        });
    },
];

module.exports = tokenValidation;
