const { Router } = require("express");
/* const {
    check,
    body,
    validationResult,
    checkSchema,
} = require("express-validator"); */
const {
    findUser,
    createUser,
    atualizar,
    remover,
} = require("../controllers/users");
const router = Router();

/* const verifyToken = require("../middlewares/auth");
const validation = require("../middlewares/validation");
const get = require("../schemas/cliente/get");
const post = require("../schemas/cliente/post");
 */

router.get(
    "/:email?",
/*     verifyToken,
    checkSchema(get),
    validation, */
    async (req, res) => {
        try {
            const result = await findUser(req.params.email);

            res.send(result);
        } catch (error) {
            res.status(500).send({ mensagem: error.message });
        }
    }
);

router.post("/", /* checkSchema(post), validation, */ async (req, res) => {
    try {
        const result = await createUser(req.body);

        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

/* router.put("/:id", verifyToken, async (req, res) => {
    try {
        await atualizar(req.params.id, req.body);
        const result = await buscar(req.params.id);

        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await remover(req.params.id);
        res.send("Remover cliente");
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
}); */

module.exports = router;
