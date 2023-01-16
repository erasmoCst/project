const { Router } = require("express");
const router = Router();

const {
    searchProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/products");

const tokenValidation = require("../middlewares/tokenValidation");

router.get("/:id?", tokenValidation, async (req, res) => {
    try {
        const result = await searchProduct(req.params.id);

        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

router.post("/", tokenValidation, async (req, res) => {
    try {
        const result = await createProduct(req.body);

        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

router.put("/:id", tokenValidation, async (req, res) => {
    try {
        await updateProduct(req.params.id, req.body);

        const result = await searchProduct(req.params.id);

        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

router.delete("/:id", tokenValidation, async (req, res) => {
    try {
        const result = await deleteProduct(req.params.id);

        res.send(result);
    } catch (error) {
        res.status(500).send({ mensagem: error.message });
    }
});

module.exports = router;
