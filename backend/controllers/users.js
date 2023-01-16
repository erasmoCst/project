const { users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secretKey } = require("../config/token.json");

const signUp = async (first_name, last_name, email, password) => {
    try {
        const userData = await users.create({
            first_name,
            last_name,
            email,
            password: await bcrypt.hash(password, 10),
        });

        return userData;
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
};

const login = async (email, password) => {
    try {
        const result = await users.findOne({
            where: {
                email,
            },
        });

        const isPasswordOk = bcrypt.compareSync(password, result.password);

        if (!isPasswordOk) {
            return false;
        }

        return jwt.sign({ id: result.id }, secretKey, {
            expiresIn: "24h",
        });

        //return res.status(401).send("E-mail e/ou senha inválidos.");
    } catch (error) {
        throw error;
    }
};

const findUser = async (email = null) => {
    try {
        if (email) {
            const result = await users.findOne({ where: { email } });
            if (email === result.email) {
                return true;
            }
            /* return true; */
            return result;
        }

        return await users.findAll();
    } catch (error) {
        return false;
        /*  res.status(500).send({ mensagem: error.message }); */
    }
};

const updateUserData = async (id, { first_name, last_name, email, password }) => {
    const result = await users.update(
        {
            first_name,
            last_name,
            email,
            password: await bcrypt.hash(password, 10),
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

module.exports = { signUp, findUser, updateUserData, remover, login };
