const { users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
/* const { palavraChave } = require("../config/token.json"); */

const createUser = async ({ first_name, last_name, email, password }) => {
    try {
        const [result, isNewRecord] = await users.findOrCreate({
            defaults: {
                first_name,
                last_name,
                email,
                password,
            },
            where: {
                email,
            },
        });

        console.log("New User?", isNewRecord);

        return result;
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
};

const atualizar = async (id, { nome, senha, cpf }) => {
    const result = await cliente.update(
        {
            nome,
            senha,
            cpf,
        },
        {
            where: {
                id,
            },
        }
    );

    return result;
};

const remover = async (id) => {
    return await cliente.destroy({
        where: {
            id,
        },
    });
};

const findUser = async (id = null) => {
    if (id) {
        return await cliente.findByPk(id);
    }

    return await cliente.findAll();
};

const login = async (email, senha) => {
    try {
        const result = await cliente.scope("login").findOne({
            where: {
                email,
            },
        });

        const senhaValida = bcrypt.compare(senha, result.senha);

        if (!senhaValida) {
            return false;
        }

        return jwt.sign({ id: result.id }, palavraChave, {
            expiresIn: "24h",
        });
    } catch (error) {
        throw error;
    }
};

module.exports = { createUser, atualizar, remover, login };
