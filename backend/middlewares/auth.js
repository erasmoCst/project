const { users } = require("../models");

const authCreateUser = async (req, res, next) => {
    try {
        const userEmail = await users.findOne({
            where: { email: req.body.email },
        });
        if (userEmail) {
            return res
                .status(409)
                .send({ mensagem: "Este e-mail já esta sendo usado." });
        }

        next();
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
};

module.exports = {authCreateUser};
