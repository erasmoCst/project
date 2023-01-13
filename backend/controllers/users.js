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

const login = async (email, password) => {
  try {
    const result = await users.findOne({
      where: {
        email,
      },
    });

    if (result) {
      /* const isPasswordOk = bcrypt.compareSync(password, result.password); */

      if (password === result.password) {
        return true;
      } else return false;
    }
    /*       if (isPasswordOk) {

        return true;
      }
    } else {
      return isPasswordOk;
      return false; */
    /*     } else {
      return res.status(401).send("Authentication failed");
    } */
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, findUser, atualizar, remover, login };
