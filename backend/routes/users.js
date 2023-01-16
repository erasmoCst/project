const { Router } = require("express");

const { findUser, signUp, updateUserData, removeUser } = require("../controllers/users");

const { authCreateUser } = require("../middlewares/auth");
const tokenValidation = require("../middlewares/tokenValidation");

const router = Router();

router.get(
    "/:email?",
    async (req, res) => {
        try {
            const result = await findUser(req.params.email);

            res.send(result);
        } catch (error) {
            res.status(500).send({ mensagem: error.message });
        }
    }
);

router.post("/", authCreateUser, async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        const result = await signUp(first_name, last_name, email, password);

        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

router.put("/:id", tokenValidation, async (req, res) => {
    try {
        await updateUserData(req.params.id, req.body);

        res.send("Editado");
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

router.delete("/:id", tokenValidation, async (req, res) => {
    try {
        await removeUser(req.params.id);
        res.send("Cliente removido");
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

module.exports = router;
